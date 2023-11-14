import { getPostBySlug } from "../lib/merchs";
import Link from "next/link";
import { notFound } from "next/navigation";




type MerchItemsParams = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: MerchItemsParams) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }
return (
  <>
  <h1 className="">{post.name}</h1>
  <p className="">{post.price}</p>
  <p className="">{post.size}</p>
  <p className="">{post.description}</p>
  </>
)


}