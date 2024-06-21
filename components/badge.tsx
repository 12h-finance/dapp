import React from 'react'
import PropTypes from 'prop-types'
import ETHLogo from '@/components/logos/eth'
import { cn } from '@/lib/utils'

const prices = { eth: '$3,770.14', btc: '$67,580.12', usdc: '$1.00' }
const BadgeTypeData = {
  eth: {
    ticker: 'ETH',
    price: prices.eth,
  },
  btc: {
    ticker: 'BTC',
    price: prices.btc,
  },
  usdc: {
    ticker: 'USDC',
    price: prices.usdc,
  },
}

export type BadgeType = keyof typeof BadgeTypeData

type BadgeProps = {
  type: BadgeType
  className?: string
}

const getBadgeData = (type: BadgeType) => BadgeTypeData[type]

const Badge = ({ type, className }: BadgeProps) => {
  const { ticker, price } = getBadgeData(type)

  return (
    <div
      className={cn(
        'h-[46px] w-[145px] rounded-[8px]',
        'flex items-center justify-between bg-muted px-[7px]',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center',
          'rounded-[6px] bg-muted-foreground px-[10px] py-[6px]',
        )}
      >
        <ETHLogo />
        <span className={'pl-1 text-xs text-white'}>{ticker}</span>
      </div>
      <div className='pl-2 text-sm text-white'>{price}</div>
    </div>
  )
}

Badge.propTypes = {
  type: PropTypes.oneOf(Object.keys(BadgeTypeData)).isRequired,
  className: PropTypes.string,
}

export default Badge
