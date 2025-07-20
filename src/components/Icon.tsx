import { useMemo } from 'react'
import { SPRITE_MAP, ICON_SIZE, SPRITE_COLUMNS, SPRITE_ROWS } from '../utils/spriteMap'

type IconProps = {
  name: string
  size?: number
  className?: string
  style?: React.CSSProperties
  responsive?: boolean // Allow CSS to control sizing
}

export const Icon = ({ name, size = 56, className = '', style, responsive = false }: IconProps) => {
  const spriteUrl = '/src/assets/icons/spritesheet.webp'
  
  const position = useMemo(() => {
    // Remove .webp extension if present
    const iconKey = name.replace('.webp', '')
    const pos = SPRITE_MAP[iconKey]
    
    if (!pos) {
      console.warn(`Icon "${iconKey}" not found in sprite map`)
      return null
    }
    
    return pos // Return the actual pixel positions
  }, [name])
  
  if (!position) {
    return null
  }
  
  if (responsive) {
    // For responsive icons, calculate positions as percentages
    const xPercent = (position.x / (SPRITE_COLUMNS * ICON_SIZE - ICON_SIZE)) * 100
    const yPercent = (position.y / (SPRITE_ROWS * ICON_SIZE - ICON_SIZE)) * 100
    const spriteWidthPercent = SPRITE_COLUMNS * 100
    const spriteHeightPercent = SPRITE_ROWS * 100
    
    const cssStyle = {
      backgroundImage: `url(${spriteUrl})`,
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      backgroundSize: `${spriteWidthPercent}% ${spriteHeightPercent}%`,
      // Retina-optimized image rendering
      imageRendering: 'auto',
      WebkitImageRendering: 'auto',
      MozImageRendering: 'auto',
      msInterpolationMode: 'bicubic',
      WebkitFontSmoothing: 'subpixel-antialiased',
      ...style,
    }
    
    return (
      <div
        className={`bg-no-repeat ${className}`}
        style={cssStyle}
      />
    )
  }
  
  // Calculate scaling factor for fixed-size icons
  const scaleFactor = size / ICON_SIZE
  const spriteWidth = SPRITE_COLUMNS * ICON_SIZE * scaleFactor
  const spriteHeight = SPRITE_ROWS * ICON_SIZE * scaleFactor
  const bgX = -position.x * scaleFactor
  const bgY = -position.y * scaleFactor
  
  const spriteStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundImage: `url(${spriteUrl})`,
    backgroundPosition: `${bgX}px ${bgY}px`,
    backgroundSize: `${spriteWidth}px ${spriteHeight}px`,
    // Retina-optimized image rendering
    imageRendering: 'auto',
    WebkitImageRendering: 'auto',
    MozImageRendering: 'auto',
    msInterpolationMode: 'bicubic',
    WebkitFontSmoothing: 'subpixel-antialiased',
    ...style,
  }
  
  return (
    <div
      className={`bg-no-repeat ${className}`}
      style={spriteStyle}
    />
  )
}
