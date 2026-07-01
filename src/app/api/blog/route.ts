import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

const MEDIUM_USERNAME = 'ayeshamughal21';

async function fetchMediumPosts() {
  try {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`);
    const data = await response.json();

    if (data.status !== 'ok') {
      console.error('Medium RSS Error:', data);
      return [];
    }

    return data.items.map((post: any) => {
      // Extract image from description if thumbnail is missing
      let imageUrl = post.thumbnail;
      if (!imageUrl || imageUrl === "") {
        const imgMatch = post.description.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch && imgMatch[1]) {
          imageUrl = imgMatch[1];
        }
      }

      return {
        title: post.title,
        description: post.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
        link: post.link,
        date: post.pubDate,
        image: imageUrl || null,
        reactions: 0,
        comments: 0,
        platform: 'Medium'
      };
    });
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
}

export async function GET() {
  try {
    const mediumPosts = await fetchMediumPosts();
    console.log('Medium posts fetched:', mediumPosts.length);

    const allPosts = mediumPosts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json(allPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json([]);
  }
}
