import { ReactNode } from 'react'

import cx from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import styles from './NavLink.module.scss'

type NavProps = {
  children: ReactNode
  href: string
  exact?: boolean
  className?: string
  onClick?: Function
}

function NavLink (
    {
      href,
      exact,
      children,
      className = '',
      onClick,
      ...props
    }: NavProps) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  // @ts-ignore
  const classNames = cx(className, styles['nav-link'], {
    [styles[`is-active`]]: isActive,
  })

  return (
      <Link href={href}>
        <a {...props} className={classNames} onClick={onClick ? () => onClick() : undefined}>
          {children}
        </a>
      </Link>
  )
}

export { NavLink }
