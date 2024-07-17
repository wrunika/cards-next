'use client'
import { useState } from 'react'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import s from './dropdownMenu.module.scss'

import { Avatar } from '../avatar/avatar'
import { Typography } from '../typography'

type Props = {
  email: string
  img?: string
  name: string
}
const DropdownMenu = (props: Props) => {
  const { email, img, name } = props
  const [isShow, setIsShow] = useState<boolean>(false)

  const toggleIsShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.trigger} onClick={toggleIsShow}>
        <Avatar />
      </div>
      {isShow && (
        <div className={s.dropdownMenu}>
          <Image alt={'img'} className={s.beak} height={25} src={'/beak-top.svg'} width={200} />
          <div className={s.user}>
            <Avatar src={img} />
            <div className={s.userInf}>
              <Typography variant={'subtitle2'}>{name}</Typography>
              <Typography className={s.email} variant={'caption'}>
                {email}
              </Typography>
            </div>
          </div>
          <Link className={clsx(s.link, s.myProfile)} href={'#'}>
            <Typography variant={'caption'}>My profile</Typography>
          </Link>

          <Link className={clsx(s.link, s.signOut)} href={'#'}>
            <Typography variant={'caption'}>Sign Out</Typography>
          </Link>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
