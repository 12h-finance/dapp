'use client'
import { cn } from '@/lib/utils'
import Logo from '@/components/logos/company'
import { useDynamicModals } from '@dynamic-labs/sdk-react-core'

const Header = () => {
  const { setShowLinkNewWalletModal } = useDynamicModals()
  setShowLinkNewWalletModal(true)
  return (
    <header
      className={cn(
        'flex items-center justify-center py-3',
        'sticky top-0 z-50 w-full bg-foreground backdrop-blur',
      )}
    >
      <Logo />
    </header>
  )
}
export default Header
