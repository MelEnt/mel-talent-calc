import { useState } from 'react'
import { type ClassName } from '../core/types'
import {
  CLASS_NAMES,
  CLASS_COLORS,
} from '../core/constants'
import { useAsset } from '../hooks/useAsset'
import { Icon } from './Icon'
import { ClassPickerGridIcons } from './ClassPickerGridIcons'

// 🌟 Shadow helpers
const CLASS_SHADOWS = {
  faint: (
    color: string,
    isTouchDevice: boolean
  ) =>
    `0 0 10px ${isTouchDevice ? '10px' : '15px'} ${color}`,
  strong: (color: string) =>
    `0 0 13px 16px ${color}`,
}

type ClassPickerProps = {
  selectedClass: ClassName
  setSelectedClass: (className: ClassName) => void
  pointsSpentPerTree: number[]
  primaryTree: { name: string; specIcon: string }
}

export const ClassPicker = ({
  primaryTree,
  pointsSpentPerTree,
  selectedClass,
  setSelectedClass,
}: ClassPickerProps) => {
  const [hoveredClass, setHoveredClass] =
    useState<ClassName | null>(null)
  const GoldRing = useAsset('gold-ring.webp')

  const isTouchDevice =
    typeof window !== 'undefined' &&
    'ontouchstart' in window

  const pointsArray = Object.values(
    pointsSpentPerTree
  )

  return (
    <div className='flex flex-col w-full items-start gap-6 sm:gap-8 h-full'>
      {/* 🧱 Icon Grid */}
      <div className='flex flex-wrap gap-2 sm:justify-start justify-center w-full'>
        {CLASS_NAMES.map(className => {
          const isHovered =
            hoveredClass === className
          const isSelected =
            selectedClass === className
          const classColor =
            CLASS_COLORS[className]
          const boxShadow =
            isHovered && !isTouchDevice
              ? CLASS_SHADOWS.strong(classColor)
              : isSelected
                ? CLASS_SHADOWS.faint(
                    classColor,
                    isTouchDevice
                  )
                : undefined

          return (
            <ClassPickerGridIcons
              className={className}
              boxShadow={boxShadow}
              isSelected={isSelected}
              setHoveredClass={setHoveredClass}
              setSelectedClass={setSelectedClass}
              key={className}
            />
          )
        })}
      </div>

      {/* 📊 Selected Class Display */}
      <div className='flex items-center justify-start w-full gap-7 z-1 h-full min-h-[120px] pl-2 md: pl-0'>
        {/* 🎯 Selected Class Icon */}
        <div className='relative z-10 max-w-[62px] max-h-[62px] [@media(min-width:640px)]:max-w-[105px] [@media(min-width:640px)]:max-h-[105px] md:max-w-[140px] md:max-h-[140px] h-full'>
          {GoldRing && (
            <img
              src={GoldRing}
              alt='Gold Ring'
              className='absolute z-10 left-0 pointer-events-none object-contain w-full h-full top-0 scale-[1.3]
              [@media(max-width:420px)]:top-[-12px] [@media(max-width:420px)]:h-[84px]
              [@media(min-width:420px)]:top-0 [@media(min-width:420px)]:h-full
              [@media(min-width:768px)]:h-[140px] [@media(min-width:768px)]:top-[-17px]'
            />
          )}
          <Icon
            name={`classicon_${selectedClass}.webp`}
            size={105}
            className='relative z-1 rounded-full top-0 left-0
            scale-[0.59] origin-top-left [@media(min-width:640px)]:scale-100'
          />
        </div>
        {primaryTree.name && <div className='absolute z-15 w-[30px] h-[30px] translate-x-[40px] translate-y-[30px] sm:w-[45px] sm:h-[45px] sm:translate-x-[72.5px] sm:translate-y-[48px]'>
          {GoldRing && (
            <img
              src={GoldRing}
              alt='Gold Ring'
              className='absolute z-10 left-0 pointer-events-none object-contain w-full h-full top-0 scale-[1.3] opacity-75'
            />
          )}
          <Icon
            name={primaryTree.specIcon}
            size={45}
            className='relative z-1 rounded-full top-0 left-0
            scale-[0.67] origin-top-left [@media(min-width:640px)]:scale-100'
          />
        </div>}

        {/* 📈 Info Column */}
        <div className='flex flex-col text-[#4a2c0d] justify-between flex-1'>
          <p
            className='relative sm:hidden text-3xl capitalize -mb-1'
            style={{
              color: CLASS_COLORS[selectedClass],
            }}
          >
            {primaryTree.name}
          </p>
          <h2
            className='sm:text-6xl text-5xl capitalize'
            style={{
              color: CLASS_COLORS[selectedClass],
            }}
          >
            <span className='hidden sm:contents'>
              {primaryTree.name}{' '}
            </span>
            {selectedClass}
          </h2>
          <p
            className='relative text-4xl md:text-shadow-none'
          >
            {pointsArray.join(' / ')}
          </p>
        </div>
      </div>
    </div>
  )
}
