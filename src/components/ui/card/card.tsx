import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

type Props<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(props: Props<T>) => {
  const { as: Component = 'div', className, ...rest } = props

  return <Component className={clsx(s.card, className)} {...rest} />
}
