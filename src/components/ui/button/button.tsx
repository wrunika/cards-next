import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import Image from 'next/image'

import s from './button.module.scss'

import { Typography } from '../typography'
import { Variant } from '../typography/typography'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  img?: string
  typographyVariant?: Variant
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    img,
    typographyVariant = 'subtitle2',
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    >
      {img && <Image alt={'img'} className={s.buttonIcon} src={img} />}
      <Typography variant={typographyVariant}>{children}</Typography>
    </Component>
  )
}
