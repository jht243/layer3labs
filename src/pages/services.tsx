import type { NextPage } from 'next'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import cx from 'classnames'

import Layout from '@/layouts/index'
import { NavLink } from '@/components/ui/NavLink'

import styles from '@/styles/pages/Services.module.scss'

import greenBlock from '@/images/green-bg.svg'

interface PageProps {
  loaded: boolean
}

const Services: NextPage<PageProps> = ({ loaded }) => {
  const [currentSection, setCurrentSection] = useState('initial')
  const bgRef = useRef(null);
  const nextLinkRef = useRef(null);

  const servicesTextRef = useRef(null);
  const ourServicesTextRef = useRef(null);

  const benefitsSectionRef = useRef(null);

  const benefitsTitleRef = useRef<HTMLDivElement[]>([]);
  const benefitsSubTitleRef = useRef<HTMLDivElement[]>([]);

  const processTitleMainRef = useRef(null);
  const processTitle1Ref = useRef(null);
  const processTitle2Ref = useRef(null);
  const processSectionRef = useRef(null);

  const processNoteRef = useRef<HTMLDivElement[]>([]);
  const processBlockTitleRef = useRef<HTMLDivElement[]>([]);


  useEffect(() => {
    if (!servicesTextRef || !loaded) return

    const tl = gsap.timeline()

    tl.fromTo(
        ourServicesTextRef.current,
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
        servicesTextRef.current,
        {
          left: '50%',
          top: '50%',
          xPercent: -20,
          yPercent: -50,
        },
        {
          left: '80%',
          top: '95%',

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
        benefitsSectionRef.current,
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
        benefitsTitleRef.current,
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
        benefitsSubTitleRef.current,
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
        benefitsSectionRef.current,
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
  }, [servicesTextRef, loaded])


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
          ourServicesTextRef.current,
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
          servicesTextRef.current,
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
          benefitsSectionRef.current,
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
          processTitleMainRef.current,
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
          processTitle1Ref.current,
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
          processTitle2Ref.current,
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
            rotate: 20,
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
          processBlockTitleRef.current,
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
          processNoteRef.current,
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
            className={cx(styles['services-page'], { [styles[`is-loaded`]]: loaded })}
        >
          <div
              className={styles['services-page__bg']}
              style={{ backgroundImage: `url(${greenBlock.src})` }}
              ref={bgRef}
          />
          <div className={styles['services-page__inner']}>
            <div className={styles['services-page__back']}>
              <NavLink href="/">
                <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.22 22.78L12.74 25.26L0.899999 13.06L0.899999 12.66L12.74 0.459999L15.22 2.9L7.14 11.02L30.5 11.02L30.5 14.66L7.1 14.66L15.22 22.78Z"
                      fill="#272822"
                  />
                </svg>
              </NavLink>
            </div>

            <div className={styles['services-page__next']} onClick={onNextSection} ref={nextLinkRef}>
              <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M23.28 15.28L25.76 17.76L13.56 29.6H13.16L0.96 17.76L3.4 15.28L11.52 23.36V-1.90735e-06H15.16V23.4L23.28 15.28Z"
                    fill="#272822"
                />
              </svg>
            </div>

            <div className={styles['services-page__main-title']}>
              <span ref={ourServicesTextRef}>Our</span>
              <span ref={servicesTextRef}>SERVICES</span>
            </div>

            <div className={styles['benefits-section']} ref={benefitsSectionRef}>
              <div className={styles['benefits-section__inner']}>
                <div className={styles['benefits-section__row']}>
                  <div className={styles['benefits-section__col']}>
                    <div
                        className={styles['benefits-section__title']}
                        ref={(ref) => {
                          if (ref) benefitsTitleRef.current[0] = ref;
                        }}
                    >
                      
                      RAPIDLY DEPLOYABLE TECH MODULES
                    </div>
                  </div>
                  <div className={styles['benefits-section__col']}>
                    <div
                        className={styles['benefits-section__text']}
                        ref={(ref) => {
                          if (ref) benefitsSubTitleRef.current[0] = ref;
                        }}
                    >
                      NFT MARKETPLACES, TRADING PLATFORMS, TOKENIZATION, AND MUCH MORE IN JUST 30 DAYS.
                    </div>

                  </div>
                </div>

                <div className={styles['benefits-section__row']}>
                  <div className={styles['benefits-section__col']}>
                    <div
                        className={styles['benefits-section__title']}
                        ref={(ref) => {
                          if (ref) benefitsTitleRef.current[1] = ref;
                        }}
                    >
                      TOTALLY CUSTOMIZABLE FRONT-END
                    </div>
                  </div>
                  <div className={styles['benefits-section__col']}>
                    <div
                        className={styles['benefits-section__text']}
                        ref={(ref) => {
                          if (ref) benefitsSubTitleRef.current[1] = ref;
                        }}
                    >
                      THAT ALLOWS COMPANIES TO USE THEIR OWN BRANDING AND MARKETING MATERIALS.
                    </div>

                  </div>
                </div>

                <div className={styles['benefits-section__row']}>
                  <div className={styles['benefits-section__col']}>
                    <div
                        className={styles['benefits-section__title']}
                        ref={(ref) => {
                          if (ref) benefitsTitleRef.current[2] = ref;
                        }}
                    >
                      MULTIPLE PAYMENT OPTIONS
                    </div>
                  </div>
                  <div className={styles['benefits-section__col']}>
                    <div
                        className={styles['benefits-section__text']}
                        ref={(ref) => {
                          if (ref) benefitsSubTitleRef.current[2] = ref;
                        }}
                    >
                      INCLUDING WEB 3.0 WALLETS, CRYPTO PROCESSING COMPANIES, AND CREDIT CARDS.
                    </div>

                  </div>
                </div>

                <div className={styles['benefits-section__row']}>
                  <div className={styles['benefits-section__col']}>
                    <div
                        className={styles['benefits-section__title']}
                        ref={(ref) => {
                          if (ref) benefitsTitleRef.current[3] = ref;
                        }}
                    >
                      BRIDGING THE PHYSICAL AND DIGITAL
                    </div>
                  </div>
                  <div className={styles['benefits-section__col']}>
                    <div
                        className={styles['benefits-section__text']}
                        ref={(ref) => {
                          if (ref) benefitsSubTitleRef.current[3] = ref;
                        }}
                    >
                        RADEEM DIGITAL REWARDS SCROLL DOESN'T WORK TO GO BELOW FIRST SECTION
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className={styles['services-page__process-title']} ref={processTitleMainRef}>
              <span ref={processTitle1Ref}>Our</span>
              <span ref={processTitle2Ref}>Process</span>
            </div>

            <div className={styles['process-section']} ref={processSectionRef}>
              <div className={styles['process-section__inner']}>
                <div className={styles['process-section__block']}>
                  <div
                      className={styles['process-section__note']}
                      ref={(ref) => {
                        if (ref) processNoteRef.current[0] = ref;
                      }}
                  >
                    DEPLOY <span>I</span>
                  </div>
                  <div
                      className={styles['process-section__title']}
                      ref={(ref) => {
                        if (ref) processBlockTitleRef.current[0] = ref;
                      }}
                  >
                    WE DEPLOY YOUR SOFTWARE...
                    <span>
                      <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.60398 12.0551H1.11399C1.13812 11.1749 0.965592 10.3003 0.608985 9.49514C-0.202914 7.50406 -0.202914 5.27422 0.608985 3.28314C0.965592 2.47798 1.13812 1.60341 1.11399 0.723145H2.60398C2.62658 1.79021 2.41885 2.84961 1.99497 3.82914C1.32113 5.46964 1.32113 7.30964 1.99497 8.95014C2.41871 9.92936 2.62643 10.9884 2.60398 12.0551Z"
                            fill="#272822"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className={styles['process-section__block']}>
                  <div
                      className={styles['process-section__note']}
                      ref={(ref) => {
                        if (ref) processNoteRef.current[1] = ref;
                      }}
                  >
                    MANAGE <span>II</span>
                  </div>
                  <div
                      className={styles['process-section__title']}
                      ref={(ref) => {
                        if (ref) processBlockTitleRef.current[1] = ref;
                      }}
                  >
                    WE MANAGE THE DAY-TO-DAY BACKEND OPERATIONS
                    <span>
                      <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.25413 12.0737H4.76112C4.78525 11.1917 4.61237 10.3155 4.25511 9.50873C3.44166 7.5138 3.44166 5.27965 4.25511 3.28472C4.61237 2.47797 4.78525 1.60171 4.76112 0.719727H6.25413C6.27681 1.78884 6.06873 2.85029 5.64412 3.83173C4.96883 5.4754 4.96883 7.31905 5.64412 8.96272C6.06859 9.94386 6.27667 11.0049 6.25413 12.0737Z" fill="#272822"/>
                        <path d="M2.60908 12.0737H1.11609C1.14025 11.1917 0.967386 10.3155 0.610092 9.50873C-0.203364 7.5138 -0.203364 5.27965 0.610092 3.28472C0.967386 2.47798 1.14025 1.60171 1.11609 0.719727H2.60908C2.63176 1.78884 2.4237 2.85029 1.99908 3.83173C1.3238 5.4754 1.3238 7.31905 1.99908 8.96272C2.42356 9.94386 2.63162 11.0049 2.60908 12.0737Z" fill="#272822"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className={styles['process-section__block']}>
                  <div
                      className={styles['process-section__note']}
                      ref={(ref) => {
                        if (ref) processNoteRef.current[2] = ref;
                      }}
                  >
                    CUSTOMIZE <span>III</span>
                  </div>
                  <div
                      className={styles['process-section__title']}
                      ref={(ref) => {
                        if (ref) processBlockTitleRef.current[2] = ref;
                      }}
                  >
                    WE CAN CUSTOMIZE YOUR MARKETPLACE TO MEET YOUR BUSINESS’S UNIQUE NEEDS
                    <span>
                      <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.25413 12.0737H4.76112C4.78525 11.1917 4.61237 10.3155 4.25511 9.50873C3.44166 7.5138 3.44166 5.27965 4.25511 3.28472C4.61237 2.47797 4.78525 1.60171 4.76112 0.719727H6.25413C6.27681 1.78884 6.06873 2.85029 5.64412 3.83173C4.96883 5.4754 4.96883 7.31905 5.64412 8.96272C6.06859 9.94386 6.27667 11.0049 6.25413 12.0737Z" fill="#272822"/>
                        <path d="M9.89816 12.0737H8.40512C8.42927 11.1917 8.25643 10.3155 7.89914 9.50873C7.08579 7.51378 7.08579 5.27967 7.89914 3.28472C8.25643 2.47798 8.42927 1.60171 8.40512 0.719727H9.89816C9.9208 1.78884 9.7127 2.85028 9.28811 3.83173C8.61272 5.47538 8.61272 7.31907 9.28811 8.96272C9.71256 9.94387 9.92066 11.0049 9.89816 12.0737Z" fill="#272822"/>
                        <path d="M2.60908 12.0737H1.11609C1.14025 11.1917 0.967386 10.3155 0.610092 9.50873C-0.203364 7.5138 -0.203364 5.27965 0.610092 3.28472C0.967386 2.47798 1.14025 1.60171 1.11609 0.719727H2.60908C2.63176 1.78884 2.4237 2.85029 1.99908 3.83173C1.3238 5.4754 1.3238 7.31905 1.99908 8.96272C2.42356 9.94386 2.63162 11.0049 2.60908 12.0737Z" fill="#272822"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default Services
