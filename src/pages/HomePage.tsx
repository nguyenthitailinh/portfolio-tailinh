import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { FeaturedProjectCard } from '../components/Layout'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { education, principles, profile, projects } from '../data/content'

export function HomePage() {
  const featured = projects.slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-orbit" aria-hidden="true">
              <span />
            </div>
            <div className="hero-frame">
              <SmartImage
                src={profile.portrait}
                webp={profile.portraitWebp}
                alt={profile.name}
                loading="eager"
              />
              <div className="hero-badge">
                <strong>Open to internships</strong>
                UI/UX · Graphic · Packaging
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-brand">{profile.name}</p>
            <h1>
              {profile.title} với <em>trái tim</em> cho trải nghiệm
            </h1>
            <p className="hero-lead">{profile.intro}</p>
            <div className="hero-actions">
              <Button to="/work">Xem dự án</Button>
              <Button to="/about" variant="ghost">
                Về tôi
              </Button>
            </div>
            <div className="hero-meta">
              <div>
                <strong>GPA {education.gpa}</strong>
                <span>Digital Art Design · VKU</span>
              </div>
              <div>
                <strong>Onset + Figma</strong>
                <span>Graphic / UI Design Intern</span>
              </div>
              <div>
                <strong>02/09/2005</strong>
                <span>Đà Nẵng, Việt Nam</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="stats">
              <div className="stat">
                <strong>3.7</strong>
                <span>GPA tại VKU</span>
              </div>
              <div className="stat">
                <strong>7</strong>
                <span>Dự án showcase</span>
              </div>
              <div className="stat">
                <strong>60+</strong>
                <span>Ảnh portfolio</span>
              </div>
              <div className="stat">
                <strong>2</strong>
                <span>Kỳ thực tập thiết kế</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Selected work</span>
              <h2>Dự án nổi bật</h2>
              <p>
                Packaging Kinh Đô, lịch minh họa, social F&B và editorial — toàn bộ ảnh lấy từ
                sản phẩm thật bạn đã làm.
              </p>
            </div>
          </Reveal>

          <div className="featured-list">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.08}>
                <FeaturedProjectCard {...project} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div style={{ marginTop: '1.75rem' }}>
              <Button to="/work" variant="ghost">
                Xem tất cả dự án
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Design principles</span>
              <h2>Cách tôi tiếp cận thiết kế</h2>
              <p>Những nguyên tắc giúp mỗi quyết định UI/UX đi đúng mục tiêu.</p>
            </div>
          </Reveal>
          <div className="principles">
            {principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="principle">
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <div>
                <span className="eyebrow" style={{ color: 'var(--accent)' }}>
                  Let&apos;s collaborate
                </span>
                <h2>Doanh nghiệp đang tìm designer thực tập?</h2>
                <p>
                  Tôi sẵn sàng đóng góp vào sản phẩm thật — từ research, wireframe đến visual
                  polish. Hãy kể cho tôi về team và bài toán của bạn.
                </p>
              </div>
              <div className="cta-actions">
                <Button to="/contact" variant="light">
                  Liên hệ ngay
                </Button>
                <Button href={`mailto:${profile.email}`} variant="ghost">
                  Email
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
