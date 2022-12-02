import type { NextPage } from 'next'

import React, { useEffect, useRef, useState } from 'react'

import cx from 'classnames'
import { gsap } from 'gsap'

import desktopText1 from '@/assets/images/desktop1.svg'
import desktopText2 from '@/assets/images/desktop2.svg'
import desktopText3 from '@/assets/images/desktop3.svg'
import { NavLink } from '@/components/ui/NavLink'
import Layout from '@/layouts/index'

import styles from '@/styles/pages/Home.module.scss'
import { useRouter } from 'next/router'

interface PageProps {
  loaded: boolean
  isMenuOpen: boolean
  setIsMenuOpen: (data: boolean) => void
}

const Home: NextPage<PageProps> = ({ loaded,
  isMenuOpen,
  setIsMenuOpen }) => {
  const [desktopImages] = useState([desktopText1, desktopText2, desktopText3])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const textRef = useRef(null)
  const router = useRouter()

  const changeCurrentImage = () => {
    const noOfImages = desktopImages.length

    if (currentImageIndex !== noOfImages - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      setCurrentImageIndex(0)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => changeCurrentImage(), 500)

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentImageIndex])

  useEffect(() => {
    if (!textRef || !loaded) return

    const tl = gsap.timeline()
    tl.fromTo(
      textRef.current,
      {
        y: 80,
        ease: 'power4.out',
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 2,
      }
    )
    return () => {
      tl.kill()
    }
  }, [loaded])

  return (
    <Layout>
      {isMenuOpen && (
          <div className={styles['home-page__optiongroup']}>
            <div
              onClick={() => {
                router.push('about')
                setIsMenuOpen(false)
              }}
              className={cx(
                styles['home-page__optionMenu'],
                styles['home-page__optionMenu--about']
              )}
            >
              <div>ABOUT US</div>
              <div>
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 42 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.626 0.869995L0.645996 111.113H15.36L41.335 0.869995H26.626Z"
                    fill="#272822"
                  />
                </svg>
              </div>
            </div>
            <div
              className={cx(
                styles['home-page__optionMenu'],
                styles['home-page__optionMenu--services']
              )}
              onClick={() => {
                router.push('services')
                setIsMenuOpen(false)
              }}
            >
              <div>SERVICES</div>
              <div>
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 26 111"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.479 110.993H10.985C10.985 98.5855 8.70602 92.7925 6.06802 86.0855C3.29102 79.0255 0.14502 71.0255 0.14502 55.8705C0.14502 40.7155 3.29102 32.7165 6.06802 25.6565C8.70602 18.9495 10.985 13.1565 10.985 0.749512H25.479C25.479 15.9035 22.333 23.9045 19.556 30.9645C16.918 37.6715 14.639 43.4645 14.639 55.8715C14.639 68.2785 16.918 74.0715 19.556 80.7785C22.333 87.8385 25.479 95.8395 25.479 110.994"
                    fill="#272822"
                  />
                </svg>
              </div>
            </div>
            <div
              onClick={() => {
                router.push('clients')
                setIsMenuOpen(false)
              }}
              className={cx(
                styles['home-page__optionMenu'],
                styles['home-page__optionMenu--client']
              )}
            >
              <div>CLIENTS</div>
              <div>
              <svg
                   width="16px"
                   height="16px"
                  viewBox="0 0 15 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 111.114H14.483V0.870117H0V111.114Z"
                    fill="#272822"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      <div
        className={cx(styles['home-page'], { [styles[`is-loaded`]]: loaded })}
        >
        <div
          className={cx(styles['anim-head'], { [styles[`is-loaded`]]: loaded })}
        >
          <div className={styles['anim-head__text']}>
            <img src={desktopImages[currentImageIndex].src} alt="Layer 3" />
          </div>

          <div className={styles['anim-head__dummy']} />

          <div className={styles['anim-head__path']}>
            <svg
              width="187"
              height="179"
              viewBox="0 0 187 179"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M125.456 179H102.049C102.049 158.965 98.3689 149.608 94.1089 138.777C89.6249 127.38 84.5439 114.457 84.5439 89.9801C84.5439 65.5031 89.6249 52.5881 94.1089 41.1871C98.3689 30.3561 102.049 21.0001 102.049 0.964111H125.456C125.456 25.4361 120.375 38.3571 115.891 49.7571C111.631 60.5881 107.951 69.9431 107.951 89.9791C107.951 110.015 111.631 119.371 115.891 130.202C120.376 141.602 125.456 154.524 125.456 178.995"
                fill="#272822"
              />
              <path
                d="M41.955 0.969971L0 179H23.761L65.716 0.969971H41.955Z"
                fill="#272822"
              />
              <path
                d="M163.283 179H186.672V0.968994H163.283V179Z"
                fill="#272822"
              />
            </svg>
          </div>
        </div>

        <div className={styles['home-page__notes']} ref={textRef}>
          <p>
            We are a software development and advisory firm that will help you
            navigate the world of Web3. We start by getting to know you, your
            brand, and your goals. Then we create amazing Web3 experiences, from
            NFT Marketplaces to masterful Metaverses.
          </p>
          <NavLink href="/about">DISCOVER MORE ABOUT US</NavLink>
        </div>
      </div>
    </Layout>
  )
}

export default Home
