import { getAllPosts } from '@/lib/posts'
import BlogList from '@/components/BlogList'

export default async function BlogPage() {
  const posts = await getAllPosts()
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <BlogList posts={posts} />
    </div>
  )
}
