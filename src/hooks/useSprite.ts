import { useMemo } from 'react'
import { SPRITE_MAP } from '../utils/spriteMap'

export const useSpriteIcon = (iconName: string) => {
  return useMemo(() => {
    // Remove .webp extension and path if present
    const cleanName = iconName
      .replace('.webp', '')
      .replace(/^.*\//, '') // Remove any path prefix
    
    const position = SPRITE_MAP[cleanName]
    
    if (!position) {
      console.warn(`Sprite icon "${cleanName}" not found`)
      return null
    }
    
    return {
      name: cleanName,
      position,
      spriteUrl: '/src/assets/icons/spritesheet.webp'
    }
  }, [iconName])
}
