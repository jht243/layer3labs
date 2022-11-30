import type { NextPage } from 'next'

import React, { useEffect } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import purpleBlock from '@/images/purple-bar-mobile.png'
import horizenLogo from '@/images/horizen.png'
import dcgLogo from '@/images/dcg.png'
import polygonLogo from '@/images/polygon.svg'
import horizen2Logo from '@/images/horizen2.png'
import polygon2Logo from '@/images/polygon2.png'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Keyboard, Mousewheel } from 'swiper/core'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import styles from '@/components/Mobile/AboutMobile/AboutMobile.module.scss'
import { useWindowSize } from '@/app/hooks/useWindowSize'

SwiperCore.use([Keyboard, Mousewheel])
interface PageProps {
  loaded: boolean
}

type IAboutMobileProps = {}

const AboutMobile: NextPage<PageProps> = ({ loaded }) => {
  const router = useRouter()
  const { height } = useWindowSize()

  return (
    <div
      className={cx(styles['about-page-mobile'], {
        [styles[`is-loaded`]]: loaded,
      })}
    >
      <Swiper
        slidesPerView={1}
        mousewheel={true}
        keyboard={{ enabled: true, onlyInViewport: false }}
        direction="vertical"
        height={height ? height - 119 : 700}
      >
        <SwiperSlide>
          <div className={styles['about-page-mobile__group']}>
            <div className={styles['about-page-mobile__bg--group']}>
              <div className={styles['about-page-mobile__bg']}>
                <Image src={purpleBlock.src} alt="bg_about" layout="fill" />
              </div>
              <span className={styles['about-page-mobile__vision--our']}>
                Our
              </span>
              <span className={styles['about-page-mobile__vision--vision']}>
                vision
              </span>
              <div className={styles['about-page-mobile__content--section']}>
                <section
                  className={styles['about-page-mobile__section-wrapper']}
                >
                  <div className={styles['about-page-mobile__title']}>
                    <h2 className={styles['about-page-mobile__heading']}>
                      EMPOWERING PROGRESSIVE BRANDS TO BRIDGE THE GAP INTO WEB3
                    </h2>
                    <h2 className={styles['about-page-mobile__heading']}>
                      WE ARE WORLD-LEADING DEVELOPERS
                    </h2>
                    <h2 className={styles['about-page-mobile__heading']}>
                      BACKED BY THE LARGEST INVESTORS IN CRYPTO
                    </h2>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['about-page-mobile__group']}>
            <div className={styles['about-page-mobile__bg--group']}>
              <div
                className={cx(
                  styles['about-page-mobile__bg'],
                  styles['about-page-mobile__bg--rotate']
                )}
              >
                <Image src={purpleBlock.src} alt="bg_about" layout="fill" />
              </div>
              <span className={styles['about-page-mobile__vision--our']}>
                Our
              </span>
              <span className={styles['about-page-mobile__vision--vision']}>
                TEAM
              </span>
              <div className={styles['about-page-mobile__content--section']}>
                <div className={styles['about-page-mobile__user__block']}>
                  <h2 className={styles['about-page-mobile__user__title']}>
                    JONATHAN TEPLITSKY
                    <div
                      className={styles['about-page-mobile__user__social']}
                      onClick={() => {
                        router.push(
                          'https://www.linkedin.com/in/jonathanteplitsky/'
                        )
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        color="#fff000"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                  </h2>
                  <div className={styles['about-page-mobile__user__subtitle']}>
                    CEO & TEAM LEAD
                  </div>
                  <div
                    className={styles['about-page-mobile__user__description']}
                  >
                    JONATHAN HOLDS AN MBA FROM HARVARD BUSINESS SCHOOL AND HAS
                    10+ YEARS OF MARKETING EXPERIENCE.
                  </div>
                </div>
                <div className={styles['about-page-mobile__user__block']}>
                  <h2 className={styles['about-page-mobile__user__title']}>
                    MAY LUNAWONG
                    <div
                      className={styles['about-page-mobile__user__social']}
                      onClick={() => {
                        router.push(
                          'https://www.linkedin.com/in/nutchara-lunawong-954183190/'
                        )
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        color="#fff000"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                  </h2>
                  <div className={styles['about-page-mobile__user__subtitle']}>
                    PRODUCT MANAGER
                  </div>
                  <div
                    className={styles['about-page-mobile__user__description']}
                  >
                    MAY IS A PRODUCT MANAGER WITH A BACKGROUND IN PRODUCT
                    MANAGEMENT OF TELECOMMUNICATION TECHNOLOGY FOR OVER 7+
                    YEARS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['about-page-mobile__group']}>
            <div className={styles['about-page-mobile__bg--group']}>
              <div
                className={cx(
                  styles['about-page-mobile__bg'],
                  styles['about-page-mobile__bg--rotate']
                )}
              >
                <Image src={purpleBlock.src} alt="bg_about" layout="fill" />
              </div>
              <span className={styles['about-page-mobile__vision--our']}>
                Our
              </span>
              <span className={styles['about-page-mobile__vision--vision']}>
                TEAM
              </span>
              <div className={styles['about-page-mobile__content--section']}>
                <div className={styles['about-page-mobile__user__block']}>
                  <h2 className={styles['about-page-mobile__user__title']}>
                    ROBERT VIGLIONE
                    <div
                      className={styles['about-page-mobile__user__social']}
                      onClick={() => {
                        router.push(
                          'https://www.linkedin.com/in/robert-viglione-2780634/'
                        )
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        color="#fff000"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                  </h2>
                  <div className={styles['about-page-mobile__user__subtitle']}>
                    COMPANY ADVISOR
                  </div>
                  <div
                    className={styles['about-page-mobile__user__description']}
                  >
                    CEO AND CO-FOUNDER OF HORIZEN AND HORIZEN LABS. FORMER US
                    AIR FORCE PHYSICIST AND MILITARY INTELLIGENCE. BA IN
                    PHYSICS, MBA AND PHD IN FINANCE.
                  </div>
                </div>
                <div className={styles['about-page-mobile__user__block']}>
                  <h2 className={styles['about-page-mobile__user__title']}>
                    LIAT AARONSON
                    <div
                      className={styles['about-page-mobile__user__social']}
                      onClick={() => {
                        router.push('https://www.linkedin.com/in/liataaronson/')
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        color="#fff000"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                  </h2>
                  <div className={styles['about-page-mobile__user__subtitle']}>
                    COMPANY ADVISOR
                  </div>
                  <div
                    className={styles['about-page-mobile__user__description']}
                  >
                    COO AT HORIZEN LABS, HIGH-GROWTH BLOCKCHAIN STARTUP.
                    INVESTMENT PARTNER IN VC FUND AND FORMER M&A LAWYER RAN
                    ACADEMIC ACCELERATOR FOR SAM ZELL AT IDC HERZLIYA.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['about-page-mobile__group']}>
            <div className={styles['about-page-mobile__bg--group']}>
              <div
                className={cx(
                  styles['about-page-mobile__bg'],
                  styles['about-page-mobile__bg--rotate']
                )}
              >
                <Image src={purpleBlock.src} alt="bg_about" layout="fill" />
              </div>
              <span className={styles['about-page-mobile__vision--our']}>
                Our
              </span>
              <span className={styles['about-page-mobile__vision--vision']}>
                TEAM
              </span>
              <div className={styles['about-page-mobile__content--section']}>
                <div className={styles['about-page-mobile__user__block']}>
                  <h2 className={styles['about-page-mobile__user__title']}>
                    DEAN STEINBECK
                    <div
                      className={styles['about-page-mobile__user__social']}
                      onClick={() => {
                        router.push(
                          'https://www.linkedin.com/in/dean-steinbeck/'
                        )
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        color="#fff000"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                  </h2>
                  <div className={styles['about-page-mobile__user__subtitle']}>
                    COMPANY ADVISOR
                  </div>
                  <div
                    className={styles['about-page-mobile__user__description']}
                  >
                    PRESIDENT AND GENERAL COUNSEL OF HORIZEN LABS. 15 YEARS
                    REPRESENTING VC-BACKED SOFTWARE DEVELOPMENT COMPANIES WITH A
                    FOCUS ON DATA.
                  </div>
                </div>
                <div className={styles['about-page-mobile__user__block']}>
                  <h2 className={styles['about-page-mobile__user__title']}>
                    ROSARIO PABST
                    <div
                      className={styles['about-page-mobile__user__social']}
                      onClick={() => {
                        router.push(
                          'https://www.linkedin.com/in/rosario-pabst/'
                        )
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        color="#fff000"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                  </h2>
                  <div className={styles['about-page-mobile__user__subtitle']}>
                    COMPANY ADVISOR
                  </div>
                  <div
                    className={styles['about-page-mobile__user__description']}
                  >
                    SENIOR EXECUTIVE AT HORIZEN. OVER 10 YEARS IN SOFTWARE
                    PROGRAM MANAGEMENT. BS IN PUBLIC ADMINISTRATION AND MS IN
                    SYSTEMS ENGINEERING.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['about-page-mobile__group']}>
            <div className={styles['about-page-mobile__bg--group']}>
              <div className={styles['about-page-mobile__bg']}>
                <Image src={purpleBlock.src} alt="bg_about" layout="fill" />
              </div>
              <span className={styles['about-page-mobile__vision--our']}>
                Our
              </span>
              <span className={styles['about-page-mobile__vision--vision']}>
                vision
              </span>
              <div className={styles['about-page-mobile__content--section']}>
                <div
                  className={cx(styles['about-page-mobile__partners-images'])}
                >
                  <div
                    className={cx(
                      styles['about-page-mobile__partners-images-div']
                    )}
                  >
                    <Image
                      src={horizenLogo.src}
                      alt="Horizen Labs"
                      objectFit="contain"
                      width={135}
                      height={53}
                    />
                  </div>
                  <div
                    className={cx(
                      styles['about-page-mobile__partners-images-div']
                    )}
                  >
                    <Image
                      src={dcgLogo.src}
                      alt="Digital Currency Group"
                      width={89}
                      height={62}
                      objectFit="contain"
                    />
                  </div>
                  <div
                    className={cx(
                      styles['about-page-mobile__partners-images-div']
                    )}
                  >
                    <Image
                      src={polygonLogo.src}
                      alt="Polygon"
                      width={113}
                      height={24}
                      objectFit="contain"
                    />
                  </div>
                  <div
                    className={cx(
                      styles['about-page-mobile__partners-images-div']
                    )}
                  >
                    <Image
                      src={horizen2Logo.src}
                      alt="Horizen"
                      width={101}
                      height={72}
                      objectFit="contain"
                    />
                  </div>
                  <div
                    className={cx(
                      styles['about-page-mobile__partners-images-div']
                    )}
                  >
                    <Image
                      src={polygon2Logo.src}
                      alt="Polygon Studios"
                      width={120}
                      height={50}
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AboutMobile
