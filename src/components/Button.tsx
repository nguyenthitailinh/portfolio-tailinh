import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'light'

interface Props {
  to?: string
  href?: string
  children: ReactNode
  variant?: Variant
  type?: 'button' | 'submit'
  onClick?: () => void
}

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function Button({
  to,
  href,
  children,
  variant = 'primary',
  type = 'button',
  onClick,
}: Props) {
  const className = `btn btn-${variant}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
        <Arrow />
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
        <Arrow />
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
      <Arrow />
    </button>
  )
}
