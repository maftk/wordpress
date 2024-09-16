//app/pages/[id]/ClientPageComponent.tsx
"use client";

interface PageProps {
  page: any;
}

export default function ClientPageComponent({ page }: PageProps) {
  return (
    <> 
      <h1>{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered  }} />
    </>
  );
}
