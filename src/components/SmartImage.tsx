interface Props {
  src: string
  webp?: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

/** Serves WebP with JPEG/PNG fallback. */
export function SmartImage({ src, webp, alt, className, loading = 'lazy' }: Props) {
  const webpSrc = webp ?? src.replace(/\.(jpe?g|png)$/i, '.webp')
  const usePicture = /\.(jpe?g|png)$/i.test(src)

  if (!usePicture) {
    return <img src={src} alt={alt} className={className} loading={loading} />
  }

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} className={className} loading={loading} />
    </picture>
  )
}
