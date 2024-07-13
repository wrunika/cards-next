import { Button } from '@/components/ui/button/button'
import { Typography } from '@/components/ui/typography'

import img from '../../public/icons/log-out-outline.svg'

export default function Home() {
  return (
    <main>
      <Typography variant={'subtitle2'}>Home</Typography>
      <Button img={img} variant={'secondary'}>
        Vera
      </Button>
      <Button img={img}>Hello</Button>
    </main>
  )
}
