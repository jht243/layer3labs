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
}

function NavLink({
  href,
  exact,
  children,
  className = '',
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
      <a {...props} className={classNames}>
        {children}
      </a>
    </Link>
  )
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
}

NavLink.defaultProps = {
  exact: false,
}

export { NavLink }
