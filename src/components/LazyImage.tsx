import { useState } from 'react'
import './LazyImage.css'

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

export function LazyImage({ src, alt, className, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <img
      src={src}
      alt={alt}
      className={`transition-all ${
        isLoaded ? 'lazy-loaded' : 'lazy-loading'
      } ${className}`}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  )
}
