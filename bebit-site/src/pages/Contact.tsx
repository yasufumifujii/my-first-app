import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({
    type: '',
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.thanksWrapper}>
          <div className={styles.thanks}>
            <p className="label">Thank you</p>
            <h1 className={styles.thanksTitle}>お問い合わせありがとうございます</h1>
            <p className={styles.thanksText}>
              内容を確認の上、担当者よりご連絡いたします。<br />
              通常3営業日以内にご返信いたします。
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <section className={styles.pageHeader}>
        <div className="container">
          <p className="label">Contact</p>
          <h1 className={styles.pageTitle}>お問い合わせ</h1>
          <p className={styles.pageDesc}>
            サービスのご相談・採用に関するお問い合わせなど、<br />
            お気軽にご連絡ください。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.info}>
              <div className={styles.infoBlock}>
                <p className="label">Service Inquiry</p>
                <p className={styles.infoText}>
                  UXコンサルティング・UXグロースOps・研修など、
                  サービスに関するご相談はフォームよりお送りください。
                </p>
              </div>
              <div className={styles.infoBlock}>
                <p className="label">Response Time</p>
                <p className={styles.infoText}>
                  通常3営業日以内にご返信いたします。<br />
                  お急ぎの方はお電話でもお問い合わせいただけます。
                </p>
              </div>
              <div className={styles.infoBlock}>
                <p className="label">Tel</p>
                <p className={styles.infoText}>03-XXXX-XXXX</p>
                <p className={styles.infoSub}>平日 10:00〜18:00</p>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label}>
                  お問い合わせ種別 <span className={styles.required}>必須</span>
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="">選択してください</option>
                  <option>サービスについて</option>
                  <option>UXグロースOpsについて</option>
                  <option>AI×UXコンサルティングについて</option>
                  <option>研修・トレーニングについて</option>
                  <option>プロダクト（USERGRAM/WebAntenna）について</option>
                  <option>採用について</option>
                  <option>その他</option>
                </select>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>
                    会社名 <span className={styles.required}>必須</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="株式会社〇〇"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>
                    お名前 <span className={styles.required}>必須</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="山田 太郎"
                    required
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>
                    メールアドレス <span className={styles.required}>必須</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="example@company.com"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>電話番号</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="03-XXXX-XXXX"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>
                  お問い合わせ内容 <span className={styles.required}>必須</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={6}
                  placeholder="ご相談内容をご記入ください"
                  required
                />
              </div>

              <div className={styles.agreeRow}>
                <label className={styles.agreeLabel}>
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                    className={styles.checkbox}
                    required
                  />
                  <span>
                    <a href="#" className={styles.privacyLink}>プライバシーポリシー</a>
                    に同意します
                  </span>
                </label>
              </div>

              <button type="submit" className={styles.submitBtn}>
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
