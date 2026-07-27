import { Link, Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ProgressBar } from './ProgressBar'
import { SmartImage } from './SmartImage'
import { useEffect } from 'react'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="page-shell">
      <a href="#main" className="sr-only">
        Skip to content
      </a>
      <ProgressBar />
      <Navbar />
      <main id="main" key={location.pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export function ProjectLinkArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FeaturedProjectCard({
  id,
  title,
  subtitle,
  categoryLabel,
  cover,
}: {
  id: string
  title: string
  subtitle: string
  categoryLabel: string
  cover: string
}) {
  return (
    <Link to={`/work/${id}`} className="project-row">
      <div className="project-media">
        <SmartImage src={cover} alt="" />
      </div>
      <div className="project-body">
        <span className="tag">{categoryLabel}</span>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <span className="project-link">
          Xem case study <ProjectLinkArrow />
        </span>
      </div>
    </Link>
  )
}

