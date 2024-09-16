//app/pages/[id]/page.tsx
import fetch from 'node-fetch';
import ClientPageComponent from '@/components/ClientPageComponent';

async function getPage(id: string) {
  const res = await fetch(`http://wordpress:80/wp-json/wp/v2/pages/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch page');
  }
  return res.json();
}

export default async function PagePage({ params }: {params: { id: string  } }) {
  const page = await getPage(params.id);
  return (
    <ClientPageComponent page={page} />
  );
}
