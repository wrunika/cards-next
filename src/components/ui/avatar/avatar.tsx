import { CSSProperties, ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import s from './avatar.module.scss'
type Props = {
  alt?: string
  size?: number
  src?: null | string
  width?: number
} & ComponentPropsWithoutRef<'span'>

export const Avatar = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const { alt = 'img', className, size = 36, src, style, ...rest } = props
  const styles: CSSProperties = { ...style, height: size, width: size }

  const avatar = src ? src : '/avatar.png'

  return (
    <span className={clsx(s.avatar, className)} ref={ref} style={styles} {...rest}>
      <Image alt={alt} className={s.img} height={size} src={avatar} width={size} />
    </span>
  )
})
