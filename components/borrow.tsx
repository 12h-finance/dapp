import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useState } from 'react'
import { BorrowBeam } from './borrow-beam'

type BorrowProps = {
  className?: string
}

const BorrowDialogContent = () => {
  const [amount, setAmount] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const BorrowInput = () => (
    <div className={'mt-[24px] grid'}>
      <div className={'mb-2 flex justify-between'}>
        <Label className={'text text-black'}>{'Enter quantity'}</Label>
        <Label className={''}>
          <span className={'text-[#8592AD]'}>{'Available: '}</span>
          {'5000 USDC'}
        </Label>
      </div>
      <Input
        type={'number'}
        placeholder={'1000'}
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <Button
        className={'mt-[10px] text-white'}
        type={'submit'}
        onClick={() => setLoading(true)}
      >
        {'Borrow'}
      </Button>
    </div>
  )

  const Pending = () => (
    <DialogClose>
      <BorrowBeam />
    </DialogClose>
  )

  return (
    <>
      <DialogHeader>
        <DialogTitle className={'text-[#0C0C4F]'}>
          {'Borrow Crypto'}
        </DialogTitle>
        {loading ? <Pending /> : <BorrowInput />}
      </DialogHeader>
    </>
  )
}

const BorrowDialog = () => (
  <Dialog>
    <DialogTrigger>
      <Button className={'rounded-[10px] bg-secondary text-white'}>
        {'Borrow'}
      </Button>
    </DialogTrigger>
    <DialogContent className={'max-w-sm bg-white'}>
      <BorrowDialogContent />
    </DialogContent>
  </Dialog>
)

const RepayDialog = () => (
  <Dialog>
    <DialogTrigger>
      <Button className={'rounded-[10px] text-white'}>{'Repay'}</Button>
    </DialogTrigger>
    <DialogContent className={'max-w-sm bg-white'}>{'test'}</DialogContent>
  </Dialog>
)

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
    <div className='flex h-[60px] w-[600px] items-center border-b border-[#E5EEFF] text-center'>
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
      <div className={'flex items-center justify-center gap-4'}>
        <RepayDialog />
        <BorrowDialog />
      </div>
    </div>
  )
}
