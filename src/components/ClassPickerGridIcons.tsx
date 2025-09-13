import { type ClassName } from '../core/types'
import { useAsset } from '../hooks/useAsset'

type TClassPickerGridIcons = {
  className: ClassName
  setSelectedClass: (className: ClassName) => void
  isSelected: boolean
  boxShadow?: string
  setHoveredClass: (
    className: ClassName | null
  ) => void
  GoldRing: string
}

export const ClassPickerGridIcons = (
  props: TClassPickerGridIcons
) => {
  const {
    className,
    boxShadow,
    isSelected,
    setSelectedClass,
    setHoveredClass,
    GoldRing,
  } = props

  const classIcon = useAsset(
    `classicon_${className}.webp`
  )

  const isTouchDevice =
    typeof window !== 'undefined' &&
    'ontouchstart' in window

  return (
    <button
      onClick={() => setSelectedClass(className)}
      onMouseEnter={() => {
        if (!isTouchDevice)
          setHoveredClass(className)
      }}
      onMouseLeave={() => {
        if (!isTouchDevice) setHoveredClass(null)
      }}
      className='relative w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] flex items-center justify-center group cursor-pointer hover:translate-y-[-2px] transition-transform duration-200'
    >
      {/* 🟡 Ring Frame */}
      {GoldRing && (
        <img
          src={GoldRing}
          alt='Ring'
          className={`absolute z-10 top-0 left-0 w-full h-full pointer-events-none drop-shadow-2xl ${
            isSelected ? '' : 'grayscale'
          }`}
        />
      )}

      {/* 🌟 Class Icon with floating shadow */}
      {classIcon && (
        <img
          src={classIcon}
          alt={className}
          style={{ boxShadow }}
          className='z-0 object-cover rounded-full p-1.5 transition-all duration-200 drop-shadow-md hover:drop-shadow-2xl'
        />
      )}
    </button>
  )
}
