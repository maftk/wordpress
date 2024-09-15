async function getPosts(){
    const res = await fetch('http://wordpress:80/wp-json/wp/v2/posts',{
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }

    return res.json()
}
async function getPages(){
    const res = await fetch('http://wordpress:80/wp-json/wp/v2/pages',{
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }

    return res.json()
}


export default async function Home() {
  const posts = await getPosts();
  const pages = await getPages();

  return (
    <div>
      <h1>WordPress Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
      <h1>WordPress Pages</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <h2>{page.title.rendered}</h2>
              {console.log(page.content)}
            <div dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
