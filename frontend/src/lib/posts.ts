import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'src', 'content', 'posts')

export type PostMeta = { title: string; date: string; description?: string; slug: string }

export async function getAllPosts(): Promise<{ slug: string; meta: any }[]> {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  const posts = files.map(f => {
    const full = path.join(postsDir, f)
    const raw = fs.readFileSync(full, 'utf8')
    const { data } = matter(raw)
    const slug = f.replace(/\.md$/, '')
    return { slug, meta: { ...data } }
  })
  // optional: sort by date desc
  posts.sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1))
  return posts
}

export async function getPostBySlug(slug: string) {
  const full = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(full)) return null
  const raw = fs.readFileSync(full, 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()
  return { slug, meta: data, contentHtml }
}
