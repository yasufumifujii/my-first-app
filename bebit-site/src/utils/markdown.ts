export interface ArticleMeta {
  title: string
  date: string
  category: string
  author: string
  excerpt: string
  slug: string
  eventDate?: string
  eventTime?: string
  format?: string
}

export interface Article extends ArticleMeta {
  content: string
}

// Vite 5+ glob import: query '?raw' returns the raw string as default export
const modules = import.meta.glob('../content/**/*.md', { query: '?raw', eager: true }) as Record<
  string,
  { default: string }
>

function parseFrontmatter(raw: string): { meta: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: raw }

  const frontmatter = match[1]
  const content = match[2]
  const meta: Record<string, string> = {}

  frontmatter.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) return
    const key = line.slice(0, colonIndex).trim()
    const value = line.slice(colonIndex + 1).trim()
    meta[key] = value
  })

  return { meta, content }
}

function pathToSlug(path: string): string {
  return path.split('/').pop()?.replace('.md', '') ?? ''
}

function pathToCategory(path: string): string {
  const parts = path.split('/')
  return parts[parts.length - 2]
}

export function getAllArticles(): ArticleMeta[] {
  const articles: ArticleMeta[] = []

  for (const [path, mod] of Object.entries(modules)) {
    const raw = mod.default
    const { meta } = parseFrontmatter(raw)
    const slug = pathToSlug(path)
    const category = pathToCategory(path)

    articles.push({
      title: meta['title'] ?? '',
      date: meta['date'] ?? '',
      category: meta['category'] ?? category,
      author: meta['author'] ?? '',
      excerpt: meta['excerpt'] ?? '',
      slug,
      eventDate: meta['eventDate'],
      eventTime: meta['eventTime'],
      format: meta['format'],
    })
  }

  return articles.sort((a, b) => b.date.localeCompare(a.date))
}

export function getArticle(category: string, slug: string): Article | null {
  const key = `../content/${category}/${slug}.md`
  const mod = modules[key]
  if (!mod) return null

  const raw = mod.default
  const { meta, content } = parseFrontmatter(raw)

  return {
    title: meta['title'] ?? '',
    date: meta['date'] ?? '',
    category: meta['category'] ?? category,
    author: meta['author'] ?? '',
    excerpt: meta['excerpt'] ?? '',
    slug,
    eventDate: meta['eventDate'],
    eventTime: meta['eventTime'],
    format: meta['format'],
    content,
  }
}
