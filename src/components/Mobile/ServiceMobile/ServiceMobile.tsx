import type { NextPage } from 'next'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import cx from 'classnames'

import Layout from '@/layouts/index'
import { NavLink } from '@/components/ui/NavLink'

import greenBlock from '@/images/green-bg.png'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Keyboard, Mousewheel } from 'swiper/core'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import styles from '@/components/Mobile/ServiceMobile/ServiceMobile.module.scss'
import { useWindowSize } from '@/app/hooks/useWindowSize'

SwiperCore.use([Keyboard, Mousewheel])
interface PageProps {
  loaded: boolean
}

const ServiceMobile: NextPage<PageProps> = ({ loaded }) => {
  const { height } = useWindowSize()
  return (
    <div
      className={cx(styles['services-page-mobile'], {
        [styles[`is-loaded`]]: loaded,
      })}
    >
      <Swiper
        slidesPerView={1}
        mousewheel={true}
        keyboard={{ enabled: true, onlyInViewport: false }}
        direction="vertical"
        height={height ? height - 40 : 700}
      >
        <SwiperSlide>
          <div className={styles['services-page-mobile__group']}>
            <div className={styles['services-page-mobile__bg--group']}>
              <div className={styles['services-page-mobile__bg']}>
                <Image src={greenBlock.src} alt="bg_services" layout="fill" />
              </div>
              <span className={styles['services-page-mobile__vision--our']}>
                Our
              </span>
              <span className={styles['services-page-mobile__vision--vision']}>
              SERVICES
              </span>
              <div className={styles['services-page-mobile__content--section']}>
                <div className={styles['benefits-section']}>
                  <div className={styles['benefits-section__inner']}>
                    <div className={styles['benefits-section__row']}>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__title']}>
                          NFT MARKETPLACES
                        </div>
                      </div>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__text']}>
                          DEPLOY YOUR OWN MARKETPLACE IN UNDER 30 DAYS AND
                          ACCEPT CREDIT CARD PAYMENTS
                        </div>
                      </div>
                    </div>

                    <div className={styles['benefits-section__row']}>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__title']}>
                          LOYALTY PROGRAMS
                        </div>
                      </div>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__text']}>
                          DIGITIZE YOUR REWARDS PROGRAM TO INCREASE ENGAGEMENT
                          AND RETENTION
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles['services-page-mobile__group']}>
            <div className={styles['services-page-mobile__bg--group']}>
              <div className={styles['services-page-mobile__bg']}>
                <Image src={greenBlock.src} alt="bg_services" layout="fill" />
              </div>

              <span className={styles['services-page-mobile__vision--our']}>
                Our
              </span>
              <span className={styles['services-page-mobile__vision--vision']}>
                SERVICES
              </span>


                <div className={styles['benefits-section']}>
                  <div className={styles['benefits-section__inner']}>
                    <div className={styles['benefits-section__row']}>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__title']}>
                          NFT MARKETPLACES
                        </div>
                      </div>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__text']}>
                          DEPLOY YOUR OWN MARKETPLACE IN UNDER 30 DAYS AND
                          ACCEPT CREDIT CARD PAYMENTS
                        </div>
                      </div>
                    </div>

                    <div className={styles['benefits-section__row']}>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__title']}>
                          LOYALTY PROGRAMS
                        </div>
                      </div>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__text']}>
                          DIGITIZE YOUR REWARDS PROGRAM TO INCREASE ENGAGEMENT
                          AND RETENTION
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['services-page-mobile__group']}>
            <div className={styles['services-page-mobile__bg--group']}>
              <div className={styles['services-page-mobile__bg']}>
                <Image src={greenBlock.src} alt="bg_services" layout="fill" />
              </div>
              <span className={styles['services-page-mobile__vision--our']}>
                    Our
                  </span>
                  <span
                    className={styles['services-page-mobile__vision--vision']}
                  >
                    SERVICES
                  </span>
              <div className={styles['services-page-mobile__inner']}>
                {/* <div className={styles['services-page-mobile__next']}>
              <svg
                width="26"
                height="30"
                viewBox="0 0 26 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.28 15.28L25.76 17.76L13.56 29.6H13.16L0.96 17.76L3.4 15.28L11.52 23.36V-1.90735e-06H15.16V23.4L23.28 15.28Z"
                  fill="#272822"
                />
              </svg>
            </div> */}


                 


                <div className={styles['benefits-section']}>
                  <div className={styles['benefits-section__inner']}>
                    <div className={styles['benefits-section__row']}>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__title']}>
                          TRADING PLATFORMS
                        </div>
                      </div>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__text']}>
                          CREATE A TRADING PLATFORMS FOR USERS TO BUY, SELL, AND
                          HOLD DIGITIZED GOODS
                        </div>
                      </div>
                    </div>

                    <div className={styles['benefits-section__row']}>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__title']}>
                          PLAY-TO-EARN GAMES
                        </div>
                      </div>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__text']}>
                          HARNESS MASSIVE USER ATTENTION THROUGH FUN P2E GAMES
                          BUILT IN UNITY
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['services-page-mobile__group']}>
            <div className={styles['services-page-mobile__bg--group']}>
              <div className={styles['services-page-mobile__bg']}>
                <Image src={greenBlock.src} alt="bg_services" layout="fill" />
              </div>
              <span className={styles['services-page-mobile__vision--our']}>
                    Our
                  </span>
                  <span
                    className={styles['services-page-mobile__vision--vision']}
                  >
                    SERVICES
                  </span>
              <div className={styles['services-page-mobile__inner']}>
                {/* <div className={styles['services-page-mobile__next']}>
              <svg
                width="26"
                height="30"
                viewBox="0 0 26 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.28 15.28L25.76 17.76L13.56 29.6H13.16L0.96 17.76L3.4 15.28L11.52 23.36V-1.90735e-06H15.16V23.4L23.28 15.28Z"
                  fill="#272822"
                />
              </svg>
            </div> */}

               

                <div className={styles['benefits-section']}>
                  <div className={styles['benefits-section__inner']}>
                    <div className={styles['benefits-section__row']}>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__title']}>
                          METAVERSE BUILDS
                        </div>
                      </div>
                      <div className={styles['benefits-section__col']}>
                        <div className={styles['benefits-section__text']}>
                          CREATE METAVERSE EXPERIENCES THAT ADD TO YOUR BRAND'S
                          VALUE PROPOSITION
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>


        <div className={styles['services-page-mobile__group']}>
            <div className={styles['services-page-mobile__bg--group']}>
              <div className={styles['services-page-mobile__bg']}>
                <Image src={greenBlock.src} alt="bg_services" layout="fill" />
              </div>
              <span className={styles['services-page-mobile__vision--our']}>
                Our
              </span>
              <span className={styles['services-page-mobile__vision--vision']}>
                Process
              </span>
              <div className={styles['services-page-mobile__content--section']}>
              <section
                    className={styles['services-page-mobile__section-wrapper']}
                  >
                    <div className={styles['process-section-mobile']}>
                      <div className={styles['process-section-mobile__inner']}>
                        <div
                          className={styles['process-section-mobile__block']}
                        >
                          <div
                            className={styles['process-section-mobile__note']}
                          >
                            STUDY <span>I</span>
                          </div>
                          <div
                            className={styles['process-section-mobile__title']}
                          >
                            WE STUDY YOUR UNIQUE BUSINESS REQUIREMENTS AND BUILD
                            SOFTWARE TO FIT YOUR BUSINESS GOAL
                            <span>
                              <svg
                                width="3"
                                height="13"
                                viewBox="0 0 3 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.60398 12.0551H1.11399C1.13812 11.1749 0.965592 10.3003 0.608985 9.49514C-0.202914 7.50406 -0.202914 5.27422 0.608985 3.28314C0.965592 2.47798 1.13812 1.60341 1.11399 0.723145H2.60398C2.62658 1.79021 2.41885 2.84961 1.99497 3.82914C1.32113 5.46964 1.32113 7.30964 1.99497 8.95014C2.41871 9.92936 2.62643 10.9884 2.60398 12.0551Z"
                                  fill="#272822"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div
                          className={styles['process-section-mobile__block']}
                        >
                          <div
                            className={styles['process-section-mobile__note']}
                          >
                            DEPLOY <span>II</span>
                          </div>
                          <div
                            className={styles['process-section-mobile__title']}
                          >
                            WE TEST AND DEPLOY YOUR SOFTWARE
                            <span>
                              <svg
                                width="7"
                                height="13"
                                viewBox="0 0 7 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.25413 12.0737H4.76112C4.78525 11.1917 4.61237 10.3155 4.25511 9.50873C3.44166 7.5138 3.44166 5.27965 4.25511 3.28472C4.61237 2.47797 4.78525 1.60171 4.76112 0.719727H6.25413C6.27681 1.78884 6.06873 2.85029 5.64412 3.83173C4.96883 5.4754 4.96883 7.31905 5.64412 8.96272C6.06859 9.94386 6.27667 11.0049 6.25413 12.0737Z"
                                  fill="#272822"
                                />
                                <path
                                  d="M2.60908 12.0737H1.11609C1.14025 11.1917 0.967386 10.3155 0.610092 9.50873C-0.203364 7.5138 -0.203364 5.27965 0.610092 3.28472C0.967386 2.47798 1.14025 1.60171 1.11609 0.719727H2.60908C2.63176 1.78884 2.4237 2.85029 1.99908 3.83173C1.3238 5.4754 1.3238 7.31905 1.99908 8.96272C2.42356 9.94386 2.63162 11.0049 2.60908 12.0737Z"
                                  fill="#272822"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div
                          className={styles['process-section-mobile__block']}
                        >
                          <div
                            className={styles['process-section-mobile__note']}
                          >
                            MANAGE <span>III</span>
                          </div>
                          <div
                            className={styles['process-section-mobile__title']}
                          >
                            WE MANAGE THE DAY-TO-DAY BACKEND OPERATIONS
                            <span>
                              <svg
                                width="10"
                                height="13"
                                viewBox="0 0 10 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.25413 12.0737H4.76112C4.78525 11.1917 4.61237 10.3155 4.25511 9.50873C3.44166 7.5138 3.44166 5.27965 4.25511 3.28472C4.61237 2.47797 4.78525 1.60171 4.76112 0.719727H6.25413C6.27681 1.78884 6.06873 2.85029 5.64412 3.83173C4.96883 5.4754 4.96883 7.31905 5.64412 8.96272C6.06859 9.94386 6.27667 11.0049 6.25413 12.0737Z"
                                  fill="#272822"
                                />
                                <path
                                  d="M9.89816 12.0737H8.40512C8.42927 11.1917 8.25643 10.3155 7.89914 9.50873C7.08579 7.51378 7.08579 5.27967 7.89914 3.28472C8.25643 2.47798 8.42927 1.60171 8.40512 0.719727H9.89816C9.9208 1.78884 9.7127 2.85028 9.28811 3.83173C8.61272 5.47538 8.61272 7.31907 9.28811 8.96272C9.71256 9.94387 9.92066 11.0049 9.89816 12.0737Z"
                                  fill="#272822"
                                />
                                <path
                                  d="M2.60908 12.0737H1.11609C1.14025 11.1917 0.967386 10.3155 0.610092 9.50873C-0.203364 7.5138 -0.203364 5.27965 0.610092 3.28472C0.967386 2.47798 1.14025 1.60171 1.11609 0.719727H2.60908C2.63176 1.78884 2.4237 2.85029 1.99908 3.83173C1.3238 5.4754 1.3238 7.31905 1.99908 8.96272C2.42356 9.94386 2.63162 11.0049 2.60908 12.0737Z"
                                  fill="#272822"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
              </div>
            </div>
          </div>


          {/* <div className={styles['services-page-mobile__group']}>
            <div className={styles['services-page-mobile__bg--group']}>
              <div className={styles['services-page-mobile__inner']}>
                <div className={styles['services-page-mobile__main-title']}>
                  <span className={styles['services-page-mobile__vision--our']}>
                    Our
                  </span>
                  <span
                    className={styles['services-page-mobile__vision--vision']}
                  >
                    Process
                  </span>
                </div>

                <div
                  className={styles['services-page-mobile__content--section']}
                >
                  <section
                    className={styles['services-page-mobile__section-wrapper']}
                  >
                    <div className={styles['process-section-mobile']}>
                      <div className={styles['process-section-mobile__inner']}>
                        <div
                          className={styles['process-section-mobile__block']}
                        >
                          <div
                            className={styles['process-section-mobile__note']}
                          >
                            STUDY <span>I</span>
                          </div>
                          <div
                            className={styles['process-section-mobile__title']}
                          >
                            WE STUDY YOUR UNIQUE BUSINESS REQUIREMENTS AND BUILD
                            SOFTWARE TO FIT YOUR BUSINESS GOAL
                            <span>
                              <svg
                                width="3"
                                height="13"
                                viewBox="0 0 3 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.60398 12.0551H1.11399C1.13812 11.1749 0.965592 10.3003 0.608985 9.49514C-0.202914 7.50406 -0.202914 5.27422 0.608985 3.28314C0.965592 2.47798 1.13812 1.60341 1.11399 0.723145H2.60398C2.62658 1.79021 2.41885 2.84961 1.99497 3.82914C1.32113 5.46964 1.32113 7.30964 1.99497 8.95014C2.41871 9.92936 2.62643 10.9884 2.60398 12.0551Z"
                                  fill="#272822"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div
                          className={styles['process-section-mobile__block']}
                        >
                          <div
                            className={styles['process-section-mobile__note']}
                          >
                            DEPLOY <span>II</span>
                          </div>
                          <div
                            className={styles['process-section-mobile__title']}
                          >
                            WE TEST AND DEPLOY YOUR SOFTWARE
                            <span>
                              <svg
                                width="7"
                                height="13"
                                viewBox="0 0 7 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.25413 12.0737H4.76112C4.78525 11.1917 4.61237 10.3155 4.25511 9.50873C3.44166 7.5138 3.44166 5.27965 4.25511 3.28472C4.61237 2.47797 4.78525 1.60171 4.76112 0.719727H6.25413C6.27681 1.78884 6.06873 2.85029 5.64412 3.83173C4.96883 5.4754 4.96883 7.31905 5.64412 8.96272C6.06859 9.94386 6.27667 11.0049 6.25413 12.0737Z"
                                  fill="#272822"
                                />
                                <path
                                  d="M2.60908 12.0737H1.11609C1.14025 11.1917 0.967386 10.3155 0.610092 9.50873C-0.203364 7.5138 -0.203364 5.27965 0.610092 3.28472C0.967386 2.47798 1.14025 1.60171 1.11609 0.719727H2.60908C2.63176 1.78884 2.4237 2.85029 1.99908 3.83173C1.3238 5.4754 1.3238 7.31905 1.99908 8.96272C2.42356 9.94386 2.63162 11.0049 2.60908 12.0737Z"
                                  fill="#272822"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div
                          className={styles['process-section-mobile__block']}
                        >
                          <div
                            className={styles['process-section-mobile__note']}
                          >
                            MANAGE <span>III</span>
                          </div>
                          <div
                            className={styles['process-section-mobile__title']}
                          >
                            WE MANAGE THE DAY-TO-DAY BACKEND OPERATIONS
                            <span>
                              <svg
                                width="10"
                                height="13"
                                viewBox="0 0 10 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.25413 12.0737H4.76112C4.78525 11.1917 4.61237 10.3155 4.25511 9.50873C3.44166 7.5138 3.44166 5.27965 4.25511 3.28472C4.61237 2.47797 4.78525 1.60171 4.76112 0.719727H6.25413C6.27681 1.78884 6.06873 2.85029 5.64412 3.83173C4.96883 5.4754 4.96883 7.31905 5.64412 8.96272C6.06859 9.94386 6.27667 11.0049 6.25413 12.0737Z"
                                  fill="#272822"
                                />
                                <path
                                  d="M9.89816 12.0737H8.40512C8.42927 11.1917 8.25643 10.3155 7.89914 9.50873C7.08579 7.51378 7.08579 5.27967 7.89914 3.28472C8.25643 2.47798 8.42927 1.60171 8.40512 0.719727H9.89816C9.9208 1.78884 9.7127 2.85028 9.28811 3.83173C8.61272 5.47538 8.61272 7.31907 9.28811 8.96272C9.71256 9.94387 9.92066 11.0049 9.89816 12.0737Z"
                                  fill="#272822"
                                />
                                <path
                                  d="M2.60908 12.0737H1.11609C1.14025 11.1917 0.967386 10.3155 0.610092 9.50873C-0.203364 7.5138 -0.203364 5.27965 0.610092 3.28472C0.967386 2.47798 1.14025 1.60171 1.11609 0.719727H2.60908C2.63176 1.78884 2.4237 2.85029 1.99908 3.83173C1.3238 5.4754 1.3238 7.31905 1.99908 8.96272C2.42356 9.94386 2.63162 11.0049 2.60908 12.0737Z"
                                  fill="#272822"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div> */}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ServiceMobile
