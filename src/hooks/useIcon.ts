import { useMemo } from 'react'

// Hook that returns a React element instead of a URL
// This makes migration easier by providing the same interface as useAsset
export const useIcon = (iconName: string) => {
  return useMemo(() => {
    // Return the icon name for the Icon component to use
    // This maintains compatibility with existing code that expects a "URL"
    return iconName
  }, [iconName])
}
