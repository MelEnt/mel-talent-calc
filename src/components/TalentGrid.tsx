import ClipboardJS from 'clipboard'
import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from 'react'
import ShareSprite from '../assets/ui/share-btn-sprite-small2.webp?w=616&h=592&q=80&imagetools'
import { CLASS_NAMES } from '../core/constants'
import type { ClassName } from '../core/types'
import { useTalentTrees } from '../core/useTalentTrees'
import { showCopyToast } from '../lib/showCopyToast'
import { showNewVersionToast } from '../lib/showNewVersionToast'
import ClassCrest from './ClassCrest'
import { ParchmentBorders } from './ParchmentBorders'
import { TalentOrderSummary } from './TalentOrderSummary'
import type { TalentTreeScrollerRef } from './TalentTreeScroller'
import { showCustomConfirm } from '../core/useTalentTrees'
import YesSpirit from '../assets/ui/red-button-yes.webp'
import NoSpirit from '../assets/ui/red-button-no.webp'
// Critical components for LCP - keep these eager
const TalentTree = lazy(() =>
  import('./TalentTree').then(m => ({
    default: m.TalentTree,
  }))
)
const GlobalPointsSummary = lazy(() =>
  import('./GlobalPointsSummary').then(m => ({
    default: m.GlobalPointsSummary,
  }))
)
const ClassPicker = lazy(() =>
  import('./ClassPicker').then(m => ({
    default: m.ClassPicker,
  }))
)
// Lazy load the talent tree scroller since it's below the fold
const TalentTreeScroller = lazy(() =>
  import('./TalentTreeScroller').then(m => ({
    default: m.TalentTreeScroller,
  }))
)

const SELECTED_CLASS_KEY =
  'mel-talent-calc-selected-class'

const getInitialSelectedClass = (): ClassName => {
  const pathSegments = window.location.pathname
    .split('/')
    .filter(Boolean)
  const classFromPath = pathSegments[0]

  if (
    classFromPath &&
    CLASS_NAMES.includes(
      classFromPath as ClassName
    )
  ) {
    return classFromPath as ClassName
  }

  // fallback to query param
  const params = new URLSearchParams(
    window.location.search
  )
  const classFromURL = params.get('class')

  if (
    classFromURL &&
    CLASS_NAMES.includes(
      classFromURL as ClassName
    )
  ) {
    return classFromURL as ClassName
  }

  // fallback to localStorage
  try {
    const saved = localStorage.getItem(
      SELECTED_CLASS_KEY
    )
    if (
      saved &&
      CLASS_NAMES.includes(saved as ClassName)
    ) {
      return saved as ClassName
    }
  } catch {
    // Ignore storage errors
  }

  return CLASS_NAMES[0]
}

export const TalentGrid = () => {
  const [selectedClass, setSelectedClass] =
    useState<ClassName>(getInitialSelectedClass)
  const scrollerRef =
    useRef<TalentTreeScrollerRef>(null)
  const hasShownToastRef = useRef(false)

  // Save selected class to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(
        SELECTED_CLASS_KEY,
        selectedClass
      )
    } catch {
      // Silently fail if localStorage is not available
    }
  }, [selectedClass])

  // Check for data query parameter and show new version toast
  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    )
    const dataParam = params.get('data')

    if (dataParam && !hasShownToastRef.current) {
      showNewVersionToast()
      hasShownToastRef.current = true
    }
  }, [])

  // Reset scroll to first tree when class changes
  useEffect(() => {
    if (scrollerRef.current) {
      // Add small delay to ensure new trees are rendered before scrolling
      setTimeout(() => {
        if (scrollerRef.current) {
          scrollerRef.current.scrollToFirst()
        }
      }, 10)
    }
  }, [selectedClass])

  const shareBtnRef =
    useRef<HTMLButtonElement>(null)
  const urlBtnRef =
    useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const buttons = [shareBtnRef.current, urlBtnRef.current].filter(Boolean);
    if (buttons.length === 0) return;

    const instances: ClipboardJS[] = buttons.map(
      btn =>
        new ClipboardJS(btn as Element, {
          text: () => window.location.href,
        })
    );

    instances.forEach(instance => {
      instance.on('success', () => {
        showCopyToast();
      });

      instance.on('error', e => {
        console.error('Clipboard copy failed', e);
        showCopyToast();
      });
    });

    return () => {
      instances.forEach(instance => instance.destroy());
    };
  }, []);


  const {
    trees,
    error,
    modify,
    resetTree,
    resetAll,
    totalTalentPoints,
    totalPointsSpent,
    pointsRemaining,
    currentLevel,
    pointsSpentPerTree,
    primaryTree,
    talentSpendOrder,
    cumulativePointsByLevel,
  } = useTalentTrees({
    selectedClass,
  })

  const pointsSpentPerTreeOrdered = trees.map(
    tree => pointsSpentPerTree[tree.name] || 0
  )

  const handleClassChange = async (cls: ClassName) => {
    if (totalPointsSpent > 0) {
      const shouldReset = await showCustomConfirm(
        `Are you sure you want to change classes? You will loss your current build!
        Last chance to save your build by copying the URL below or just cancel this!!!`
      )
      if (!shouldReset) return
      
    }
    resetAll(false)
    setSelectedClass(cls)
  }

  // Show error state if there's an error
  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='max-w-[85rem] w-full m-auto overflow-hidden'>
          <div className='w-full flex items-center justify-center bg-red-900 bg-opacity-30 rounded-lg py-16'>
            <div className='text-center p-8'>
              <p className='text-red-400 text-lg mb-4'>
                Failed to load talent data
              </p>
              <p className='text-red-300 text-sm mb-4'>
                {error}
              </p>
              <button
                onClick={() =>
                  window.location.reload()
                }
                className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors'
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Show full app when everything is ready
  return (
    <div>
      <div id="customConfirmOverlay" className="confirm-overlay">
        <div id="customConfirmDialog" className="confirm-dialog">
          <p id="confirmMessage">
            <span id="confirmText"></span>
            <span
              ref={urlBtnRef}
              id="confirmUrl"
              style={{
                color: 'blue',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            ></span>
          </p>
          <div className="confirm-buttons">
            <button
              id="confirmYes"
              aria-label='Confirm Yes'
              className='relative sm:top-1 w-[75px] h-[40px] bg-[length:80px_100px] bg-no-repeat sm:w-[75px] sm:h-[40px] sm:bg-[length:80px_100px] cursor-pointer'
              style={{
                backgroundImage: `url(${YesSpirit})`,
                backgroundPosition: '0px 0px',
                backgroundColor: 'transparent',
              }}
              onPointerDown={e => {
                const isDesktop = window.innerWidth >= 640
                e.currentTarget.style.backgroundPosition =
                  isDesktop ? '0px -50px' : '0px -50px'
              }}
              onPointerUp={e => {
                e.currentTarget.style.backgroundPosition = '0px 0px'
              }}
              onPointerLeave={e => {
                e.currentTarget.style.backgroundPosition =
                  '0px 0px'
              }}
            >
            </button>
            <button
              id="confirmNo"
              aria-label='Confirm No'
              className='relative sm:top-1 w-[75px] h-[40px] bg-[length:80px_100px] bg-no-repeat sm:w-[75px] sm:h-[40px] sm:bg-[length:80px_100px] cursor-pointer'
              style={{
                backgroundImage: `url(${NoSpirit})`,
                backgroundPosition: '0px 0px',
                backgroundColor: 'transparent',
              }}
              onPointerDown={e => {
                const isDesktop = window.innerWidth >= 640
                e.currentTarget.style.backgroundPosition =
                  isDesktop ? '0px -50px' : '0px -50px'
              }}
              onPointerUp={e => {
                e.currentTarget.style.backgroundPosition = '0px 0px'
              }}
              onPointerLeave={e => {
                e.currentTarget.style.backgroundPosition =
                  '0px 0px'
              }}
            >
            </button>
          </div>
        </div>
      </div>
      <div className='max-w-[85rem] w-full m-auto overflow-x-hidden'>
        <div className='flex flex-col w-full gap-4'>
          <ParchmentBorders>
            {/* Class Crest */}
            {selectedClass && (
              <ClassCrest
                selectedClass={selectedClass}
              />
            )}
            <div className='flex flex-col w-full gap-6'>
              {/* 🎭 Class Picker in first row */}
              <ClassPicker
                primaryTree={primaryTree}
                pointsSpentPerTree={
                  pointsSpentPerTreeOrdered
                }
                selectedClass={selectedClass}
                setSelectedClass={
                  handleClassChange
                }
              />
            </div>
          </ParchmentBorders>
        </div>

        <GlobalPointsSummary
          totalTalentPoints={totalTalentPoints}
          totalPointsSpent={totalPointsSpent}
          pointsRemaining={pointsRemaining}
          currentLevel={currentLevel}
          onResetAll={resetAll}
        />

        <Suspense fallback={null}>
          <TalentTreeScroller
            ref={scrollerRef}
            trees={trees.map((tree, i) => (
              <TalentTree
                key={tree.name}
                name={tree.name}
                backgroundImage={
                  tree.backgroundImage
                }
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
        </Suspense>
        <div className='flex justify-center text-white mx-auto'>
          {/* Share Button */}
          <button
            ref={shareBtnRef}
            aria-label='Share'
            className='relative sm:top-1 w-[308px] h-[95px] bg-no-repeat cursor-pointer'
            style={{
              backgroundImage: `url(${ShareSprite})`,
              backgroundSize: '308px 296px',
            }}
            onMouseOver={e => {
              const isDesktop =
                window.innerWidth >= 640
              if (isDesktop)
                e.currentTarget.style.backgroundPosition =
                  '0px -197px'
            }}
            onPointerDown={e => {
              const isDesktop =
                window.innerWidth >= 640
              e.currentTarget.style.backgroundPosition =
                isDesktop
                  ? '-1px -99.5px'
                  : '-1px -100px'
            }}
            onPointerUp={e => {
              e.currentTarget.style.backgroundPosition =
                '0px -197px'
            }}
            onPointerLeave={e => {
              e.currentTarget.style.backgroundPosition =
                '0px 0px'
            }}
          />
        </div>
        <TalentOrderSummary
          cumulativePointsByLevel={
            cumulativePointsByLevel
          }
          talentSpendOrder={talentSpendOrder}
        />
      </div>
    </div>
  )
}
