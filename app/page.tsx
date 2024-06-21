import Logo from '@/components/logo'
import Badge from '@/components/badge'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div>
      <Header />
      <Badge type={'eth'} />
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
