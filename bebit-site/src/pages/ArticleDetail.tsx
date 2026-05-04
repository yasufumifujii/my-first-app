import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getArticle } from '../utils/markdown'
import styles from './ArticleDetail.module.css'

const categoryLabels: Record<string, string> = {
  'ux-note': 'UX note',
  blog: 'Blog',
  seminar: 'Seminar',
}

export default function ArticleDetail() {
  const { category = '', slug = '' } = useParams()
  const article = getArticle(category, slug)

  if (!article) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <p>記事が見つかりませんでした。</p>
          <Link to="/contents" className={styles.back}>← Contentsに戻る</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <article>
        <header className={styles.header}>
          <div className="container">
            <div className={styles.headerMeta}>
              <Link to="/contents" className={styles.back}>← Contents</Link>
              <span className={styles.category}>
                {categoryLabels[article.category] ?? article.category}
              </span>
            </div>
            <h1 className={styles.title}>{article.title}</h1>
            <div className={styles.meta}>
              <time className={styles.date}>{article.date}</time>
              <span className={styles.author}>{article.author}</span>
            </div>
            {article.eventDate && (
              <div className={styles.eventInfo}>
                <div className={styles.eventRow}>
                  <span className={styles.eventLabel}>開催日</span>
                  <span>{article.eventDate}</span>
                </div>
                {article.eventTime && (
                  <div className={styles.eventRow}>
                    <span className={styles.eventLabel}>時間</span>
                    <span>{article.eventTime}</span>
                  </div>
                )}
                {article.format && (
                  <div className={styles.eventRow}>
                    <span className={styles.eventLabel}>形式</span>
                    <span>{article.format}</span>
                  </div>
                )}
              </div>
            )}
            <p className={styles.excerpt}>{article.excerpt}</p>
          </div>
        </header>

        <div className={styles.body}>
          <div className="container">
            <div className={styles.prose}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>

      <div className={styles.footer}>
        <div className="container">
          <Link to="/contents" className={styles.backLink}>
            ← すべてのコンテンツに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
