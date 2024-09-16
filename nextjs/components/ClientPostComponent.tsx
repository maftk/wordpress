//app/posts/[id]/ClientPostComponent.tsx
// "use client";
interface PostProps {
  post: any;
}

export default function ClientPostComponent({ post }: PostProps) {
  return (
    <>
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </>
  );
}
