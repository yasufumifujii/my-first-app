import { Link } from 'react-router-dom'
import styles from './Service.module.css'

const services = [
  {
    number: '01',
    en: 'UX Growth Ops',
    ja: 'UXグロースOps',
    desc: 'ユーザー行動データの継続的な計測・分析・改善サイクルを組織に組み込み、長期的なグロースを実現する伴走型支援サービスです。',
    details: [
      'ユーザー行動ログの分析基盤構築',
      '継続的UXモニタリングとレポーティング',
      '改善施策の立案・実装支援',
      'グロースチームの組成・育成サポート',
    ],
    color: '#e8f0f8',
  },
  {
    number: '02',
    en: 'UX Design Consulting',
    ja: 'UXデザインコンサルティング',
    desc: 'ユーザーリサーチ・情報設計・UIデザインまでを一貫して支援。ユーザーの本質的なニーズを起点に、事業課題を解決するデザインを実現します。',
    details: [
      'ユーザーインタビュー・調査設計',
      'ユーザビリティテスト実施・分析',
      '情報アーキテクチャ・ワイヤーフレーム設計',
      'UIデザイン・デザインシステム構築',
    ],
    color: '#f0f4ec',
  },
  {
    number: '03',
    en: 'AI × UX Consulting',
    ja: 'AI×UXコンサルティング',
    badge: 'NEW',
    desc: '生成AI・大規模言語モデルを活用したプロダクト体験設計の新領域。AIの可能性を最大化しながら、ユーザーにとって使いやすい体験を構築します。',
    details: [
      'AI活用UX戦略の立案',
      '生成AI機能のユーザビリティ評価',
      'AIチャット・コパイロット体験設計',
      'AI×UXの社内推進・組織変革支援',
    ],
    color: '#f0eef8',
  },
  {
    number: '04',
    en: 'UX / AI / DX Training',
    ja: 'UX・AI・DX研修',
    desc: '企業の競争力の源泉となるデジタルスキルを全社員に。現場で即実践できるカリキュラムで、組織全体のデジタルリテラシーを底上げします。',
    details: [
      'UX思考・デザイン思考研修',
      '生成AI活用実践ワークショップ',
      'DXリーダー育成プログラム',
      'カスタマイズ型社内勉強会支援',
    ],
    color: '#fef8ec',
  },
]

export default function Service() {
  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <p className="label">Service</p>
          <h1 className={styles.pageTitle}>サービス</h1>
          <p className={styles.pageDesc}>
            ユーザー理解を起点に、デジタルビジネスの<br />
            成長をあらゆる角度から支援します。
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesList}>
            {services.map((s, i) => (
              <div
                key={s.number}
                className={`${styles.serviceItem} ${i % 2 === 1 ? styles.serviceItemReverse : ''}`}
              >
                <div className={styles.serviceVisual} style={{ background: s.color }}>
                  <div className={styles.serviceNumber}>{s.number}</div>
                  <div className={styles.serviceEnName}>{s.en}</div>
                </div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceNameRow}>
                    <h2 className={styles.serviceName}>{s.ja}</h2>
                    {s.badge && <span className={styles.badge}>{s.badge}</span>}
                  </div>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <ul className={styles.serviceDetails}>
                    {s.details.map((d) => (
                      <li key={d} className={styles.serviceDetail}>
                        <span className={styles.detailBullet}>—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className={`${styles.productsSection} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="label">Product</p>
            <h2 className={styles.sectionTitle}>プロダクト</h2>
          </div>
          <div className={styles.productsGrid}>
            <a href="#" className={styles.productCard}>
              <div className={styles.productHeader}>
                <h3 className={styles.productName}>USERGRAM</h3>
              </div>
              <p className={styles.productDesc}>
                ユーザーひとりひとりの行動ログを時系列で可視化し、
                UX改善のインサイトを発見するBIツール。
                データドリブンなUX改善サイクルを実現します。
              </p>
              <div className={styles.productTags}>
                <span className={styles.productTag}>ユーザー行動分析</span>
                <span className={styles.productTag}>BIツール</span>
                <span className={styles.productTag}>UX改善</span>
              </div>
              <span className={styles.productLink}>製品サイトへ →</span>
            </a>
            <a href="#" className={styles.productCard}>
              <div className={styles.productHeader}>
                <h3 className={styles.productName}>WebAntenna</h3>
              </div>
              <p className={styles.productDesc}>
                デジタルマーケティングの効果計測と最適化を実現する
                アナリティクスプラットフォーム。広告・SEO・コンテンツ
                の効果を統合的に把握します。
              </p>
              <div className={styles.productTags}>
                <span className={styles.productTag}>広告計測</span>
                <span className={styles.productTag}>マーケティング分析</span>
                <span className={styles.productTag}>ROI最適化</span>
              </div>
              <span className={styles.productLink}>製品サイトへ →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>まずはご相談ください</h2>
            <p className={styles.ctaText}>
              お客様のビジネス課題に合わせて、最適なサービスをご提案します。
            </p>
            <Link to="/contact" className={styles.ctaBtn}>お問い合わせ</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
