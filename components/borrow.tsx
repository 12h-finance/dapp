import { cn } from '@/lib/utils'
import { Button } from './ui/button'

type BorrowProps = {
  className?: string
}

const Borrow = ({ className }: BorrowProps) => {
  return (
    <div>
      <ColumnHeaders />
      <DataRow asset='USDC' available={100} borrowed={100} apyvar={'3.42'} />
    </div>
  )
}
export default Borrow

const ColumnHeaders = () => {
  return (
    <div className='flex h-[24px] w-[652px] border-b border-[#E5EEFF] bg-[#F2F6FD] px-6'>
      {['Asset', 'Available', 'Borrowed', 'APY'].map(header => (
        <div key={header} className='flex-1 text-center text-gray-600'>
          <span>{header}</span>
        </div>
      ))}
      <div className={'w-[150px]'} />
    </div>
  )
}

type DataRowProps = {
  asset: string
  available: number
  borrowed: number
  apyvar: string
}

const DataRow = ({ asset, available, borrowed, apyvar }: DataRowProps) => {
  return (
    <div className='flex h-[60px] w-[652px] items-center border-b border-[#E5EEFF] px-2 text-center'>
      <div className='flex-1 text-center text-blue-900'>
        <span>{asset}</span>
      </div>
      <div className='flex-1 text-center text-blue-900'>
        <span>{available}</span>
      </div>
      <div className='flex-1 text-center text-blue-900'>
        <span>{borrowed}</span>
      </div>
      <div className='flex-1 text-center text-blue-900'>
        <span>{apyvar}</span>
      </div>
      <div className='flex-none'></div>
      <Button className={cn('mr-2 rounded-[10px] text-white')}>
        {'Borrow'}
      </Button>
      <Button className={cn('mr-6 rounded-[10px] text-white')}>
        {'Borrow'}
      </Button>
    </div>
  )
}
