import { Link } from 'react-router-dom'
import styles from './Recruit.module.css'

const positions = [
  {
    type: '中途採用',
    title: 'UXコンサルタント',
    location: '東京・リモート可',
    employment: '正社員',
    desc: 'クライアントのUX戦略立案から実行まで、一気通貫で支援する上流コンサルタントを募集します。',
  },
  {
    type: '中途採用',
    title: 'UXリサーチャー',
    location: '東京・リモート可',
    employment: '正社員',
    desc: 'ユーザーインタビュー・ユーザビリティテスト・定量分析など多様なリサーチ手法を駆使し、クライアントの意思決定を支援します。',
  },
  {
    type: '中途採用',
    title: 'AIプロダクトUXデザイナー',
    location: '東京・リモート可',
    employment: '正社員',
    desc: '生成AIを活用したプロダクト体験の設計をリードするデザイナーを募集します。新しい領域を一緒に切り拓きましょう。',
    badge: 'NEW',
  },
  {
    type: '中途採用',
    title: 'データアナリスト（UXグロース）',
    location: '東京・リモート可',
    employment: '正社員',
    desc: 'ユーザー行動データの分析を通じて、クライアントのUX改善に貢献するアナリストを募集します。',
  },
  {
    type: '新卒採用',
    title: 'UXコンサルタント（2026年度新卒）',
    location: '東京',
    employment: '正社員',
    desc: '「ユーザーを理解したい」「社会のデジタル化に貢献したい」という方を歓迎します。文理問わず応募可能です。',
  },
]

const values = [
  {
    title: 'User First',
    desc: 'すべての判断基準はユーザー。ユーザーの課題を深く理解することから、すべてが始まります。',
  },
  {
    title: 'Learning Culture',
    desc: '知識と経験の共有を大切にします。社内勉強会、外部登壇、論文購読など、学びを支援する制度が充実。',
  },
  {
    title: 'Ownership',
    desc: '担当クライアントの成功に対してオーナーシップを持つ。プロとして責任ある仕事を大切にします。',
  },
  {
    title: 'Collaboration',
    desc: 'コンサルタント、リサーチャー、デザイナーが密に連携。多様な専門性が融合するチーム環境です。',
  },
]

export default function Recruit() {
  return (
    <div className={styles.page}>
      <section className={styles.pageHeader}>
        <div className="container">
          <p className="label">Recruit</p>
          <h1 className={styles.pageTitle}>採用情報</h1>
          <p className={styles.pageDesc}>
            ユーザーを中心に、デジタル社会をより良くしたい仲間を求めています。
          </p>
        </div>
      </section>

      {/* Message */}
      <section className="section">
        <div className="container">
          <div className={styles.messageGrid}>
            <div>
              <p className="label">Message</p>
            </div>
            <div className={styles.messageBody}>
              <h2 className={styles.messageTitle}>
                「なぜ、ユーザーはそう行動するのか」<br />
                この問いを、一緒に考えましょう。
              </h2>
              <p className={styles.messageText}>
                ビービットは1997年の創業以来、一貫してユーザー中心の視点でクライアントのビジネスを支援してきました。
                時代が変わり、テクノロジーが進化しても、「人を理解する」という根本的な姿勢は変わりません。
              </p>
              <p className={styles.messageText}>
                私たちは、UX・データ・AIを軸に、クライアントとともに未来のデジタル体験を設計しています。
                好奇心旺盛で、ユーザーや社会のために本質的な仕事をしたいと考える方を歓迎します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`${styles.valuesSection} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="label">Values</p>
            <h2 className={styles.sectionTitle}>大切にしていること</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="label">Open Positions</p>
            <h2 className={styles.sectionTitle}>募集職種</h2>
          </div>
          <div className={styles.positionsList}>
            {positions.map((p, i) => (
              <div key={i} className={styles.positionItem}>
                <div className={styles.positionMeta}>
                  <span className={styles.positionType}>{p.type}</span>
                  <div className={styles.positionDetails}>
                    <span>{p.location}</span>
                    <span>{p.employment}</span>
                  </div>
                </div>
                <div className={styles.positionBody}>
                  <div className={styles.positionTitleRow}>
                    <h3 className={styles.positionTitle}>{p.title}</h3>
                    {p.badge && <span className={styles.badge}>{p.badge}</span>}
                  </div>
                  <p className={styles.positionDesc}>{p.desc}</p>
                </div>
                <div className={styles.positionAction}>
                  <Link to="/contact" className={styles.applyBtn}>応募する →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
