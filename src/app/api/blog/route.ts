import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

const HASHNODE_USERNAME = 'mughalsyntax';
const MEDIUM_USERNAME = 'ayeshamughal21';

// Updated Hashnode query with correct fields according to latest API schema
const hashnodeQuery = `
  query GetUserArticles($username: String!) {
    user(username: $username) {
      publications(first: 1) {
        edges {
          node {
            title
            posts(first: 10) {
              edges {
                node {
                  title
                  brief
                  slug
                  publishedAt
                  coverImage {
                    url
                  }
                  views
                  responseCount
                }
              }
            }
          }
        }
      }
    }
  }
`;

async function fetchHashnodePosts() {
  try {
    const response = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: hashnodeQuery,
        variables: {
          username: HASHNODE_USERNAME,
        },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Hashnode API Error:', data.errors);
      return [];
    }

    const publication = data.data?.user?.publications?.edges[0]?.node;
    if (!publication) {
      console.error('No publication found for user');
      return [];
    }

    const posts = publication.posts?.edges || [];
    
    return posts.map(({ node: post }: any) => ({
      title: post.title,
      description: post.brief,
      link: `https://hashnode.com/@${HASHNODE_USERNAME}/${post.slug}`,
      date: new Date(post.publishedAt).toISOString(),
      image: post.coverImage?.url || null,
      reactions: post.views || 0,
      comments: post.responseCount || 0,
      platform: 'Hashnode'
    }));
  } catch (error) {
    console.error('Error fetching Hashnode posts:', error);
    return [];
  }
}

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
    // Fetch posts from both platforms concurrently
    const [hashnodePosts, mediumPosts] = await Promise.all([
      fetchHashnodePosts(),
      fetchMediumPosts()
    ]);

    // Log the number of posts fetched for debugging
    console.log('Hashnode posts fetched:', hashnodePosts.length);
    console.log('Medium posts fetched:', mediumPosts.length);

    // Combine and sort posts by date
    const allPosts = [...hashnodePosts, ...mediumPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json(allPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json([]);
  }
} 
