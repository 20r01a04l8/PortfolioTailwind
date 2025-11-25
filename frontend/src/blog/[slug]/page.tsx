import { getPostBySlug, getAllPosts } from '@/lib/posts'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) return <div>Not found</div>
  return (
    <article className="prose lg:prose-xl max-w-none">
      <h1>{post.meta.title}</h1>
      <p className="text-sm text-gray-500">{post.meta.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  )
}
