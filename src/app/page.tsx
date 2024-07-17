import DropdownMenu from '@/components/ui/dropdownMenu/dropdownMenu'
import { Typography } from '@/components/ui/typography'

export default function Home() {
  return (
    <main>
      <Typography variant={'h1'}>Home</Typography>
      <DropdownMenu email={'j&johnson@gmail.com'} name={'test'} />
    </main>
  )
}
