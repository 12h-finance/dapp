import Badge from '@/components/badge'
import STARTKNETLogo from '@/components/logos/starknet'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className={'flex flex-col items-center justify-center'}>
      <div className={'mb-[19px] flex h-28'}>
        <Badge type={'btc'} className={'mt-[26px]'} />
        <Badge type={'usdc'} className={'ml-[124px] mr-[110px] mt-[52px]'} />
        <Badge type={'eth'} className={'mt-[22px]'} />
      </div>
      <div
        className={cn(
          'flex w-2/3 flex-col items-center justify-center',
          'rounded-[8px] bg-card',
        )}
      >
        <div
          className={
            'mt-[30px] flex flex-col items-center justify-center px-[16px] py-[7px]'
          }
        >
          <span className={'text text-white'}>{'Powered with'}</span>
          <STARTKNETLogo />
        </div>
	<p className={'mb-4 mt-[8px] text-center text-6xl text-white'}>
		
        <span >
          {'Unlock liquidity of'}
        </span>
	<br/>
        <span >
          {'traditional assets'}
        </span>
	</p>
        <span className={'text-center text-2xl text-[#D0D0D0]'}>
          {'Make your long term investement work!'}
        </span>
        <span className={'text-center text-2xl text-[#D0D0D0]'}>
          {'Use your traditional assets to get crypto loan.'}
        </span>
        <Button className={'mb-[30px] mt-[24px]'} variant={'secondary'}>
          {' Launch'}
        </Button>
      </div>
    </div>
  )
}
