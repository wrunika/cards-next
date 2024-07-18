import Image from 'next/image'

import s from './header.module.scss'

import { Button } from '../ui/button/button'
type Props = {
  isAuth: boolean
}

const Header = (props: Props) => {
  const { isAuth } = props

  return (
    <div className={s.header}>
      <Image alt={'logo'} height={36} src={'/Logo.svg'} width={157} />
      {isAuth ? (
        <h1>Сюда вставить DROP...</h1>
      ) : (
        <Button as={'a'} href={'#'} variant={'secondary'}>
          Sign In
        </Button>
      )}
    </div>
  )
}

export default Header
