type MetalBordersProps = {
  children: React.ReactNode
}

export const MetalBorders = ({
  children,
}: MetalBordersProps) => {
  return (
    <div className='relative w-full h-full bg-transparent'>
      {/* Border pieces */}
      <div className='absolute w-[66px] h-[61px] top-0 left-0 mb-corner mb-top-left' />
      <div className='absolute w-[66px] h-[61px] top-0 right-0 mb-corner mb-top-right' />
      <div className='absolute w-[66px] h-[60px] bottom-0 left-0 mb-corner mb-bottom-left' />
      <div className='absolute w-[66px] h-[60px] bottom-0 right-0 mb-corner mb-bottom-right' />

      <div className='absolute h-[42px] bottom-0 left-[66px] w-[calc(100%-132px)] mb-edge-top' />
      <div className='absolute h-[42px] top-0 left-[66px] w-[calc(100%-132px)] mb-edge-bottom' />

      <div className='absolute top-[61px] left-[6px] w-[23px] h-[calc(100%-121px)] mb-edge-left' />
      <div className='absolute top-[61px] right-[6px] w-[23px] h-[calc(100%-121px)] mb-edge-right' />

      {/* Content fits inside with padding */}
      <div className='p-4'>{children}</div>
    </div>
  )
}
