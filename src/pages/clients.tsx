import type { NextPage } from 'next'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import cx from 'classnames'

import Layout from '@/layouts/index'
import { NavLink } from '@/components/ui/NavLink'

import styles from '@/styles/pages/Clients.module.scss'

import orangeBlock from '@/images/orange-bg.svg'

import bowleroLogo from '@/images/bowlero.png'
import styrLogo from '@/images/styr.png'
import GSLogo from '@/images/game-station.png'
import JGILogo from '@/images/JGI.png'
import etherealLogo from '@/images/ethereal.png'
import pipeflareLogo from '@/images/pipeflare.png'

interface PageProps {
  loaded: boolean
}

const Clients: NextPage<PageProps> = ({ loaded }) => {
  const [currentSection, setCurrentSection] = useState('initial')
  const bgRef = useRef(null);
  const nextLinkRef = useRef(null);

  const clientsTextRef = useRef(null);
  const ourClientsTextRef = useRef(null);

  const clientsSectionRef = useRef(null);

  const clientsLogoRef = useRef<HTMLDivElement[]>([]);
  const clientsSectionTitleRef = useRef<HTMLDivElement[]>([]);

  const testimonTitleMainRef = useRef(null);
  const testimonTitle1Ref = useRef(null);
  const testimonTitle2Ref = useRef(null);
  const processSectionRef = useRef(null);

  const testimonBlockTitleRef = useRef<HTMLDivElement[]>([]);
  const testimonBlockSubTitleRef = useRef<HTMLDivElement[]>([]);


  useEffect(() => {
    if (!clientsTextRef || !loaded) return

    const tl = gsap.timeline()

    tl.fromTo(
        ourClientsTextRef.current,
        {
          left: '50%',
          top: '50%',
          xPercent: -200,
          yPercent: -50,
        },
        {
          left: '10%',
          top: '10%',
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
          delay: 1,
        }
    )
    .fromTo(
        clientsTextRef.current,
        {
          left: '50%',
          top: '50%',
          xPercent: -20,
          yPercent: -50,
        },
        {
          left: '80%',
          top: '90%',
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
        }, '<'
    )
    .fromTo(
        bgRef.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 0.75,
        }, '<+=0.5'
    )
    .fromTo(
        clientsSectionRef.current,
        {
          pointerEvents: 'none',
          zIndex: 1,
        },
        {
          pointerEvents: 'auto',
          zIndex: 30,
        }, '<'
    )
    .fromTo(
        clientsLogoRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.2
        }, '<+=1'
    )
    .fromTo(
        clientsSectionTitleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.2,
        }, '<+=0.05'
    )
    .fromTo(
        clientsSectionRef.current,
        {
          overflowY: 'none',
        },
        {
          overflowY: 'auto',
        }, '<'
    )
    .to(
        nextLinkRef.current,
        {
          y: 0,
          opacity: 1,
          zIndex: 33,
          duration: 0.2,
        }, '<'
    )
    return () => {
      tl.kill()
    }
  }, [clientsTextRef, loaded])


  const onNextSection = () => {
    if (currentSection === 'initial') {
      const tl = gsap.timeline()

      tl
      .to(
          nextLinkRef.current,
          {
            pointerEvents: 'none',
            opacity: 0,
            duration: 0.5,
          }
      )
      .fromTo(
          ourClientsTextRef.current,
          {
            y: 0,
            opacity: 1,
          },
          {
            y: 150,
            opacity: 0,
            duration: 0.2,
          }, '<'
      )
      .fromTo(
          clientsTextRef.current,
          {
            y: 0,
            opacity: 1,
          },
          {
            y: 150,
            opacity: 0,
            duration: 0.2,
          }, '<'
      )
      .fromTo(
          clientsSectionRef.current,
          {
            y: 0,
            opacity: 1,
            overflowY: 'auto',
            pointerEvents: 'auto',
            zIndex: 30,
          },
          {
            y: -400,
            opacity: 0,
            overflowY: 'none',
            pointerEvents: 'none',
            zIndex: 1,
          }, '<'
      )
      .fromTo(
          testimonTitleMainRef.current,
          {
            // y: 200,
            opacity: 0,
            zIndex: -1,
          },
          {
            // y: 0,
            opacity: 1,
            zIndex: 1,
            duration: 0.5,
          }, '<+=0.5'
      )
      .fromTo(
          testimonTitle1Ref.current,
          {
            left: '50%',
            top: '50%',
            xPercent: -250,
            yPercent: -50,
          },
          {
            left: '10%',
            top: '10%',
            xPercent: -50,
            yPercent: -50,
            duration: 2.5,
            delay: 0.2,
          }
      )
      .fromTo(
          testimonTitle2Ref.current,
          {
            left: '55%',
            top: '50%',
            xPercent: -20,
            yPercent: -50,
          },
          {
            left: '80%',
            top: '90%',
            xPercent: -50,
            yPercent: -50,
            duration: 2.5,
          }, '<'
      )

      .fromTo(
          bgRef.current,
          {
            rotate: 0,
          },
          {
            rotate: -48,
            duration: 1,
          }, '<'
      )
      .fromTo(
          processSectionRef.current,
          {
            pointerEvents: 'none',
            zIndex: 1,
          },
          {
            pointerEvents: 'auto',
            zIndex: 30,
          }, '<'
      )
      .fromTo(
          testimonBlockSubTitleRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.2
          }, '<+=1'
      )
      .fromTo(
          testimonBlockTitleRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.2,
          }, '<+=0.05'
      )
      .fromTo(
          processSectionRef.current,
          {
            overflowY: 'none',
          },
          {
            overflowY: 'auto',
          }, '<'
      )
      .to(
          nextLinkRef.current,
          {
            zIndex: -1,
            opacity: 0,
            duration: 0.5,
          }, '<'
      )
    }
  }

  return (
      <Layout>
        <div
            className={cx(styles['clients-page'], { [styles[`is-loaded`]]: loaded })}
        >
          <div
              className={styles['clients-page__bg']}
              style={{ backgroundImage: `url(${orangeBlock.src})` }}
              ref={bgRef}
          />
          <div className={styles['clients-page__inner']}>
            <div className={styles['clients-page__back']}>
              <NavLink href="/">
                <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.22 22.78L12.74 25.26L0.899999 13.06L0.899999 12.66L12.74 0.459999L15.22 2.9L7.14 11.02L30.5 11.02L30.5 14.66L7.1 14.66L15.22 22.78Z"
                      fill="#272822"
                  />
                </svg>
              </NavLink>
            </div>

            <div className={styles['clients-page__next']} onClick={onNextSection} ref={nextLinkRef}>
              <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M23.28 15.28L25.76 17.76L13.56 29.6H13.16L0.96 17.76L3.4 15.28L11.52 23.36V-1.90735e-06H15.16V23.4L23.28 15.28Z"
                    fill="#272822"
                />
              </svg>
            </div>

            <div className={styles['clients-page__main-title']}>
              <span ref={ourClientsTextRef}>Our</span>
              <span ref={clientsTextRef}>CLIENTS</span>
            </div>

            <div className={styles['clients-section']} ref={clientsSectionRef}>
              <div className={styles['clients-section__inner']}>
                <div className={styles['clients-section__boxes']}>

                  <div className={styles['clients-section__box']}>
                    <div
                        className={styles['clients-section__logo']}
                        ref={(ref) => {
                          if (ref) clientsLogoRef.current[0] = ref;
                        }}
                    >
                      <img src={bowleroLogo.src} alt="Bowlero Corporation" />
                    </div>
                    <div
                        className={styles['clients-section__text']}
                        ref={(ref) => {
                          if (ref) clientsSectionTitleRef.current[0] = ref;
                        }}
                    >
                      NFT MARKETPLACE AND MINTING PLATFORM FOR LEAGUE BOWLER CERTIFICATION PROGRAM
                    </div>
                  </div>

                  <div className={styles['clients-section__box']}>
                    <div
                        className={styles['clients-section__logo']}
                        ref={(ref) => {
                          if (ref) clientsLogoRef.current[1] = ref;
                        }}
                    >
                      <img src={styrLogo.src} alt="STYR" />
                    </div>
                    <div
                        className={styles['clients-section__text']}
                        ref={(ref) => {
                          if (ref) clientsSectionTitleRef.current[1] = ref;
                        }}
                    >
                      HIGH FREQUENCY TRADING SNEAKER MARKETPLACE WITH ASSET BACKED NFTS
                    </div>
                  </div>

                  <div className={styles['clients-section__box']}>
                    <div
                        className={styles['clients-section__logo']}
                        ref={(ref) => {
                          if (ref) clientsLogoRef.current[2] = ref;
                        }}
                    >
                      <img src={GSLogo.src} alt="Game Station" />
                    </div>
                    <div
                        className={styles['clients-section__text']}
                        ref={(ref) => {
                          if (ref) clientsSectionTitleRef.current[2] = ref;
                        }}
                    >
                      CRYPTO MICRO-WALLET LEAD GENERATION PLATFORM WITH GAMING AND AIRDROPS
                    </div>
                  </div>

                  <div className={styles['clients-section__box']}>
                    <div
                        className={styles['clients-section__logo']}
                        ref={(ref) => {
                          if (ref) clientsLogoRef.current[3] = ref;
                        }}
                    >
                      <img src={JGILogo.src} alt="Jane Goodall Institute" />
                    </div>
                    <div
                        className={styles['clients-section__text']}
                        ref={(ref) => {
                          if (ref) clientsSectionTitleRef.current[3] = ref;
                        }}
                    >
                      MEMBERSHIP, CHARITY, AND NFT TICKETING PLATFORM FOR NATIONAL SPORTS ORGANIZATIONS
                    </div>
                  </div>

                  <div className={styles['clients-section__box']}>
                    <div
                        className={styles['clients-section__logo']}
                        ref={(ref) => {
                          if (ref) clientsLogoRef.current[4] = ref;
                        }}
                    >
                      <img src={etherealLogo.src} alt="Ethereal Collective" />
                    </div>
                    <div
                        className={styles['clients-section__text']}
                        ref={(ref) => {
                          if (ref) clientsSectionTitleRef.current[4] = ref;
                        }}
                    >
                      WEB3.0 STRATEGY AND IMPLEMENTATION TO PRESERVE DR. GOODALLS LEGACY AND RESEARCH
                    </div>
                  </div>

                  <div className={styles['clients-section__box']}>
                    <div
                        className={styles['clients-section__logo']}
                        ref={(ref) => {
                          if (ref) clientsLogoRef.current[5] = ref;
                        }}
                    >
                      <img src={pipeflareLogo.src} alt="Pipeflare" />
                    </div>
                    <div
                        className={styles['clients-section__text']}
                        ref={(ref) => {
                          if (ref) clientsSectionTitleRef.current[5] = ref;
                        }}
                    >
                      PLAY-TO-EARN GAMING PLATFORM SUPPORTING 60,000 DAILY PLAYERS AND 7 CUSTOM GAMES
                    </div>
                  </div>


                </div>
              </div>
            </div>


            <div className={styles['clients-page__testimonials-title']} ref={testimonTitleMainRef}>
              <span ref={testimonTitle1Ref}>Our</span>
              <span ref={testimonTitle2Ref}>COSTUMER</span>
            </div>

            <div className={styles['testimonials-section']} ref={processSectionRef}>
              <div className={styles['testimonials-section__inner']}>
                <div className={styles['testimonials-section__block']}>
                  <div
                      className={styles['testimonials-section__note']}
                      ref={(ref) => {
                        if (ref) testimonBlockTitleRef.current[0] = ref;
                      }}
                  >
                    “I WANTED TO MENTION HOW FUN, MOTIVATING, DE-STRESSING AND INVIGORATING IT IS TO WORK WITH LAYER
                    III, EVERYTHING WENT VERY SMOOTHLY.”
                  </div>
                  <div
                      className={styles['testimonials-section__title']}
                      ref={(ref) => {
                        if (ref) testimonBlockSubTitleRef.current[0] = ref;
                      }}
                  >
                    JAME HIDDEN, CEO AT BOWLERO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default Clients
