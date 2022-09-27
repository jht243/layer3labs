import React, { FC, useEffect, useState } from 'react'

import cx from 'classnames'
import { useRouter } from 'next/router'

import { sleep } from '@/app/utils/helpers'
import { NavLink } from '@/components/ui/NavLink'

import styles from './Navigation.module.scss'

interface Props {
  changedRoute: string
  loaded: boolean
}

const Navigation: FC<Props> = ({ changedRoute, loaded }) => {
  const router = useRouter()
  const { pathname } = router
  const [loading, setLoading] = useState<boolean>(false)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [currentPath, setCurrentPath] = useState<string>(pathname)

  useEffect(() => {
    handleRoute(changedRoute).catch((error) => console.log(error))
    return () => {
      document.body.classList.remove('is-disabled')
    }
  }, [changedRoute])

  const handleRoute = async (url: string) => {
    document.body.classList.add('is-disabled')
    setIsAnimating(true)
    setLoading(true)
    setCurrentPath(url)

    await sleep(1.2)

    setLoading(false)
    setIsAnimating(false)
    document.body.classList.remove('is-disabled')
  }

  return (
    <nav
      className={cx(styles['navigation'], {
        [styles[`is-disabled`]]: loading || isAnimating,
        [styles[`is-loaded`]]: loaded,
        [styles[`is-home`]]: pathname === '/',
      })}
    >
      <ul>
        <li
          className={cx(styles['navigation__item'], {
            [styles[`is-active`]]: currentPath === '/about',
            [styles[`is-transformed`]]: [
              '/about',
              '/services',
              '/clients',
            ].includes(currentPath),
            [styles[`is-animating`]]: isAnimating && currentPath === '/about',
          })}
        >
          <NavLink href="/about" className={styles['navigation__link']}>
            <svg
              width="42"
              height="112"
              viewBox="0 0 42 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.626 0.869995L0.645996 111.113H15.36L41.335 0.869995H26.626Z"
                fill="#272822"
              />
            </svg>
            <span className={styles['navigation__text']}>About Us</span>
          </NavLink>
        </li>
        <li
          className={cx(styles['navigation__item'], {
            [styles[`is-active`]]: currentPath === '/services',
            [styles[`is-transformed`]]: ['/services', '/clients'].includes(
              currentPath
            ),
            [styles[`is-animating`]]:
              isAnimating && currentPath === '/services',
          })}
        >
          <NavLink href="/services" className={styles['navigation__link']}>
            <svg
              width="26"
              height="111"
              viewBox="0 0 26 111"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.479 110.993H10.985C10.985 98.5855 8.70602 92.7925 6.06802 86.0855C3.29102 79.0255 0.14502 71.0255 0.14502 55.8705C0.14502 40.7155 3.29102 32.7165 6.06802 25.6565C8.70602 18.9495 10.985 13.1565 10.985 0.749512H25.479C25.479 15.9035 22.333 23.9045 19.556 30.9645C16.918 37.6715 14.639 43.4645 14.639 55.8715C14.639 68.2785 16.918 74.0715 19.556 80.7785C22.333 87.8385 25.479 95.8395 25.479 110.994"
                fill="#272822"
              />
            </svg>
            <span className={styles['navigation__text']}>Services</span>
          </NavLink>
        </li>
        <li
          className={cx(styles['navigation__item'], {
            [styles[`is-active`]]: currentPath === '/clients',
            [styles[`is-transformed`]]: ['/clients'].includes(currentPath),
            [styles[`is-animating`]]: isAnimating && currentPath === '/about',
          })}
        >
          <NavLink href="/clients" className={styles['navigation__link']}>
            <svg
              width="15"
              height="112"
              viewBox="0 0 15 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 111.114H14.483V0.870117H0V111.114Z" fill="#272822" />
            </svg>
            <span className={styles['navigation__text']}>Clients</span>
          </NavLink>
        </li>
      </ul>
      {loading}
    </nav>
  )
}

export default Navigation
