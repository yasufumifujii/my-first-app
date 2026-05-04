import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const services = [
  {
    number: '01',
    en: 'UX Growth Ops',
    ja: 'UXグロースOps',
    desc: 'データとUXを融合し、継続的なユーザー体験の改善サイクルを構築。事業成長を加速するオペレーションを設計します。',
  },
  {
    number: '02',
    en: 'UX Design Consulting',
    ja: 'UXデザインコンサルティング',
    desc: 'ユーザーリサーチから戦略立案、UIデザインまで。本質的なユーザー課題を解決するデザインプロセスを伴走支援します。',
  },
  {
    number: '03',
    en: 'AI × UX Consulting',
    ja: 'AI×UXコンサルティング',
    desc: '生成AIの可能性とUX思考を掛け合わせた、次世代のプロダクト体験を設計。新規事業・既存改善の両面で支援します。',
    badge: 'NEW',
  },
  {
    number: '04',
    en: 'UX / AI / DX Training',
    ja: 'UX・AI・DX研修',
    desc: '組織全体のUX・AI・デジタルリテラシーを底上げ。実践的なプログラムで現場に即した能力を育みます。',
  },
]

const products = [
  {
    name: 'USERGRAM',
    desc: 'ユーザーの行動ログを可視化し、UX改善のインサイトを発見するBIツール。',
    href: '#',
  },
  {
    name: 'WebAntenna',
    desc: '広告効果の計測・最適化を実現するマーケティングアナリティクスプラットフォーム。',
    href: '#',
  },
]

const newsItems = [
  {
    date: '2025.12.10',
    category: 'Press Release',
    title: 'AI×UXコンサルティングサービスの提供を開始',
  },
  {
    date: '2025.11.20',
    category: 'UX note',
    title: 'なぜ「ユーザー中心設計」は失敗するのか——組織とプロセスの視点から',
  },
  {
    date: '2025.11.01',
    category: 'Seminar',
    title: '【オンライン開催】UXグロースOps導入事例セミナー',
  },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className="label">Since 1997</p>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleEn}>User-Centered</span>
              <span className={styles.heroTitleJa}>ユーザーを中心に、</span>
              <span className={styles.heroTitleJa}>事業の成長を実現する。</span>
            </h1>
            <p className={styles.heroDesc}>
              ビービットは、UXデザインとデータ活用を軸に、<br />
              企業のデジタル変革と持続的な成長を支援します。
            </p>
            <div className={styles.heroActions}>
              <Link to="/service" className={styles.btnPrimary}>
                サービスを見る
              </Link>
              <Link to="/contact" className={styles.btnSecondary}>
                お問い合わせ
              </Link>
            </div>
          </div>
          <div className={styles.heroDeco} ref={heroRef}>
            <div className={styles.decoCircle} />
            <div className={styles.decoSquare} />
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </section>

      {/* Philosophy */}
      <section className={`${styles.philosophy} section`}>
        <div className="container">
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyLabel}>
              <p className="label">Philosophy</p>
            </div>
            <div className={styles.philosophyBody}>
              <h2 className={styles.philosophyTitle}>
                <span className={`${styles.philosophyTitleEn} serif`}>
                  "User First"
                </span>
              </h2>
              <p className={styles.philosophyText}>
                私たちは、ユーザーの行動と感情を深く理解することが、
                すべてのビジネス成長の起点だと信じています。
                1997年の創業以来、一貫してユーザー中心の思想を掲げ、
                数百社以上のデジタルトランスフォーメーションを支援してきました。
              </p>
              <p className={styles.philosophyText}>
                テクノロジーが急速に進化するいまも、
                変わらないのは「人を理解する」という根本的な問いかけです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`${styles.servicesSection} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="label">Service</p>
            <h2 className={styles.sectionTitle}>私たちのサービス</h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <div key={s.number} className={styles.serviceCard}>
                <div className={styles.serviceNumber}>{s.number}</div>
                <div className={styles.serviceBody}>
                  <div className={styles.serviceNameRow}>
                    <h3 className={styles.serviceName}>{s.ja}</h3>
                    {s.badge && (
                      <span className={styles.badge}>{s.badge}</span>
                    )}
                  </div>
                  <p className={styles.serviceEn}>{s.en}</p>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link to="/service" className={styles.linkArrow}>
              すべてのサービスを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className={`${styles.productsSection} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="label">Product</p>
            <h2 className={styles.sectionTitle}>プロダクト</h2>
          </div>
          <div className={styles.productsGrid}>
            {products.map((p) => (
              <a key={p.name} href={p.href} className={styles.productCard}>
                <h3 className={styles.productName}>{p.name}</h3>
                <p className={styles.productDesc}>{p.desc}</p>
                <span className={styles.productLink}>詳細を見る →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className={`${styles.newsSection} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="label">News</p>
            <h2 className={styles.sectionTitle}>最新情報</h2>
          </div>
          <div className={styles.newsList}>
            {newsItems.map((item, i) => (
              <div key={i} className={styles.newsItem}>
                <div className={styles.newsMeta}>
                  <time className={styles.newsDate}>{item.date}</time>
                  <span className={styles.newsCategory}>{item.category}</span>
                </div>
                <p className={styles.newsTitle}>{item.title}</p>
              </div>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link to="/news" className={styles.linkArrow}>
              すべてのNewsを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              <span className="serif">Let's work together.</span>
            </h2>
            <p className={styles.ctaText}>
              ユーザー体験の改善から組織全体のDXまで、<br />
              まずはお気軽にご相談ください。
            </p>
            <Link to="/contact" className={styles.ctaBtn}>
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
