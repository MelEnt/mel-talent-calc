import {
  useState,
  useMemo,
  useEffect,
  useRef,
} from 'react'
import type {
  ClassName,
  Tree,
  TalentOrderItem,
  Talent,
} from './types'
import {
  canIncrementTalent,
  canSafelyDecrementTalent,
  isTalentLocked,
} from './talentUtils'
import { loadTalentData } from './data/talentLoader'
import {
  encodeTalentBuild,
  decodeTalentBuild,
  encodeTalentSlug,
  decodeTalentSlug,
} from '../utils/talentDataParser'

const additionalTalentPointsLevels = [
  14, 19, 24, 29, 34, 39, 44, 49, 54, 60,
]

type UseTalentTreesProps = {
  selectedClass: ClassName
  totalTalentPoints?: number
}

export const showCustomConfirm = (message: string): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      const overlay = document.getElementById('customConfirmOverlay') as HTMLDivElement | null;
      const confirmText = document.getElementById('confirmText') as HTMLParagraphElement | null;
      const confirmYes = document.getElementById('confirmYes') as HTMLButtonElement | null;
      const confirmNo = document.getElementById('confirmNo') as HTMLButtonElement | null;
      const confirmUrl = document.getElementById('confirmUrl') as HTMLSpanElement | null;

      if (!overlay || !confirmText || !confirmYes || !confirmNo || !confirmUrl) {
        resolve(false);
        return;
      }

      // Show message and current URL
      const url = window.location.href;
      confirmText.textContent = `${message}\n`;
      confirmUrl.textContent = url;
      overlay.style.display = 'flex';



      const cleanup = () => {
        overlay.style.display = 'none';
        confirmYes.removeEventListener('click', handleYes);
        confirmNo.removeEventListener('click', handleNo);
      };

      const handleYes = () => {
        overlay.style.display = 'none';
        cleanup();
        resolve(true);
      };

      const handleNo = () => {
        overlay.style.display = 'none';
        cleanup();
        resolve(false);
      };

      confirmYes.addEventListener('click', handleYes);
      confirmNo.addEventListener('click', handleNo);
    });
  }

export const useTalentTrees = ({
  selectedClass,
  totalTalentPoints = 61,
}: UseTalentTreesProps) => {
  const [trees, setTrees] = useState<Tree[]>([])
  const [talentSpendOrder, setTalentSpendOrder] =
    useState<TalentOrderItem[]>([])
  const [error, setError] = useState<
    string | null
  >(null)
  const baseTreesRef = useRef<Tree[]>([])

  // Load initial data and parse any encoded build
  useEffect(() => {
    const loadData = async () => {
      try {
        setError(null)
        const data = await loadTalentData(
          selectedClass
        )
        const pathSegs = window.location.pathname
          .split('/')
          .filter(Boolean)
        const [clsFromPath, buildEnc, orderEnc] =
          pathSegs

        baseTreesRef.current =
          structuredClone(data)

        let initialTrees: Tree[] =
          structuredClone(data)
        let initialOrder: TalentOrderItem[] = []

        if (
          clsFromPath === selectedClass &&
          buildEnc
        ) {
          initialTrees = decodeTalentBuild(
            buildEnc,
            structuredClone(data)
          )
        }
        if (
          clsFromPath === selectedClass &&
          orderEnc
        ) {
          initialOrder = decodeTalentSlug(
            orderEnc,
            initialTrees
          )
        }

        setTrees(initialTrees)
        setTalentSpendOrder(initialOrder)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : String(err)
        )
      }
    }
    loadData()
  }, [selectedClass])

  const updateUrl = (
    treesToUse = trees,
    orderToUse = talentSpendOrder
  ) => {
    const buildEnc = encodeTalentBuild(treesToUse)
    let url = `/${selectedClass}`
    if (buildEnc) {
      url += `/${buildEnc}`
      const orderEnc = encodeTalentSlug(
        orderToUse,
        treesToUse
      )
      if (orderEnc) url += `/${orderEnc}`
    }
    window.history.replaceState(null, '', url)
  }

  // Sync URL once class/trees/order settle—guarantees correct class
  useEffect(() => {
    // Don't update URL until trees are loaded
    if (trees.length > 0) {
      updateUrl()
    }
  }, [selectedClass, trees, talentSpendOrder])

  // Derived values
  const totalPointsSpent = useMemo(
    () =>
      trees.reduce(
        (sum, t) =>
          sum +
          t.talents.reduce(
            (s, x) => s + x.points,
            0
          ),
        0
      ),
    [trees]
  )
  const pointsByLevel = useMemo(() => {
    const list: number[] = []
    for (let lvl = 1; lvl <= 100; lvl++) {
      let pts = lvl >= 10 ? 1 : 0
      if (
        additionalTalentPointsLevels.includes(lvl)
      )
        pts += 1
      list[lvl] = pts
    }
    return list
  }, [])
  const cumulativePointsByLevel = useMemo(() => {
    const cum: number[] = []
    let tot = 0
    pointsByLevel.forEach((pts, lvl) => {
      tot += pts
      cum[lvl] = tot
    })
    return cum
  }, [pointsByLevel])

  const currentLevel = useMemo(() => {
    for (
      let lvl = 10;
      lvl < cumulativePointsByLevel.length;
      lvl++
    ) {
      if (
        cumulativePointsByLevel[lvl] >=
        totalPointsSpent
      )
        return lvl
    }
    return cumulativePointsByLevel.length - 1
  }, [totalPointsSpent, cumulativePointsByLevel])

  const pointsRemaining = useMemo(
    () =>
      Math.max(
        0,
        totalTalentPoints - totalPointsSpent
      ),
    [totalTalentPoints, totalPointsSpent]
  )
  const pointsSpentPerTree = useMemo(() => {
    return Object.fromEntries(
      trees.map(tree => [
        tree.name,
        tree.talents.reduce(
          (s, t) => s + t.points,
          0
        ),
      ])
    )
  }, [trees])

  const primaryTree = useMemo(() => {
    let max = 10,
      primary = { name: '', specIcon: '' }
    trees.forEach(tree => {
      const pts =
        pointsSpentPerTree[tree.name] ?? 0
      if (pts > max) {
        max = pts
        primary = {
          name: tree.name,
          specIcon: tree.specIcon,
        }
      }
    })
    return primary
  }, [trees, pointsSpentPerTree])

  // Internal helpers
  const deepClone = <T>(obj: T): T =>
    typeof structuredClone !== 'undefined'
      ? structuredClone(obj)
      : JSON.parse(JSON.stringify(obj))

  const findTalentByName = (
    arr: Tree[],
    name: string
  ):
    | { tree: Tree; talent: Talent }
    | undefined => {
    for (const tree of arr) {
      const tal = tree.talents.find(
        t => t.name === name
      )
      if (tal) return { tree, talent: tal }
    }
    return undefined
  }

  const rebuildFromOrder = (
    order: TalentOrderItem[]
  ): Tree[] => {
    const clone = deepClone(baseTreesRef.current)
    const rankCount: Record<string, number> = {}
    order.forEach(item => {
      const name = item.name
      rankCount[name] = (rankCount[name] || 0) + 1
      const rank = rankCount[name]
      const found = findTalentByName(clone, name)
      if (!found) return
      const { talent } = found
      talent.points = Math.min(
        rank,
        talent.maxPoints
      )
    })
    return clone
  }

  // API methods
  const resetAll = async (askReset: boolean = true) => {
    if (askReset) {
      const shouldReset = await showCustomConfirm(
        `Are you sure you want to reset ALL talent trees? This action cannot be undone.
        Last chance to save your build by copying the URL below or just cancel this!!!`
      )
      if (!shouldReset) return
    }

    try {
      const data = await loadTalentData(
        selectedClass
      )
      const fresh = deepClone(data)
      baseTreesRef.current = fresh
      setTalentSpendOrder([])
      setTrees(fresh)
      // ❌ no direct URL update here
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : String(err)
      )
    }
  }

  const resetTree = async (idx: number) => {
    const treeName = trees[idx]?.name
    if (!treeName) return
    const shouldReset = await showCustomConfirm(
      `Are you sure you want to reset the ${treeName} talent tree? This action cannot be undone.
      Last chance to save your build by copying the URL below or just cancel this!!!`
    )
    if (!shouldReset) return

    setTalentSpendOrder(prev => {
      const names = new Set(
        baseTreesRef.current[idx].talents.map(
          t => t.name
        )
      )
      const nextOrder = prev.filter(
        o => !names.has(o.name)
      )
      const newTrees = rebuildFromOrder(nextOrder)
      setTrees(newTrees)
      return nextOrder
    })
  }

  const modify = (
    treeIdx: number,
    talentId: string,
    e:
      | React.MouseEvent
      | { shiftKey: boolean; type: string }
  ) => {
    const isDecrement =
      e.shiftKey || e.type === 'contextmenu'
    const talent = trees[treeIdx].talents.find(
      t => t.id === talentId
    )
    if (!talent) return
    const name = talent.name

    setTalentSpendOrder(prev => {
      const next = [...prev]
      if (isDecrement) {
        if (
          !canSafelyDecrementTalent(
            talent,
            trees[treeIdx].talents
          )
        ) {
          return prev
        }
        const lastIndex = [...next]
          .reverse()
          .findIndex(o => o.name === name)
        if (lastIndex >= 0)
          next.splice(
            next.length - 1 - lastIndex,
            1
          )
      } else {
        if (
          !canIncrementTalent(
            talent,
            pointsRemaining,
            isTalentLocked(
              talent,
              trees[treeIdx].talents,
              totalPointsSpent
            )
          )
        ) {
          return prev
        }
        const newRank =
          next.filter(o => o.name === name)
            .length + 1
        next.push({
          name,
          rank: newRank,
          icon: talent.icon,
          description: talent.ranks[newRank - 1],
          abilityData: talent.abilityData,
        })
      }

      const newTrees = rebuildFromOrder(next)
      setTrees(newTrees)
      return next
    })
  }

  return {
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
    pointsByLevel,
  }
}
