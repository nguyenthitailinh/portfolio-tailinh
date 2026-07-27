import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { SmartImage } from '../components/SmartImage'
import { categories, projects, type ProjectCategory } from '../data/content'

export function WorkPage() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="page-hero">
          <Reveal>
            <span className="eyebrow">Portfolio</span>
            <h1>Work theo danh mục</h1>
            <p>
              Ảnh thật từ các dự án Packaging, Graphic, Editorial và Illustration — lọc nhanh theo
              nhóm bạn quan tâm.
            </p>
          </Reveal>

          <div className="filter-bar" role="tablist" aria-label="Lọc danh mục">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={filter === cat.id}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="work-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <Link to={`/work/${project.id}`} className="work-card">
                  <div className="work-card-media">
                    <SmartImage src={project.cover} alt="" />
                  </div>
                  <div className="work-card-body">
                    <span className="tag">{project.categoryLabel}</span>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                    <span className="gallery-count">{project.gallery.length} ảnh</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
