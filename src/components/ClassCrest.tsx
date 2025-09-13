import type { ClassName } from '../core/types'
import { useClassCrest } from '../hooks/useClassCrest'

interface ClassCrestProps {
  selectedClass: ClassName
}

const ClassCrest = ({
  selectedClass,
}: ClassCrestProps) => {
  const { large, small } = useClassCrest(
    selectedClass
  )

  return (
    <picture
      className='
      absolute z-0 pointer-events-none
      w-[265px] h-[365px]
      right-[-15%] top-[8%]
      opacity-40
      mr-15
      sm:opacity-50
      sm:right-[-10%]
      sm:top-[15%]

      md:right-0
      md:top-0

      lg:top-[-30px]

      max-[403px]:w-[180px]
      max-[403px]:h-[230px]
      max-[403px]:top-[120px]
      max-[403px]:right-[-10%]
      max-[403px]:scale-100
      max-[403px]:opacity-[0.33]

      after:absolute
      after:inset-0
      after:bg-gradient-to-b
      after:from-transparent
      after:to-background/20
      after:pointer-events-none
    '
    >
      <source
        srcSet={`${small} 1x, ${large} 2x`}
        media='(max-width: 403px)'
        type='image/webp'
      />
      <img
        src={large}
        alt={`${selectedClass} class crest`}
        width={465}
        height={565}
        className='w-full h-full object-contain'
        decoding='async'
        loading='eager'
      />
    </picture>
  )
}

export default ClassCrest
