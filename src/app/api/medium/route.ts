import { NextResponse } from "next/server";
import { config } from "@/data/config";

function formatCategory(cat: string): string {
  return cat
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export async function GET() {
  try {
    const res = await fetch("https://medium.com/feed/@ayeshamughal21", {
      next: { revalidate: 300 }, // Revalidate cache every 5 minutes for live updates
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!res.ok) {
      throw new Error(`Medium RSS fetch failed with status ${res.status}`);
    }

    const xml = await res.text();
    const itemMatches = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

    const fetchedArticles = itemMatches.map((itemStr, index) => {
      const rawTitle =
        itemStr.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ||
        itemStr.match(/<title>(.*?)<\/title>/)?.[1] ||
        "Untitled Article";
      const title = rawTitle.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

      const linkMatch = itemStr.match(/<link>(.*?)<\/link>/)?.[1] || "https://medium.com/@ayeshamughal21";
      const link = linkMatch.trim().split("?")[0];

      let pub = "Artificial Intelligence in Plain English";
      if (link.includes("codetodeploy")) {
        pub = "Code To Deploy";
      } else if (link.includes("ai.plainenglish.io") || link.includes("plainenglish.io")) {
        pub = "Artificial Intelligence in Plain English";
      } else if (link.includes("@ayeshamughal21")) {
        pub = "Medium Tech Publication";
      }

      const rawPubDate = itemStr.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || new Date().toISOString();
      const pubDate = new Date(rawPubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      const creator = itemStr.match(/<dc:creator><!\[CDATA\[(.*?)\]\]><\/dc:creator>/)?.[1] || "Ayesha Mughal";

      const imgMatch = itemStr.match(/<img[^>]+src=["'](https:\/\/[^"']+)["']/i);
      const coverImage = imgMatch ? imgMatch[1] : undefined;

      const snippetContentMatch =
        itemStr.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/) ||
        itemStr.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/);
      
      let rawText = "";
      let contentSnippet = "";
      let wordCount = 800; // default average

      if (snippetContentMatch) {
        rawText = snippetContentMatch[1]
          .replace(/<[^>]+>/g, " ")
          .replace(/&nbsp;/g, " ")
          .replace(/\s+/g, " ")
          .trim();
        
        wordCount = rawText.split(/\s+/).filter(Boolean).length;
        contentSnippet = rawText.slice(0, 195);
        if (contentSnippet.length >= 195) contentSnippet += "...";
      }

      const categoryMatches = Array.from(itemStr.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g)).map((m) => m[1]);
      const categories = categoryMatches.length
        ? categoryMatches.map(formatCategory).slice(0, 3)
        : ["AI & Engineering", "Python", "Technical Writing"];

      // Read time from word count (200 wpm). The RSS feed has no claps or views.
      const readTime = `${Math.max(2, Math.round(wordCount / 200))} min read`;

      const highlight = index === 0 ? "LATEST RELEASE" : categories[0] || "TECHNICAL DEEP DIVE";

      return {
        id: index + 1,
        title,
        link,
        coverImage,
        contentSnippet,
        pubDate,
        date: pubDate,
        author: creator,
        pub,
        categories,
        highlight,
        readTime,
        wordCount,
      };
    });

    // The feed only carries the latest 10 posts, so append the most-read articles it doesn't include.
    const liveLinks = new Set(fetchedArticles.map((a) => a.link.split("?")[0]));
    const mostRead = config.articles.filter((a) => !liveLinks.has(a.link));

    return NextResponse.json({
      articles: [...fetchedArticles, ...mostRead],
      source: fetchedArticles.length > 0 ? "live" : "fallback",
    });
  } catch (error) {
    console.warn("Falling back to static config articles due to Medium fetch issue:", error);
    return NextResponse.json({ articles: config.articles, source: "fallback" });
  }
}
