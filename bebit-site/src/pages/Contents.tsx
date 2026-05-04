import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllArticles, type ArticleMeta } from '../utils/markdown'
import styles from './Contents.module.css'

const categories = [
  { key: 'all', label: 'すべて' },
  { key: 'ux-note', label: 'UX note' },
  { key: 'blog', label: 'ブログ' },
  { key: 'seminar', label: 'セミナー' },
]

const categoryLabels: Record<string, string> = {
  'ux-note': 'UX note',
  blog: 'Blog',
  seminar: 'Seminar',
}

export default function Contents() {
  const [active, setActive] = useState('all')
  const all = getAllArticles()
  const articles = active === 'all' ? all : all.filter((a) => a.category === active)

  return (
    <div className={styles.page}>
      <section className={styles.pageHeader}>
        <div className="container">
          <p className="label">Contents</p>
          <h1 className={styles.pageTitle}>コンテンツ</h1>
          <p className={styles.pageDesc}>
            UX・AI・DXに関する知見を、記事・ブログ・セミナーを通じてお届けします。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.tabs}>
            {categories.map((c) => (
              <button
                key={c.key}
                className={`${styles.tab} ${active === c.key ? styles.tabActive : ''}`}
                onClick={() => setActive(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {articles.length === 0 ? (
            <p className={styles.empty}>記事がありません。</p>
          ) : (
            <div className={styles.grid}>
              {articles.map((article) => (
                <ArticleCard key={`${article.category}/${article.slug}`} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      to={`/contents/${article.category}/${article.slug}`}
      className={styles.card}
    >
      <div className={styles.cardMeta}>
        <time className={styles.cardDate}>{article.date}</time>
        <span className={styles.cardCategory}>
          {categoryLabels[article.category] ?? article.category}
        </span>
      </div>
      <h2 className={styles.cardTitle}>{article.title}</h2>
      <p className={styles.cardExcerpt}>{article.excerpt}</p>
      <div className={styles.cardFooter}>
        <span className={styles.cardAuthor}>{article.author}</span>
        <span className={styles.cardReadMore}>続きを読む →</span>
      </div>
    </Link>
  )
}
