import styles from './News.module.css'

const newsItems = [
  {
    date: '2025.12.10',
    category: 'プレスリリース',
    title: 'AI×UXコンサルティングサービスの提供を開始',
    desc: '生成AI時代のユーザー体験設計を支援する新サービス「AI×UXコンサルティング」の提供を開始しました。',
  },
  {
    date: '2025.11.15',
    category: '受賞',
    title: '「UXグロースOps」が日本UX推進協議会アワードを受賞',
    desc: 'ビービットの独自アプローチ「UXグロースOps」が、日本UX推進協議会主催のアワードにおいて優秀賞を受賞しました。',
  },
  {
    date: '2025.10.01',
    category: 'プレスリリース',
    title: '株式会社〇〇とのパートナーシップ締結を発表',
    desc: 'デジタルトランスフォーメーション支援の強化に向け、株式会社〇〇と戦略的パートナーシップを締結いたしました。',
  },
  {
    date: '2025.09.12',
    category: 'メディア掲載',
    title: '日本経済新聞にビービットのAI×UXへの取り組みが掲載されました',
    desc: '2025年9月12日付の日本経済新聞にて、当社のAI×UXへの取り組みが紹介されました。',
  },
  {
    date: '2025.08.30',
    category: 'プレスリリース',
    title: 'USERGRAM 新バージョン v4.0 リリース',
    desc: 'ユーザー行動分析ツール「USERGRAM」の大型アップデートを実施。AI分析機能が強化されました。',
  },
  {
    date: '2025.07.01',
    category: 'お知らせ',
    title: '本社オフィス移転のお知らせ',
    desc: '2025年7月1日より、本社オフィスを東京都千代田区に移転いたします。',
  },
]

export default function News() {
  return (
    <div className={styles.page}>
      <section className={styles.pageHeader}>
        <div className="container">
          <p className="label">News</p>
          <h1 className={styles.pageTitle}>ニュース</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.list}>
            {newsItems.map((item, i) => (
              <div key={i} className={styles.item}>
                <div className={styles.itemMeta}>
                  <time className={styles.date}>{item.date}</time>
                  <span className={styles.category}>{item.category}</span>
                </div>
                <div className={styles.itemBody}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
