/* eslint-disable @next/next/no-img-element */
'use client'

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
import { cn } from '@/lib/utils'
import { Dispatch, SetStateAction } from 'react'

type ConnectCollaterallProps = {
  className?: string
  onLogin: Dispatch<SetStateAction<boolean>>
}

const ConnectCollaterall = ({
  className,
  onLogin,
}: ConnectCollaterallProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className={cn(className, 'mt-2 rounded-[10px] text-white')}>
          {'Add collaterall'}
        </Button>
      </DialogTrigger>
      <DialogContent className={'flex flex-col rounded-[14px] bg-white p-0'}>
        <DialogHeader>
          <DialogTitle
            className={'border-b p-4 text-center font-normal text-[#0C0C4F]'}
          >
            {'Choose your collaterrall provider custodian'}
          </DialogTitle>
        </DialogHeader>
        <div className={'container flex justify-center'}>
          <img alt={'brokers.svg'} src={'/brokers.svg'} />
        </div>

        <div className={'mt-[24px] grid px-4 pb-4'}>
          <DialogClose asChild>
            <Button
              className={'mt-[10px] text-white'}
              onClick={() => onLogin(true)}
            >
              {'Connect (demo broker)'}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default ConnectCollaterall
