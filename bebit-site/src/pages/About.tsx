import styles from './About.module.css'

const history = [
  { year: '1997', event: 'ビービット株式会社を東京・渋谷区に設立' },
  { year: '2001', event: 'Webユーザビリティコンサルティング事業を開始' },
  { year: '2005', event: 'ユーザー行動分析ツール「WebAntenna」をリリース' },
  { year: '2010', event: 'スマートフォン・モバイルUX支援を開始' },
  { year: '2014', event: 'ユーザー行動BIツール「USERGRAM」をリリース' },
  { year: '2018', event: '上海・台北にアジア拠点を開設' },
  { year: '2022', event: 'UXグロースOpsサービスの提供を開始' },
  { year: '2025', event: 'AI×UXコンサルティングサービスを開始' },
]

const team = [
  {
    name: '遠藤 直紀',
    role: '代表取締役',
    bio: '1997年にビービットを創業。ユーザー中心設計の普及に取り組み続け、著書「UXグロース戦略」は累計3万部を突破。',
  },
  {
    name: '武井 由紀子',
    role: '取締役 COO',
    bio: 'ビービット入社後、コンサルティング部門をリード。大手金融・EC・SaaSなど多数の企業のUX改革を牽引。',
  },
  {
    name: '田中 誠',
    role: 'シニアUXコンサルタント',
    bio: 'ユーザーリサーチとUX戦略を専門とする。講演・執筆活動も積極的に行い、UX啓発に貢献。',
  },
]

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.pageHeader}>
        <div className="container">
          <p className="label">About</p>
          <h1 className={styles.pageTitle}>私たちについて</h1>
          <p className={styles.pageDesc}>
            ビービットは1997年創業のUXコンサルティングファームです。<br />
            「ユーザーを中心に、ビジネスの成長を実現する」を理念に掲げ、<br />
            国内外の企業のデジタル変革を支援しています。
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div className={styles.philosophyGrid}>
            <div>
              <p className="label">Philosophy</p>
            </div>
            <div className={styles.philosophyBody}>
              <h2 className={styles.philosophyTitle}>
                <span className={`${styles.philosophyEn} serif`}>"User First"</span>
              </h2>
              <p className={styles.philosophyText}>
                私たちは、ユーザーの行動と感情を深く理解することが、
                すべてのビジネス成長の起点だと信じています。
              </p>
              <p className={styles.philosophyText}>
                テクノロジーがいかに進化しても、人が中心である限り、
                ユーザーを理解することは普遍的な競争優位の源泉です。
                1997年の創業以来、この信念のもとに歩み続けてきました。
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNum}>28</span>
                  <span className={styles.statLabel}>Years</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>500+</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>3</span>
                  <span className={styles.statLabel}>Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className={`${styles.historySection} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="label">History</p>
            <h2 className={styles.sectionTitle}>沿革</h2>
          </div>
          <div className={styles.timeline}>
            {history.map((h) => (
              <div key={h.year} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{h.year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineEvent}>{h.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="label">Team</p>
            <h2 className={styles.sectionTitle}>メンバー</h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.memberCard}>
                <div className={styles.memberAvatar}>
                  <span className={styles.memberInitial}>
                    {member.name[0]}
                  </span>
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className={`${styles.companySection} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="label">Company</p>
            <h2 className={styles.sectionTitle}>会社概要</h2>
          </div>
          <table className={styles.companyTable}>
            <tbody>
              {[
                ['会社名', '株式会社ビービット'],
                ['設立', '1997年（平成9年）'],
                ['代表取締役', '遠藤 直紀'],
                ['所在地', '東京都千代田区 〒100-XXXX'],
                ['事業内容', 'UXコンサルティング、UXグロースOps、AI×UXコンサルティング、UX・AI・DX研修、プロダクト（USERGRAM、WebAntenna）'],
                ['拠点', '東京（本社）、上海、台北'],
              ].map(([label, value]) => (
                <tr key={label} className={styles.companyRow}>
                  <th className={styles.companyLabel}>{label}</th>
                  <td className={styles.companyValue}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
