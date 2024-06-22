'use client'

import { cn } from '@/lib/utils'
import Logo from '@/components/logos/company'
import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react-core'

type HeaderProps = {
  className?: string
}
const Header = ({ className }: HeaderProps) => {
  const { isAuthenticated } = useDynamicContext()
  return (
    <header
      className={cn(
        className,
        'flex items-center py-3',
        isAuthenticated
          ? 'justify-between border-b border-[#F2F3F729] px-[60px]'
          : 'justify-center',
        'sticky top-0 z-50 w-full bg-foreground backdrop-blur',
      )}
    >
      <div className={'flex items-center justify-center'}>
        <Logo />
        {isAuthenticated && (
          <span
            className={cn('ml-[32px] text-sm font-bold text-white', 'border-b')}
          >
            {'Dashboard'}
          </span>
        )}
      </div>
      {isAuthenticated && <DynamicWidget />}
    </header>
  )
}
export default Header
