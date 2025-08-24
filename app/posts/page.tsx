import { prisma } from "@/lib/prisma";
import Link from "next/link";

const page = async () => {
  const post = await prisma.posts.findMany();
  return (
    <>
      {post.map((p: any) => (
        <div key={p.id}>
          <Link href={`/posts/${p.id}`}>{p.title}</Link>
        </div>
      ))}
    </>
  );
};

export default page;
