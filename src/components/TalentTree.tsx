import { type MouseEvent } from 'react'
import RockBackground from '../assets/ui/background-rock.webp?w=400&h=100&imagetools'
import ResetSprite from '../assets/ui/reset-button-sprite.webp?w=65&h=121&imagetools'
import {
  canIncrementTalent,
  canSafelyDecrementTalent,
  getArrowProps,
  isTalentLocked,
} from '../core/talentUtils'
import type { Talent } from '../core/types'
import { useAsset } from '../hooks/useAsset'
import { useViewport } from '../hooks/useViewport'
import { MetalBorders } from './MetalBorders'
import { TalentNode } from './TalentNode'

export type TTalentTreeProps = {
  name: string
  backgroundImage: string
  specIcon: string
  talents: Talent[]
  onClickTalent: (
    id: string,
    e: MouseEvent
  ) => void
  onResetTree: () => void
  pointsRemaining: number
}

export const TalentTree = ({
  name,
  backgroundImage,
  talents,
  onClickTalent,
  onResetTree,
  pointsRemaining,
  specIcon,
}: TTalentTreeProps) => {
  const {
    isDesktop,
    windowWidth,
    containerWidth,
  } = useViewport()
  // Use backgroundImage directly since it's now an imported AVIF asset
  const treeBackground = backgroundImage
  const treeIcon = useAsset(specIcon)

  const pointsSpent = talents.reduce(
    (s, t) => s + t.points,
    0
  )

  return (
    <MetalBorders>
      <div
        className='w-full p-6 rounded snap-start touch-manipulation relative'
        style={{
          backgroundImage: `url(${treeBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: '45% 75px',
        }}
        onContextMenu={e => e.preventDefault()}
      >
        <header
          className='
            -mt-6 -mx-6 mb-4 px-6 py-3 flex flex-col items-center
            relative rounded-lg border border-white/10
            shadow-[inset_0_0_0px_rgba(0,0,0,0.5),0_6px_5px_rgba(0,0,0,0.35),0_-2px_6px_rgba(255,255,255,0.1)]
            bg-cover bg-center bg-no-repeat
            text-shadow gap-1
          '
          style={{
            backgroundImage: `url(${RockBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            borderBottom: '5px double #00000065',
          }}
        >
          <div className='w-full flex items-center justify-between'>
            <div
              className='rounded-full overflow-hidden relative'
              style={{
                width: '64px',
                height: '64px',
                borderColor: '#43434385',
                borderStyle: 'outset',
                borderWidth: '3px',
              }}
            >
              {treeIcon && (
                <img
                  src={treeIcon}
                  alt='Spec Icon'
                  className='absolute rounded-full w-[64px] h-[58px]  scale-[1.06]'
                />
              )}
            </div>

            <h1 className='text-2xl text-center flex-grow text-gold-text'>
              {name}
            </h1>

            <button
              onClick={onResetTree}
              aria-label='Reset Tree'
              className='z-1 w-[39px] h-[38px] bg-no-repeat bg-[length:39px_76px] self-start cursor-pointer'
              style={{
                backgroundImage: `url(${ResetSprite})`,
                backgroundPosition: '0px 0px',
              }}
              onPointerDown={e => {
                e.currentTarget.style.backgroundPosition =
                  '0px -38px'
              }}
              onPointerUp={e => {
                e.currentTarget.style.backgroundPosition =
                  '0px 0px'
              }}
              onPointerLeave={e => {
                e.currentTarget.style.backgroundPosition =
                  '0px 0px'
              }}
            />
          </div>

          <div
            className='w-full flex justify-center mt-1 pt-1 sm:pt-0'
            style={{
              backgroundColor:
                'rgba(3, 2, 2, 0.34)',
              borderRadius: '5px',
              boxShadow:
                'inset 0 0 8px rgba(0, 0, 0, 0.36)',
              borderWidth: '1px',
              borderStyle: 'inset',
              borderColor: 'black',
            }}
          >
            <h2 className='text-center px-3 py-[1px] sm:py-[2px] text-sm w-full rounded shadow-inner text-gold-text lg:text-xs [@media(min-width:1160px)]:text-base'>
              Points spent in {name} Talents:{' '}
              <span className='text-white text-base lg:text-sm'>
                {pointsSpent}
              </span>
            </h2>
          </div>
        </header>

        <div className='flex justify-center items-center mt-1'>
          <div className='grid grid-cols-4 grid-rows-7 gap-8 relative lg:pl-4 lg:pr-4 place-items-center w-full max-w-[400px] min-w-[300px] min-h-[760px] max-h-[760px]'>
            {talents.map(t => {
              const pointsSpentInTree =
                talents.reduce(
                  (s, talent) =>
                    s + talent.points,
                  0
                )
              const locked = isTalentLocked(
                t,
                talents,
                pointsSpentInTree
              )

              const canIncrement =
                canIncrementTalent(
                  t,
                  pointsRemaining,
                  locked
                )
              const canDecrement =
                canSafelyDecrementTalent(
                  t,
                  talents
                )

              const isNodeOpaque =
                t.points > 0 ||
                pointsRemaining > 0

              const {
                class: arrowClass,
                style: arrowStyle,
                arrows,
              } = getArrowProps(
                talents,
                t,
                locked,
                pointsRemaining,
                isDesktop,
                windowWidth,
                containerWidth
              )

              const requiredTalent = t.requires
                ? talents.find(
                    talent =>
                      talent.id === t.requires!.id
                  )
                : undefined

              return (
                <div
                  key={t.id}
                  className={`relative ${arrowClass} ${locked ? 'disabled' : ''} ${isNodeOpaque ? '' : 'opacity-60'}`}
                  style={{
                    gridColumnStart: t.col + 1,
                    gridRowStart: t.row + 1,
                    ...arrowStyle,
                  }}
                >
                  {/* Render separate arrow elements for corner connections */}
                  {arrows?.map((arrow, index) => (
                    <div
                      key={index}
                      className={`arrow-element ${arrow.type}-arrow ${arrow.glow ? 'glow' : ''} `}
                      style={
                        arrow.style as React.CSSProperties
                      }
                    />
                  ))}
                  <TalentNode
                    availablePoints={
                      pointsRemaining
                    }
                    name={t.name}
                    icon={t.icon}
                    ranks={t.ranks}
                    points={t.points}
                    maxPoints={t.maxPoints}
                    abilityData={t.abilityData}
                    disabled={locked}
                    onClick={e =>
                      onClickTalent(
                        t.id,
                        e as MouseEvent
                      )
                    }
                    tierRequirement={t.row * 5}
                    requires={t.requires}
                    totalPointsInTree={
                      pointsSpentInTree
                    }
                    requiredTalentPoints={
                      requiredTalent?.points ?? 0
                    }
                    requiredTalentName={
                      requiredTalent?.name
                    }
                    talentTreeName={name}
                    canIncrement={canIncrement}
                    canDecrement={canDecrement}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </MetalBorders>
  )
}
