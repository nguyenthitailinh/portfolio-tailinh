import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SmartImage } from '../components/SmartImage'
import { categories, projects, type ProjectCategory } from '../data/content'

export function WorkPage() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section className="section work-page" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="page-hero page-hero-compact">
          <span className="eyebrow">Portfolio</span>
          <h1>Work theo danh mục</h1>
          <p>
            {projects.length} dự án thật — Packaging, Social, Graphic, Editorial, Illustration và
            UI/UX ứng dụng học tập. Chọn danh mục để lọc nhanh.
          </p>

          <div className="filter-bar" role="tablist" aria-label="Lọc danh mục">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={filter === cat.id}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
                {cat.id !== 'all' && (
                  <span className="filter-count">
                    {projects.filter((p) => p.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="work-empty">Chưa có dự án trong danh mục này.</p>
        ) : (
          <div className="work-grid">
            {filtered.map((project) => (
              <Link key={project.id} to={`/work/${project.id}`} className="work-card">
                <div className="work-card-media">
                  <SmartImage src={project.cover} alt={project.title} loading="eager" />
                </div>
                <div className="work-card-body">
                  <span className="tag">{project.categoryLabel}</span>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <span className="gallery-count">{project.gallery.length} ảnh</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
