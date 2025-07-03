import {
  useRef,
  useState,
  type MouseEvent,
} from 'react'
import FrameDefault from '../assets/icons/talent-frame-default.png'
import FrameGold from '../assets/icons/talent-frame-gold3.png'
import FrameGreen from '../assets/icons/talent-frame-green.png'
import FrameActive from '../assets/icons/talent-frame-active.png'
import { Tooltip } from './Tooltip'

type TalentNodeProps = {
  name: string
  points: number
  maxPoints: number
  ranks: string[]
  icon: string
  disabled: boolean
  availablePoints: number
  onClick: (
    e:
      | MouseEvent
      | { shiftKey: boolean; type: string }
  ) => void
}

export const TalentNode = ({
  name,
  points,
  maxPoints,
  ranks,
  icon,
  disabled,
  availablePoints,
  onClick,
}: TalentNodeProps) => {
  const buttonRef =
    useRef<HTMLButtonElement | null>(null)
  const [isHovered, setHovered] = useState(false)
  const [isPressed, setPressed] = useState(false)
  const isMobile = window.innerWidth < 768

  const isMaxed = points === maxPoints
  const isAvailable =
    !disabled && availablePoints > 0
  const shouldShowRank =
    points > 0 || availablePoints > 0

  const frame = isMaxed
    ? FrameGold
    : isAvailable
      ? FrameGreen
      : FrameDefault

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
    onClick({ shiftKey: false, type: 'click' })
  }

  const handleDecrement = () => {
    onClick({
      shiftKey: true,
      type: 'contextmenu',
    })
  }

  const badgeClasses = isMaxed
    ? 'bg-yellow-300 text-yellow-900 border border-yellow-600'
    : isAvailable
      ? 'bg-green-400 text-green-900 border border-green-600'
      : 'bg-gray-700 text-gray-400 border border-gray-500'

  const desktopProps = isMobile
    ? {}
    : {
        onMouseDown: handlePressStart,
        onMouseUp: handlePressEnd,
        onMouseLeave: handlePressEnd,
      }


  return (
    <div
      className='relative overflow-visible'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        ref={buttonRef}
        {...desktopProps}
        onClick={handleClick}
        onContextMenu={e => {
          e.preventDefault()
          if (!disabled) handleClick(e)
        }}
        aria-label={`${name}: ${points}/${maxPoints}`}
        className='relative w-[64px] h-[64px] min-w-[48px] min-h-[48px] transition focus:outline-none'
      >
        {/* 🔲 Black Canvas */}
        <span
          className='absolute z-0 pointer-events-none rounded-sm bg-gray-700'
          style={{
            width: '62px',
            height: '62px',
            left: '1px',
            top: '1px',
          }}
        />

        {/* 🖼️ Outer Frame */}
        <span
          className='absolute -inset-1 z-30 bg-center bg-no-repeat bg-contain pointer-events-none'
          style={{
            backgroundImage: `url(${frame})`,
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
            width: '52px',
            height: '52px',
            left: isPressed ? '8px' : '6px',
            top: isPressed ? '8px' : '6px',
            backgroundImage: `url(src/assets/icons/${icon})`,
          }}
        />

        {/* 🟡 Inner Frame (press highlight) */}
        <span
          className='absolute z-20 bg-center bg-no-repeat bg-contain pointer-events-none'
          style={{
            backgroundImage: `url(${innerFrame})`,
            width: '63px',
            height: '63px',
            left: '0.5px',
            top: '1px',
          }}
        />

        {/* Blue Glow */}
        {isHovered && (
          <span
            className='absolute z-15 pointer-events-none rounded-sm'
            style={{
              width: '54px',
              height: '54px',
              left: '5px',
              top: '6px',
              boxShadow:
                'rgb(92 134 232) 0px 0px 5px 4px inset, rgb(158 197 251) 0px 0px 10px 8px inset',
            }}
          />
        )}

        {/* 📍 Rank Badge */}
        {shouldShowRank && (
          <span
            className={`absolute bottom-0 right-0 translate-x-[35%] translate-y-[35%]
              text-[10px] font-bold leading-none px-1 py-[1px] rounded-sm border z-30 pointer-events-none
              ${badgeClasses}`}
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
        <div className='text-sm mt-1 text-ink/90'>
          {ranks[points]}
        </div>
        <div className='text-xs mt-2 italic text-ink/70'>
          Tier requirement:{' '}
          <span className='font-bold'>
            {disabled ? 'Not met' : 'Met'}
          </span>
        </div>
      </Tooltip>
    </div>
  )
}
