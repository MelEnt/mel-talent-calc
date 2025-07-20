import { type ClassName } from '../core/types'
import { useAsset } from '../hooks/useAsset'
import { Icon } from './Icon'

type TClassPickerGridIcons = {
  className: ClassName
  setSelectedClass: (className: ClassName) => void
  isSelected: boolean
  boxShadow?: string
  setHoveredClass: (
    className: ClassName | null
  ) => void
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
  } = props
  const GoldRing = useAsset('gold-ring.webp')

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
      className='relative w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] flex items-center justify-center group'
    >
      {/* 🟡 Ring Frame */}
      {GoldRing && (
        <img
          src={GoldRing}
          alt='Ring'
          className={`absolute z-10 top-0 left-0 w-full h-full pointer-events-none ${
            isSelected ? '' : 'grayscale'
          }`}
        />
      )}
      {/* 🌟 Class Icon with glow */}
      <Icon
        name={`classicon_${className}.webp`}
        size={67}
        className='z-0 rounded-full transition-shadow duration-200
        scale-[0.72] origin-center sm:scale-100'
        style={{ boxShadow }}
      />
    </button>
  )
}
