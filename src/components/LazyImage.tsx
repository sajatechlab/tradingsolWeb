import { useState } from 'react'

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
      className={`${isLoaded ? 'visible' : 'invisible'} ${className}`}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  )
}
