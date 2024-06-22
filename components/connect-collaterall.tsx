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
import { cn } from '@/lib/utils'

type ConnectCollaterallProps = {
  className?: string
}

const ConnectCollaterall = ({ className }: ConnectCollaterallProps) => (
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
      <img alt={'brokers.svg'} src={'/brokers.svg'} />
      <div className={'mt-[24px] grid px-4 pb-4'}>
        <div className={'mb-2 flex justify-between'}>
          <Label className={'text text-black'}>{'Enter quantity'}</Label>
        </div>
        <Input type={'number'} placeholder='1' />
        <DialogClose asChild>
          <Button className={'mt-[10px] text-white'} type={'submit'}>
            {'Login'}
          </Button>
        </DialogClose>
      </div>
    </DialogContent>
  </Dialog>
)

export default ConnectCollaterall
