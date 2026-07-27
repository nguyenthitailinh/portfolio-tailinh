import { Link } from 'react-router-dom'
import { profile } from '../data/content'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong>{profile.name}</strong>
            <p>{profile.title}</p>
            <p>{profile.email}</p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <p>{profile.location}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.shortName}. All rights reserved.</span>
          <span>Designed with intention · Built for clarity</span>
        </div>
      </div>
    </footer>
  )
}
