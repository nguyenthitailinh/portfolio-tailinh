import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/content'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    form.reset()
  }

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="page-hero">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1>Hãy nói về dự án tiếp theo</h1>
            <p>
              Phù hợp cho doanh nghiệp cần intern UI/UX hoặc Graphic Design. Mình phản hồi nhanh
              qua email hoặc điện thoại.
            </p>
          </Reveal>
        </div>

        <div className="contact-layout">
          <Reveal>
            <aside className="contact-card">
              <div>
                <span className="eyebrow" style={{ color: 'var(--accent)' }}>
                  Direct
                </span>
                <h2 style={{ marginTop: '0.6rem', fontSize: '2rem' }}>{profile.name}</h2>
                <p style={{ color: 'rgba(255,255,255,0.65)' }}>{profile.title}</p>
              </div>
              <div className="contact-list">
                <div>
                  <span>Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
                <div>
                  <span>Phone</span>
                  <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                </div>
                <div>
                  <span>Location</span>
                  <strong>{profile.location}</strong>
                </div>
                <div>
                  <span>Birthday</span>
                  <strong>{profile.birth}</strong>
                </div>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="name">Tên của bạn</label>
                <input id="name" name="name" required placeholder="Nguyễn Văn A" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Nội dung</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Giới thiệu ngắn về vị trí / dự án..."
                />
              </div>
              {sent && (
                <div className="form-success">
                  Đã mở ứng dụng email — gửi giúp mình nếu cửa sổ chưa hiện.
                </div>
              )}
              <Button type="submit">Gửi tin nhắn</Button>
              <p className="form-note">
                Form mở email tới {profile.email}. Không lưu dữ liệu trên server.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
