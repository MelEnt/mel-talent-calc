import { useState } from 'react'
import GoldRing from '../assets/icons/gold-ring.webp?q=80&imagetools'
import {
  CLASS_COLORS,
  CLASS_NAMES,
} from '../core/constants'
import { type ClassName } from '../core/types'
import { useAsset } from '../hooks/useAsset'
import { ClassPickerGridIcons } from './ClassPickerGridIcons'

// 🌟 Shadow helpers
const CLASS_SHADOWS = {
  faint: (
    color: string,
    isTouchDevice: boolean
  ) =>
    `0 0 10px ${isTouchDevice ? '10px' : '5px'} ${color}`,
  strong: (color: string) =>
    `0 0 13px 9px ${color}`,
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
  const selectedClassIcon = useAsset(
    `classicon_${selectedClass}.webp`
  )
  const SpecIcon = useAsset(primaryTree.specIcon)

  const isTouchDevice =
    typeof window !== 'undefined' &&
    'ontouchstart' in window

  const pointsArray = Object.values(
    pointsSpentPerTree
  )

  return (
    <div className='flex flex-col w-full items-start gap-6 sm:gap-8 h-full'>
      {/* 📊 Selected Class Display */}
      <div className='flex items-center justify-start w-auto p-4 gap-7 z-1 h-auto min-h-[120px] pl-2 md:pl-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent rounded-l-full'>
        {/* 🎯 Selected Class Icon */}
        <div className='relative z-10 max-w-[42px] max-h-[42px] [@media(min-width:640px)]:max-w-[65px] [@media(min-width:640px)]:max-h-[65px] md:max-w-[105px] md:max-h-[105px] h-full'>
          {GoldRing && (
            <img
              src={GoldRing}
              alt='Gold Ring'
              className='absolute z-10 left-0 pointer-events-none object-contain w-full h-full top-0 scale-[1.33] opacity-75'
            />
          )}
          {selectedClassIcon && (
            <img
              src={selectedClassIcon}
              alt={selectedClass}
              className='relative z-1 object-cover rounded-full w-auto h-auto top-0 left-0
              [@media(min-width:768px)]:w-[65px] [@media(min-width:768px)]:h-[65px]'
            />
          )}
        </div>

        {primaryTree.name && (
          <div className='absolute z-15 w-[30px] h-[30px] translate-x-[40px] translate-y-[30px] sm:w-[45px] sm:h-[45px] sm:translate-x-[72.5px] sm:translate-y-[48px]'>
            {GoldRing && (
              <img
                src={GoldRing}
                alt='Gold Ring'
                className='absolute z-10 left-0 pointer-events-none object-contain w-full h-full top-0 scale-[1.33] opacity-75'
              />
            )}
            {SpecIcon && (
              <img
                src={SpecIcon}
                alt={selectedClass}
                className='relative z-1 object-cover rounded-full w-auto h-auto top-0 left-0'
              />
            )}
          </div>
        )}

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
            className='sm:text-4xl text-6xl capitalize'
            style={{
              color: CLASS_COLORS[selectedClass],
            }}
          >
            <span className='hidden sm:contents'>
              {primaryTree.name}{' '}
            </span>
            {selectedClass}
          </h2>
          <p className='relative text-2xl md:text-3xl md:text-shadow-none font-serif'>
            {pointsArray.join(' / ')}
          </p>
        </div>
      </div>
      {/* 🧱 Icon Grid */}
      <div className='flex flex-wrap gap-2 justify-center sm:justify-start w-full'>
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
              GoldRing={GoldRing}
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
    </div>
  )
}
