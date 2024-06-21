import Logo from '@/components/logos/company'
import Badge from '@/components/badge'
import STARTKNETLogo from '@/components/logos/starknet'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className={'flex items-center justify-center flex-col'}>
      <Header />
      <div className={'border'}>
        <Badge type={'btc'} />
        <Badge type={'usdc'} />
        <Badge type={'eth'} />
      </div>
      <div className={'flex w-2/3 items-center justify-center border'}>
        <span className={'text text-white'}>{'powered with'}</span>
        <STARTKNETLogo />
      </div>
      <div className={'border'}>
        <Badge type={'usdc'} />
        <Badge type={'eth'} />
        <Badge type={'btc'} />
        <Badge type={'eth'} />
      </div>
      <Badge type={'btc'} />
    </div>
  )
}

const Header = () => (
  <header
    className={cn(
      'flex items-center justify-center py-3',
      'sticky top-0 z-50 w-full bg-foreground backdrop-blur',
    )}
  >
    <Logo />
  </header>
)
