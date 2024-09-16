async function getPosts(){
    const res = await fetch('http://wordpress:80/wp-json/wp/v2/posts',{
        // next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }

    return res.json()
}
async function getPages(){
    const res = await fetch('http://wordpress:80/wp-json/wp/v2/pages',{
        // next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }

    return res.json()
}


export default async function Home() {
  const [posts, pages] = await Promise.all([getPosts(),getPages()])
  return (
    <div>
      <h1>WordPress Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2><a href={`/posts/${post.id}`}>{post.title.rendered}</a></h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
      <h1>WordPress Pages</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
          { console.log(page.id) }
           <h2><a href={`/pages/${page.id}`}>{page.title.rendered}</a></h2>
            <div dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
