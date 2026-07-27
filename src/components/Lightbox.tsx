import { useEffect, useCallback } from 'react'

interface Props {
  images: string[]
  index: number
  title: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ images, index, title, onClose, onPrev, onNext }: Props) {
  const src = images[index]

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext],
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onKey])

  if (!src) return null

  const webp = src.replace(/\.(jpe?g|png)$/i, '.webp')

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={title}>
      <button className="lightbox-backdrop" aria-label="Đóng" onClick={onClose} />
      <div className="lightbox-inner">
        <button className="lightbox-close" onClick={onClose} aria-label="Đóng">
          ×
        </button>
        <button className="lightbox-nav prev" onClick={onPrev} aria-label="Ảnh trước">
          ‹
        </button>
        <picture>
          <source srcSet={webp} type="image/webp" />
          <img src={src} alt={`${title} — ${index + 1}`} />
        </picture>
        <button className="lightbox-nav next" onClick={onNext} aria-label="Ảnh sau">
          ›
        </button>
        <p className="lightbox-count">
          {index + 1} / {images.length}
        </p>
      </div>
    </div>
  )
}
