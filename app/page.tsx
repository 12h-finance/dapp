import Badge from '@/components/badge'
import STARTKNETLogo from '@/components/logos/starknet'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className={'flex flex-col items-center justify-center'}>
      <div className={'mb-[19px] flex h-28'}>
        <Badge type={'tsla'} className={'mt-[26px]'} />
        <Badge type={'sp500'} className={'ml-[124px] mr-[110px] mt-[52px]'} />
        <Badge type={'aapl'} className={'mt-[22px]'} />
      </div>
      <div
        className={cn(
          'flex w-[760px] flex-col items-center justify-center',
          'rounded-[8px] bg-card',
        )}
      >
        <div
          className={
            'mt-[30px] grid place-items-center gap-1 px-[7px] py-[16px]'
          }
        >
          <span className={'text text-white'}>{'Powered with'}</span>
          <STARTKNETLogo />
        </div>
        <p className={cn('grid gap-2 p-4', 'text-center text-6xl text-white')}>
          <span>{'Unlock liquidity of'}</span>
          <span>{'traditional assets'}</span>
        </p>
        <p
          className={cn(
            'mt-[14px] grid',
            'text-center text-2xl text-[#D0D0D0]',
          )}
        >
          <span>{'Make your long term investement work!'}</span>
          <span>{'Use your traditional assets to get crypto loan.'}</span>
        </p>
        <Button
          className={cn(
            'text-lg',
            'rounded-[10px] mb-[30px] mt-[24px] w-[124px] px-[13px] py-[24px]',
          )}
          variant={'secondary'}
        >
          {'Launch'}
        </Button>
      </div>

      <div className={'flex'}>
        <Badge type={'usdc'} className={'mt-[74px]'} />
        <Badge type={'btc'} className={'ml-[124px] mr-[110px] mt-[37px]'} />
        <Badge type={'eth'} className={'mt-[78px]'} />
      </div>
    </div>
  )
}
