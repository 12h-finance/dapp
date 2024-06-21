import Badge from '@/components/badge'
import STARTKNETLogo from '@/components/logos/starknet'

export default function Home() {
  return (
    <div className={'flex flex-col items-center justify-center'}>
      <div className={''}>
        <Badge type={'btc'} />
        <Badge type={'usdc'} />
        <Badge type={'eth'} />
      </div>
      <div className={'flex w-2/3 items-center justify-center'}>
        <span className={'text text-white'}>{'powered with'}</span>
        <STARTKNETLogo />
      </div>
      <div className={''}>
        <Badge type={'usdc'} />
        <Badge type={'eth'} />
        <Badge type={'btc'} />
        <Badge type={'eth'} />
      </div>
    </div>
  )
}
