import { TalentTree } from './TalentTree'
import { GlobalPointsSummary } from './GlobalPointsSummary'
import { useTalentTrees } from '../core/useTalentTrees'
import { TalentTreeScroller } from './TalentTreeScroller'

import ResetSprite from '../assets/ui/reset-all-button-sprite-small.png'

export const TalentGrid = () => {
  const {
    trees,
    modify,
    resetTree,
    resetAll,
    totalTalentPoints,
    totalPointsSpent,
    pointsRemaining,
  } = useTalentTrees()

  return (
    <div className='space-y-4 sm:max-w-screen-xl sm:mx-auto w-full'>
      <GlobalPointsSummary
        totalTalentPoints={totalTalentPoints}
        totalPointsSpent={totalPointsSpent}
        pointsRemaining={pointsRemaining}
      />

      <div className='flex justify-end'>
        {/* 🆕 Image-based Reset Button */}
        <button
          onClick={resetAll}
          aria-label='Reset All'
          className='
            w-[150px] h-[49px]
            bg-no-repeat bg-[length:150px_99px]'
          style={{
            backgroundImage: `url(${ResetSprite})`,
            backgroundPosition: '0px 0px',
          }}
          onPointerDown={e => {
            e.currentTarget.style.backgroundPosition =
              '0.3px -48.75px'
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

      <TalentTreeScroller
        trees={trees.map((tree, i) => (
          <TalentTree
            key={tree.name}
            name={tree.name}
            backgroundImage={tree.backgroundImage}
            specIcon={tree.specIcon}
            talents={tree.talents}
            pointsRemaining={pointsRemaining}
            onClickTalent={(id, e) =>
              modify(i, id, e)
            }
            onResetTree={() => resetTree(i)}
          />
        ))}
      />
    </div>
  )
}
