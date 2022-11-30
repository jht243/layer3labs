import type { NextPage } from 'next'

import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import cx from 'classnames'

import Layout from '@/layouts/index'
import { NavLink } from '@/components/ui/NavLink'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Keyboard, Mousewheel } from 'swiper/core'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { useWindowSize } from '@/app/hooks/useWindowSize'

import styles from '@/components/Mobile/ClientsMobile/ClientsMobile.module.scss'

import orangeBlock from '@/images/orange-bg.png'

import bowleroLogo from '@/images/bowlero.png'
import styrLogo from '@/images/styr.png'
import GSLogo from '@/images/game-station.png'
import JGILogo from '@/images/JGI.png'
import etherealLogo from '@/images/ethereal.png'
import pipeflareLogo from '@/images/pipeflare.png'
import Image from 'next/image'

interface PageProps {
  loaded: boolean
}

const ClientsMobile: NextPage<PageProps> = ({ loaded }) => {
  const { height } = useWindowSize()

  return (
    <div
      className={cx(styles['client-page-mobile'], {
        [styles[`is-loaded`]]: loaded,
      })}
    >
      {/* Section 1 */}

      <Swiper
        slidesPerView={1}
        mousewheel={true}
        keyboard={{ enabled: true, onlyInViewport: false }}
        direction="vertical"
        height={height ? height - 119 : 700}
      >
        <SwiperSlide>
          <div className={styles['client-page-mobile__group']}>
            <div className={styles['client-page-mobile__bg--group']}>
              <div className={styles['client-page-mobile__bg']}>
                <Image src={orangeBlock.src} alt="bg_about" layout="fill" />
              </div>
              <span className={styles['client-page-mobile__vision--our']}>
                Our
              </span>
              <span className={styles['client-page-mobile__vision--vision']}>
                CLIENTS
              </span>
              <div className={styles['client-page-mobile__content--section']}>
                <div className={styles['client-page-mobile__boxes']}>
                  <div className={styles['client-page-mobile__logo']}>
                    <img src={bowleroLogo.src} alt="Bowlero Corporation" />
                  </div>
                  <div className={styles['client-page-mobile__text']}>
                    NFT MARKETPLACE AND MINTING PLATFORM FOR LEAGUE BOWLER
                    CERTIFICATION PROGRAM
                  </div>
                </div>
                <div className={styles['client-page-mobile__boxes']}>
                  <div className={styles['client-page-mobile__logo']}>
                    <img src={styrLogo.src} alt="Bowlero Corporation" />
                  </div>
                  <div className={styles['client-page-mobile__text']}>
                    HIGH FREQUENCY TRADING SNEAKER MARKETPLACE WITH ASSET BACKED
                    NFTS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['client-page-mobile__group']}>
            <div className={styles['client-page-mobile__bg--group']}>
              <div className={styles['client-page-mobile__bg']}>
                <Image src={orangeBlock.src} alt="bg_about" layout="fill" />
              </div>
              <span className={styles['client-page-mobile__vision--our']}>
                Our
              </span>
              <span className={styles['client-page-mobile__vision--vision']}>
                CLIENTS
              </span>
              <div className={styles['client-page-mobile__content--section']}>
                <div className={styles['client-page-mobile__boxes']}>
                  <div className={styles['client-page-mobile__logo']}>
                    <img src={GSLogo.src} alt="Game Station" />
                  </div>
                  <div className={styles['client-page-mobile__text']}>
                    CRYPTO MICRO-WALLET LEAD GENERATION PLATFORM WITH GAMING AND
                    AIRDROPS
                  </div>
                </div>
                <div className={styles['client-page-mobile__boxes']}>
                  <div className={styles['client-page-mobile__logo']}>
                    <img src={JGILogo.src} alt="Jane Goodall Institute" />
                  </div>
                  <div className={styles['client-page-mobile__text']}>
                    MEMBERSHIP, CHARITY, AND NFT TICKETING PLATFORM FOR NATIONAL
                    SPORTS ORGANIZATIONS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['client-page-mobile__group']}>
            <div className={styles['client-page-mobile__bg--group']}>
              <div className={styles['client-page-mobile__bg']}>
                <Image src={orangeBlock.src} alt="bg_about" layout="fill" />
              </div>
              <span className={styles['client-page-mobile__vision--our']}>
                Our
              </span>
              <span className={styles['client-page-mobile__vision--vision']}>
                CLIENTS
              </span>
              <div className={styles['client-page-mobile__content--section']}>
                <div className={styles['client-page-mobile__boxes']}>
                  <div className={styles['client-page-mobile__logo']}>
                    <img src={etherealLogo.src} alt="Ethereal Collective" />
                  </div>
                  <div className={styles['client-page-mobile__text']}>
                    WEB3.0 STRATEGY AND IMPLEMENTATION TO PRESERVE DR. GOODALLS
                    LEGACY AND RESEARCH
                  </div>
                </div>
                <div className={styles['client-page-mobile__boxes']}>
                  <div className={styles['client-page-mobile__logo']}>
                    <img src={pipeflareLogo.src} alt="Pipeflare" />
                  </div>
                  <div className={styles['client-page-mobile__text']}>
                    PLAY-TO-EARN GAMING PLATFORM SUPPORTING 60,000 DAILY PLAYERS
                    AND 7 CUSTOM GAMES
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['client-page-mobile__group']}>
            <div className={styles['client-page-mobile__bg--group']}>
              <div className={styles['client-page-mobile__bg']}>
                <Image src={orangeBlock.src} alt="bg_about" layout="fill" />
              </div>
              <span className={styles['client-page-mobile__vision--our']}>
                Our
              </span>
              <span className={styles['client-page-mobile__vision--vision']}>
                CLIENTS
              </span>
              <div className={styles['client-page-mobile__content--section']}>
                <div
                  className={
                    styles['client-page-mobile__content--section-title']
                  }
                >
                  “I WANTED TO MENTION HOW FUN, MOTIVATING, DE-STRESSING AND
                  INVIGORATING IT IS TO WORK WITH LAYER III, EVERYTHING WENT
                  VERY SMOOTHLY.”
                </div>
                <div
                  className={
                    styles['client-page-mobile__content--section-name']
                  }
                >
                  JASON KOVAR, COO OF GAMESTATION
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ClientsMobile
