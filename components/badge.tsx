import React from 'react'
import ETHLogo from '@/components/logos/eth'
import BTCLogo from '@/components/logos/btc'
import USDCLogo from '@/components/logos/usdc'
import { cn } from '@/lib/utils'

const prices = { eth: '$3,770.14', btc: '$67,580.12', usdc: '$1.00' }
const BadgeTypeData = {
  eth: {
    ticker: 'ETH',
    price: prices.eth,
    logo: <ETHLogo />,
  },
  btc: {
    ticker: 'BTC',
    price: prices.btc,
    logo: <BTCLogo />,
  },
  usdc: {
    ticker: 'USDC',
    price: prices.usdc,
    logo: <USDCLogo />,
  },
}

export type BadgeType = keyof typeof BadgeTypeData

type BadgeProps = {
  type: BadgeType
  className?: string
}

const getBadgeData = (type: BadgeType) => BadgeTypeData[type]

const Badge = ({ type, className }: BadgeProps) => {
  const { ticker, price, logo } = getBadgeData(type)

  return (
    <div
      className={cn(
        'inline-flex max-w-44 items-center justify-center',
        'rounder-[8px] bg-muted p-[7px]',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center',
          'rounded-[6px] bg-muted-foreground px-[10px] py-[6px]',
        )}
      >
        {logo}
        <span className={'pl-1 text-xs font-bold text-white'}>{ticker}</span>
      </div>
      <div className={'pl-2 text-sm text-white'}>{price}</div>
    </div>
  )
}

export default Badge
