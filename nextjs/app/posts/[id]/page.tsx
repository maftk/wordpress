//app/posts/[id]/page.tsx
import fetch from 'node-fetch';
import ClientPostComponent from '@/components/ClientPostComponent';

async function getPost(id: string) {
  const res = await fetch(`http://wordpress:80/wp-json/wp/v2/posts/${id}`);
  if (!res.ok) {
      throw new Error('Failed to fetch post')
  }
  return res.json();
}


export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <ClientPostComponent post={post} />
  )
}
