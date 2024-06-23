import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Account, RpcProvider, Contract } from 'starknet'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { TSPXBeam } from './tspx-beam'
import SupplyColSuccess from './supply-collateral-success'
import use12h from '@/hooks/use12h'

type SupplyRWAModalProps = {
  className?: string
}

const SupplyCollaterall = ({ className }: SupplyRWAModalProps) => {
  const { primaryWallet } = useDynamicContext()

  const [amount, setAmount] = useState<string>('')
  const [txHash, setTxHash] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const { supplied } = use12h()
  const handleSubmit = async () => {
    if (!primaryWallet) return
    const provider =
      await primaryWallet.connector.getPublicClient<RpcProvider>()
    if (!provider) return
    const signer = await primaryWallet.connector.getSigner<Account>()
    // @todo move address to config
    const address =
      '0x021eb62dcc6c99a30290ec9e234eb17ada1f1029c454dfee7bbbc127c67be6da'
    const { abi } = await provider.getClassAt(address)
    const contract = new Contract(abi, address, provider)

    if (!signer) return
    contract.connect(signer)
    const amountDecimals = Number(amount) * 10 ** 18
    const args = contract.populate('mint', [amountDecimals])
    const mint_tx = await contract.mint(args.calldata)
    setLoading(true)
    await provider.waitForTransaction(mint_tx.transaction_hash)
    setTxHash(mint_tx.transaction_hash)
    setLoading(false)
  }

  const supplyContent = () => (
    <>
      <DialogHeader>
        <DialogTitle className={'text-[#0C0C4F]'}>
          {'Supply RWA collaterall'}
        </DialogTitle>
      </DialogHeader>
      <div className={'mt-[24px] grid'}>
        <div className={'mb-2 flex justify-between'}>
          <Label className={'text text-black'}>{'Enter quantity'}</Label>
          <Label>
            <span className={'text-[#8592AD]'}>{'Available: '}</span>
            {'200 SPX'}
          </Label>
        </div>
        <Input
          type={'number'}
          placeholder={'1'}
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <Button
          className={'mt-[10px] text-white'}
          type={'submit'}
          onClick={handleSubmit}
        >
          {'Supply'}
        </Button>
      </div>
    </>
  )
  const pendingContent = () => (
    <>
      <DialogHeader>{'Pending securities supplying'}</DialogHeader>
      <TSPXBeam />
    </>
  )
  const successContent = () => (
    <DialogClose className={'grid place-items-center'}>
      <SupplyColSuccess />
      <Label className={'my-4'} >{'tSPX supplied!'}</Label>
   
      <Button className={'text-white'} onClick={() => setTxHash('')}>
        {'Succsss'}
      </Button>
    </DialogClose>
  )
  const Content = loading
    ? pendingContent
    : txHash
      ? successContent
      : supplyContent

  return (
    <Dialog>
      <DialogTrigger className={className}>
        <ColumnHeaders />
        <DataRow
          asset='SPX'
          available={200}
          supplied={supplied}
          price='5,478.83'
        />
      </DialogTrigger>
      <DialogContent className={'max-w-sm bg-white'}>
        <Content />
      </DialogContent>
    </Dialog>
  )
}

export default SupplyCollaterall

const ColumnHeaders = () => {
  return (
    <div className='flex h-[24px] w-[652px] border-b border-[#E5EEFF] bg-[#F2F6FD] px-6'>
      {['Asset', 'Available', 'Supplied', 'Price, USD'].map(header => (
        <div key={header} className='flex-1 text-center text-gray-600'>
          <span>{header}</span>
        </div>
      ))}
      <div className={'w-[80px]'} />
    </div>
  )
}

type DataRowProps = {
  asset: string
  available: number
  supplied: number
  price: string
}

const DataRow = ({ asset, available, supplied, price }: DataRowProps) => {
  return (
    <div className='flex h-[60px] w-[652px] items-center border-b border-[#E5EEFF] px-2 text-center'>
      <div className='flex-1 text-center text-blue-900'>
        <span>{asset}</span>
      </div>
      <div className='flex-1 text-center text-blue-900'>
        <span>{available}</span>
      </div>
      <div className='flex-1 text-center text-blue-900'>
        <span>{supplied}</span>
      </div>
      <div className='flex-1 text-center text-blue-900'>
        <span>{price}</span>
      </div>
      <div className='flex-none'></div>
      <Button className={cn('mr-10 rounded-[10px] text-white')}>
        {'Supply'}
      </Button>
    </div>
  )
}
