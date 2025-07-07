import {
  useRef,
  useState,
  type MouseEvent,
} from 'react'
import FrameDefault from '../assets/icons/talent-frame-default.png'
import FrameDefaultOuter from '../assets/icons/talent-frame-default-outer.png'
import FrameGold from '../assets/icons/talent-frame-gold.png'
import FrameGreen from '../assets/icons/talent-frame-green.png'
import FrameActive from '../assets/icons/talent-frame-active.png'
import { Tooltip } from './Tooltip'
import { AbilityDataSection } from './AbilityDataSection'
import type { Talent } from '../core/types'
import { getRequirementsText } from '../core/talentUtils'

type TalentNodeProps = {
  disabled: boolean
  availablePoints: number
  totalPointsInTree: number
  requiredTalentPoints: number
  talentTreeName: string
  requiredTalentName?: string
  tierRequirement: number
  onClick: (
    e:
      | MouseEvent
      | { shiftKey: boolean; type: string }
  ) => void
} & Pick<
  Talent,
  | 'name'
  | 'points'
  | 'maxPoints'
  | 'ranks'
  | 'icon'
  | 'abilityData'
  | 'requires'
>

export const TalentNode = ({
  name,
  points,
  maxPoints,
  ranks,
  icon,
  disabled,
  availablePoints,
  onClick,
  abilityData,
  tierRequirement,
  requires,
  requiredTalentPoints,
  totalPointsInTree,
  requiredTalentName,
  talentTreeName
}: TalentNodeProps) => {
  const buttonRef =
    useRef<HTMLButtonElement | null>(null)
  const [isHovered, setHovered] = useState(false)
  const [isPressed, setPressed] = useState(false)
  const isMobile = window.innerWidth < 768

  const isMaxed = points === maxPoints
  const isActive = points > 0
  const hasSpendablePoints = availablePoints > 0
  const isAvailable =
    !disabled && (hasSpendablePoints || isActive)
  const shouldShowRank =
    points > 0 || availablePoints > 0

  const shouldGrayOut =
    (availablePoints === 0 && points === 0) ||
    (!isActive && !isMaxed && disabled)

  const outerFrame = isMaxed
    ? FrameGold
    : isAvailable
      ? FrameGreen
      : FrameDefaultOuter

  const innerFrame = isPressed
    ? FrameActive
    : FrameDefault

  const handleClick = (e: MouseEvent) => {
    if (disabled) return
    if (isMobile && !isHovered) {
      setHovered(true)
      return
    }
    onClick(e)
    requestAnimationFrame(() =>
      buttonRef.current?.blur()
    )
  }

  const handlePressStart = () => setPressed(true)
  const handlePressEnd = () => setPressed(false)

  const handleIncrement = () => {
    handleClick({
      shiftKey: false,
      type: 'click',
    } as MouseEvent)
  }

  const handleDecrement = () => {
    handleClick({
      shiftKey: true,
      type: 'contextmenu',
    } as MouseEvent)
  }

  const badgeClasses = isMaxed
    ? 'text-yellow-300'
    : isAvailable
      ? 'text-green-400'
      : 'text-gray-400'

  const desktopProps = isMobile
    ? {
        onTouchStart: handlePressStart,
        onTouchEnd: handlePressEnd,
        onTouchCancel: handlePressEnd,
      }
    : {
        onMouseDown: handlePressStart,
        onMouseUp: handlePressEnd,
        onMouseLeave: () => {
          setHovered(false)
          handlePressEnd()
        },
      }

  const badgeClipPath =
    'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'

  const requirementTexts = getRequirementsText({
    disabled,
    currentPoints: points,
    totalPointsInTree,
    tierRequirement,
    requires,
    requiredTalentPoints,
    requiredTalentName,
    talentTreeName,
  })

  return (
    <div className='relative overflow-visible'>
      <button
        ref={buttonRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...desktopProps}
        onClick={handleClick}
        onContextMenu={e => {
          e.preventDefault()
          if (!disabled) handleClick(e)
        }}
        aria-label={`${name}: ${points}/${maxPoints}`}
        className='relative w-[56px] h-[56px] min-w-[42px] min-h-[42px] transition focus:outline-none'
      >
        {/* 🔲 Black Canvas */}
        <span
          className='absolute z-0 pointer-events-none rounded-sm bg-gray-700'
          style={{
            width: '54px',
            height: '54px',
            left: '1px',
            top: '1px',
          }}
        />

        {/* 🖼️ Outer Frame */}
        <span
          className='absolute -inset-1 z-30 bg-center bg-no-repeat bg-contain pointer-events-none'
          style={{
            backgroundImage: `url(${outerFrame})`,
          }}
        />

        {/* 🎯 Icon */}
        <span
          className={`absolute z-10 bg-center bg-no-repeat bg-cover pointer-events-none ${
            isPressed
              ? 'brightness-90 shadow-inner'
              : ''
          }`}
          style={{
            width: '48px',
            height: '48px',
            left: isPressed ? '7px' : '4px',
            top: isPressed ? '7px' : '5px',
            backgroundImage: `url(src/assets/icons/${icon})`,
            filter: shouldGrayOut
              ? 'grayscale(100%)'
              : undefined,
          }}
        />

        {/* 🟡 Inner Frame (press highlight) */}
        <span
          className='absolute z-20 bg-center bg-no-repeat bg-contain pointer-events-none'
          style={{
            backgroundImage: `url(${innerFrame})`,
            width: '54px',
            height: '54px',
            left: '1px',
            top: '2px',
          }}
        />

        {/* Blue Glow */}
        {isHovered && (
          <span
            className='absolute z-15 pointer-events-none rounded-sm'
            style={{
              width: '48px',
              height: '48px',
              left: '4px',
              top: '5px',
              boxShadow:
                'rgb(92 134 232) 0px 0px 5px 4px inset, rgb(158 197 251) 0px 0px 10px 8px inset',
            }}
          />
        )}

        {/* 📍 Rank Badge */}
        {shouldShowRank && (
          <span
            className={`font-sans absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%]
              text-[12px] font-main leading-none px-1 py-[1px] z-30 pointer-events-none
              bg-gray-900 border border-yellow-400 ${badgeClasses}`}
            style={{
              clipPath: badgeClipPath,
              WebkitClipPath: badgeClipPath,
            }}
          >
            {points}/{maxPoints}
          </span>
        )}
      </button>

      <Tooltip
        referenceEl={buttonRef.current}
        open={isHovered}
        disabled={disabled}
        onIncrement={
          disabled ? undefined : handleIncrement
        }
        onDecrement={
          disabled ? undefined : handleDecrement
        }
      >
        <strong className='text-gold'>
          {name}
        </strong>

        {requirementTexts.length > 0 && (
          <div className='text-s text-ink/70'>
            {requirementTexts.map((text, idx) => (
              <div key={idx}>{text}</div>
            ))}
          </div>
        )}
        <AbilityDataSection
          abilityData={abilityData}
        />

        <div className='text-sm mt-1 text-ink/90'>
          {ranks[points]}
        </div>
      </Tooltip>
    </div>
  )
}
