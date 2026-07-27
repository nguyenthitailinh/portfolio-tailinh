import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Lightbox } from '../components/Lightbox'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { projects, type GalleryGroup } from '../data/content'

export function ProjectPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const [active, setActive] = useState<number | null>(null)

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h1>Không tìm thấy dự án</h1>
          <p style={{ margin: '1rem 0' }}>Dự án này chưa có trong portfolio.</p>
          <Button to="/work">Quay lại Work</Button>
        </div>
      </section>
    )
  }

  const gallery = project.gallery.length ? project.gallery : [project.cover]
  const groups = project.galleryGroups

  const openAt = (src: string) => {
    const index = gallery.indexOf(src)
    setActive(index >= 0 ? index : 0)
  }

  return (
    <section className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <Link to="/work" className="back-link">
          ← Tất cả dự án
        </Link>

        <div className="project-hero">
          <Reveal>
            <span className="eyebrow">{project.categoryLabel}</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', margin: '0.6rem 0 0.8rem' }}>
              {project.title}
            </h1>
            <p style={{ color: 'var(--muted)', maxWidth: '36rem' }}>{project.summary}</p>
            <p style={{ marginTop: '1rem', color: 'var(--ink-soft)' }}>
              <strong>{project.year}</strong> · {project.tools.join(' · ')}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <button
              type="button"
              className="project-hero-cover"
              onClick={() => openAt(project.cover)}
              aria-label="Phóng to ảnh bìa"
            >
              <SmartImage src={project.cover} alt={project.title} loading="eager" />
            </button>
          </Reveal>
        </div>

        <div className="metric-row">
          {project.highlights.map((h) => (
            <div className="metric" key={h.label}>
              <strong>{h.value}</strong>
              <span>{h.label}</span>
            </div>
          ))}
        </div>

        {groups?.length ? (
          <div className="gallery-sections">
            {groups.map((group, gi) => (
              <Reveal key={group.title} delay={gi * 0.04}>
                <GallerySection group={group} onOpen={openAt} />
              </Reveal>
            ))}
          </div>
        ) : (
          <>
            <Reveal>
              <div className="section-head" style={{ marginBottom: '1.25rem' }}>
                <span className="eyebrow">Gallery</span>
                <h2>Ảnh dự án</h2>
                <p>Bấm ảnh để xem lớn — dùng ← → hoặc vuốt bằng nút điều hướng.</p>
              </div>
            </Reveal>

            <div className="project-gallery">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className="gallery-item"
                  onClick={() => setActive(i)}
                >
                  <SmartImage src={src} alt={`${project.title} ${i + 1}`} />
                </button>
              ))}
            </div>
          </>
        )}

        <div className="prose-grid" style={{ marginTop: '2.5rem' }}>
          <Reveal>
            <article className="info-block">
              <h2>Thách thức</h2>
              <p>{project.challenge}</p>
            </article>
          </Reveal>
          <Reveal delay={0.05}>
            <article className="info-block">
              <h2>Quy trình</h2>
              <ul>
                {project.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="info-block">
              <h2>Kết quả</h2>
              <p>{project.outcome}</p>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Button to="/work">Dự án khác</Button>
            <Button to="/contact" variant="ghost">
              Trao đổi về dự án này
            </Button>
          </div>
        </Reveal>
      </div>

      {active !== null && (
        <Lightbox
          images={gallery}
          index={active}
          title={project.title}
          onClose={() => setActive(null)}
          onPrev={() => setActive((i) => (i === null ? 0 : (i + gallery.length - 1) % gallery.length))}
          onNext={() => setActive((i) => (i === null ? 0 : (i + 1) % gallery.length))}
        />
      )}
    </section>
  )
}

function GallerySection({
  group,
  onOpen,
}: {
  group: GalleryGroup
  onOpen: (src: string) => void
}) {
  const layout = group.layout ?? 'default'

  return (
    <section className={`gallery-section gallery-section--${layout}`}>
      <div className="gallery-section-head">
        <span className="eyebrow">{layout === 'months' ? 'Full year' : 'Showcase'}</span>
        <h2>{group.title}</h2>
        {layout === 'months' && (
          <p>Hành trình 12 tháng — mỗi trang một địa danh & ẩm thực Việt.</p>
        )}
        {layout === 'mockups' && <p>Thành phẩm lịch để bàn sau khi in — cảm giác thật trên bàn làm việc.</p>}
      </div>

      <div className={`project-gallery project-gallery--${layout}`}>
        {group.items.map((item) => (
          <button
            key={item.src}
            type="button"
            className="gallery-item"
            onClick={() => onOpen(item.src)}
          >
            <SmartImage src={item.src} alt={item.caption ?? group.title} />
            {item.caption && <span className="gallery-caption">{item.caption}</span>}
          </button>
        ))}
      </div>
    </section>
  )
}
