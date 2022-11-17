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
  const [openedMenu, setOpenedMenu] = useState<boolean>(false)

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
    <>
      <header
        className={cx(styles['header'], {
          [styles[`is-disabled`]]: loading || isAnimating,
          [styles[`is-loaded`]]: loaded,
          [styles[`is-home`]]: pathname === '/',
        })}
      >
        <NavLink href="/" onClick={() => setOpenedMenu(false)}>
          <svg
            width="95"
            height="24"
            viewBox="0 0 95 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.298 0H23.041L17.404 23.908H20.597L21.891 18.421L32.338 15.957L34.213 23.909H37.405L35.362 15.244L34.649 12.22L31.768 0H23.298ZM25.491 3.156H29.321L31.626 12.933L22.691 15.04L25.491 3.156Z"
              fill="#272822"
            />
            <path
              d="M94.944 23.907L86.222 12.28C86.631 12.203 87.039 12.141 87.443 12.08C89.614 11.755 92.074 11.388 93.27 8.34096C93.6373 7.43714 93.7748 6.45635 93.6701 5.48639C93.5653 4.51642 93.2217 3.58756 92.67 2.78296C92.126 1.96551 91.3966 1.28803 90.5414 0.805656C89.6861 0.323279 88.729 0.0496274 87.748 0.00695801H79.657L77.237 0.0189552L77.285 23.907H80.357V15.949C81.0402 15.0917 81.8408 14.335 82.735 13.701C82.918 13.565 83.102 13.443 83.287 13.332L91.157 23.907H94.944ZM80.9 11.227C80.711 11.367 80.529 11.507 80.353 11.646V3.08696H87.748C88.2267 3.13038 88.6894 3.28169 89.1012 3.52953C89.5131 3.77738 89.8635 4.11531 90.126 4.51796C90.3983 4.90717 90.5666 5.35948 90.6151 5.83199C90.6636 6.3045 90.5906 6.78157 90.403 7.21796C89.903 8.49996 89.156 8.71296 86.986 9.03696C84.8003 9.22186 82.7015 9.977 80.899 11.227"
              fill="#272822"
            />
            <path
              d="M52.132 0.00695801L45.816 9.22696H45.616L39.293 0.00695801H35.538L44.177 12.607V23.907H47.285V12.607L55.888 0.00695801H52.132Z"
              fill="#272822"
            />
            <path
              d="M58.508 0.00805664V23.9081H73.942V21.1431H61.547V14.2931L72.063 11.8151L72.057 11.7911L72.101 11.7801L71.375 8.69906L61.547 11.0161V2.77306H73.6V0.00805664H58.508Z"
              fill="#272822"
            />
            <path
              d="M3.04298 15.954V0H0.000976562V16.284C0.00256395 18.3059 0.806187 20.2446 2.23551 21.6746C3.66482 23.1047 5.60309 23.9094 7.62498 23.912H15.338V20.953H8.19398C6.85255 20.9571 5.56271 20.4364 4.60017 19.5021C3.63763 18.5677 3.07875 17.294 3.04298 15.953"
              fill="#272822"
            />
          </svg>
        </NavLink>

        <button
          className={cx(styles['burger'], {
            [styles[`is-disabled`]]: loading || isAnimating,
            [styles[`is-loaded`]]: loaded,
            [styles[`is-home`]]: pathname === '/',
          })}
          onClick={() => setOpenedMenu((prevState) => !prevState)}
        >
          <svg
            width="21"
            height="24"
            viewBox="0 0 21 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.91299 0.0161133L0.28299 23.9081H3.47198L9.09999 0.0161133H5.91299Z"
              fill="#272822"
            />
            <path
              d="M14.807 23.9081H11.666C11.7171 22.0512 11.3532 20.2064 10.601 18.5081C8.88829 14.3093 8.88829 9.60678 10.601 5.40806C11.3532 3.70969 11.7171 1.86487 11.666 0.00805664H14.807C14.8545 2.25763 14.4166 4.49102 13.523 6.55606C12.1013 10.0157 12.1013 13.8964 13.523 17.3561C14.4172 19.4223 14.8551 21.6571 14.807 23.9081Z"
              fill="#272822"
            />
            <path
              d="M21.001 0.0161133H17.862V23.9081H21.001V0.0161133Z"
              fill="#272822"
            />
          </svg>
        </button>
      </header>

      <nav
        className={cx(styles['navigation'], {
          [styles[`is-disabled`]]: loading || isAnimating,
          [styles[`is-loaded`]]: loaded,
          [styles[`is-opened`]]: openedMenu,
          [styles[`is-home`]]: pathname === '/',
        })}
      >
        <div className={cx(styles['navigation__item-list'])}>
          <div
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
            <NavLink
              href="/about"
              className={styles['navigation__link']}
              onClick={() => setOpenedMenu(false)}
            >
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
          </div>
          <div
            className={cx(styles['navigation__item'], {
              [styles[`is-active`]]: currentPath === '/services',
              [styles[`is-transformed`]]: ['/services', '/clients'].includes(
                currentPath
              ),
              [styles[`is-animating`]]:
                isAnimating && currentPath === '/services',
            })}
          >
            <NavLink
              href="/services"
              className={styles['navigation__link']}
              onClick={() => setOpenedMenu(false)}
            >
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
          </div>
          <div
            className={cx(styles['navigation__item'], {
              [styles[`is-active`]]: currentPath === '/clients',
              [styles[`is-transformed`]]: ['/clients'].includes(currentPath),
              [styles[`is-animating`]]:
                isAnimating && currentPath === '/clients',
            })}
          >
            <NavLink
              href="/clients"
              className={styles['navigation__link']}
              onClick={() => setOpenedMenu(false)}
            >
              <svg
                width="15"
                height="112"
                viewBox="0 0 15 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 111.114H14.483V0.870117H0V111.114Z"
                  fill="#272822"
                />
              </svg>
              <span className={styles['navigation__text']}>Clients</span>
            </NavLink>
          </div>
        </div>
        {loading}
      </nav>
    </>
  )
}

export default Navigation
