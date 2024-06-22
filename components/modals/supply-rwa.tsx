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

type SupplyRWAModalProps = {
  available: string
}
const SupplyRWAModal = ({ available }: SupplyRWAModalProps) => (
  <Dialog>
    <DialogTrigger>
      <Button className={'mt-2 rounded-[10px] text-white'}>
        {'Add collaterall'}
      </Button>
    </DialogTrigger>
    <DialogContent className={'max-w-sm bg-white'}>
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
            {available}
          </Label>
        </div>
        <Input type={'number'} placeholder='1' />
        <DialogClose asChild>
          <Button className={'mt-[10px] text-white'} type={'submit'}>
            {'Supply'}
          </Button>
        </DialogClose>
      </div>
    </DialogContent>
  </Dialog>
)

export default SupplyRWAModal
