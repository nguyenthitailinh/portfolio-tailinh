import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import {
  education,
  experiences,
  goals,
  profile,
  skills,
} from '../data/content'

export function AboutPage() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="page-hero">
          <Reveal>
            <span className="eyebrow">About me</span>
            <h1>Xin chào, mình là {profile.shortName}</h1>
            <p>
              Sinh ngày {profile.birth}. UI/UX Designer với nền tảng Digital Art Design tại{' '}
              {education.schoolShort}, GPA {education.gpa}. Đã thực tập Graphic Design tại Onset
              Marketing và Figma.
            </p>
          </Reveal>
        </div>

        <div className="about-layout">
          <Reveal>
            <div className="about-portrait">
              <SmartImage
                src={profile.portrait}
                webp={profile.portraitWebp}
                alt={profile.name}
                loading="eager"
              />
            </div>
          </Reveal>

          <div className="about-stack">
            <Reveal>
              <article className="info-block">
                <h2>Câu chuyện ngắn</h2>
                <p>{profile.intro}</p>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="info-block">
                <h2>Mục tiêu nghề nghiệp</h2>
                <p>
                  <strong>Ngắn hạn:</strong> {goals.short}
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                  <strong>Dài hạn:</strong> {goals.long}
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="info-block">
                <h2>Học vấn</h2>
                <p>
                  <strong>{education.school}</strong>
                </p>
                <p>
                  Chuyên ngành {education.major} · GPA {education.gpa}
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h2 style={{ marginBottom: '1rem', fontSize: '1.6rem' }}>Kinh nghiệm</h2>
                <div className="timeline">
                  {experiences.map((exp) => (
                    <article className="timeline-item" key={exp.company}>
                      <div className="period">{exp.period}</div>
                      <h3>{exp.role}</h3>
                      <div className="company">{exp.company}</div>
                      <ul>
                        {exp.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="info-block">
                <h2>Kỹ năng</h2>
                <div className="skill-groups">
                  <div className="skill-group">
                    <h4>Design</h4>
                    <div className="chips">
                      {skills.design.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="skill-group">
                    <h4>Web</h4>
                    <div className="chips">
                      {skills.web.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="skill-group">
                    <h4>Soft skills</h4>
                    <div className="chips">
                      {skills.soft.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Button to="/work">Xem work</Button>
                <Button to="/contact" variant="ghost">
                  Kết nối
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
