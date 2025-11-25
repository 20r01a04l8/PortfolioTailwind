import Link from "next/link"

export default function BlogList({ posts }: { posts: any[] }){
  return (
    <div className="grid gap-4">
      {posts.map(p => (
        <article key={p.slug} className="border rounded p-4">
          <Link href={`/blog/${p.slug}`}  className="text-xl font-semibold">{p.meta.title}</Link>
          <p className="text-sm text-muted mt-1">{p.meta.date}</p>
          <p className="mt-2 text-sm">{p.meta.description}</p>
        </article>
      ))}
    </div>
  )
}
