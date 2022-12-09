import type { NextPage } from 'next'

import React, {
  Fragment,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import { gsap } from 'gsap'

import cx from 'classnames'
import { useRouter } from 'next/router'

import Layout from '@/layouts/index'
import { NavLink } from '@/components/ui/NavLink'

import styles from '@/styles/pages/Clients.module.scss'

import orangeBlock from '@/images/orange-bg.png'

import bowleroLogo from '@/images/bowlero.png'
import styrLogo from '@/images/styr.png'
import GSLogo from '@/images/game-station.png'
import JGILogo from '@/images/JGI.png'
import etherealLogo from '@/images/ethereal.png'
import pipeflareLogo from '@/images/pipeflare.png'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { useDispatch } from 'react-redux'
import { setReloadAnimation } from '@/app/slices/commonSlice'
import Image from 'next/image'

interface PageProps {
  loaded: boolean
  isMenuOpen: boolean
  setIsMenuOpen: (data: boolean) => void
}

const Clients: NextPage<PageProps> = ({
  loaded,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  let topOur = '12%'
  let leftOur = '11%'
  let topClients = '92.7%'
  let leftClients = '85%'
  let topCustomersOur = '12%'
  let leftCustomersOur = '15%'
  let topCustomersCustomers = '92.7%'
  let leftCustomersCustomers = '82.5%'
  const router = useRouter()

  const bgRef = useRef(null)
  const nextLinkRef = useRef() as MutableRefObject<HTMLDivElement>
  const nextSliderArrowRef = useRef() as MutableRefObject<HTMLDivElement>
  const ourClientsTitleRef = useRef(null)
  const clientsTextRef = useRef(null)
  const ourClientsTextRef = useRef(null)

  const clientsSectionRef = useRef(null)

  const clientsItemLogoRef = useRef<HTMLDivElement[]>([])
  const clientsItemTitleRef = useRef<HTMLDivElement[]>([])

  const clientsMobileItemLogoRef = useRef<HTMLDivElement[]>([])
  const clientsMobileItemTitleRef = useRef<HTMLDivElement[]>([])

  const testimonTitleMainRef = useRef(null)
  const testimonTitle1Ref = useRef(null)
  const testimonTitle2Ref = useRef(null)
  const processSectionRef = useRef(null)

  const testimonBlockTitleRef = useRef<HTMLDivElement[]>([])
  const testimonBlockSubTitleRef = useRef<HTMLDivElement[]>([])
  const [isMobileScreen, setisMobileScreen] = useState<boolean>(false)

  const isReloadAnimation = useSelector(
    (state: RootState) => state.common.reloadAnimation
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (!clientsTextRef || !loaded) return
    let listening = false,
      currentSection = 'initial'
    const tl = gsap.timeline()

    let mm = gsap.matchMedia(),
      breakPoint = 769

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
        isDesktopHeight: `(min-height: ${1022}px)`,
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context: any) => {
        let { isDesktop, isMobile, reduceMotion, isDesktopHeight } =
          context.conditions

        if (isMobile && isDesktopHeight) {
          setisMobileScreen(true)
          topOur = '12%'
          leftOur = '11%'
          topClients = '89.7%'
          leftClients = '85%'
          topCustomersOur = '12%'
          leftCustomersOur = '15%'
          topCustomersCustomers = '89.7%'
          leftCustomersCustomers = '82.5%'
        } else {
          if (isDesktopHeight) {
            topOur = '12%'
            leftOur = '11%'
            topClients = '92.7%'
            leftClients = '85%'
            topCustomersOur = '12%'
            leftCustomersOur = '15%'
            topCustomersCustomers = '92.7%'
            leftCustomersCustomers = '82.5%'
          }
          if (isDesktop) {
            topOur = '12%'
            leftOur = '11%'
            topClients = '92.7%'
            leftClients = '85%'
            topCustomersOur = '12%'
            leftCustomersOur = '15%'
            topCustomersCustomers = '92.7%'
            leftCustomersCustomers = '82.5%'
          }
          if (isMobile) {
            setisMobileScreen(true)
            topOur = '10%'
            leftOur = '11%'
            topClients = '89.7%'
            leftClients = '80%'
            topCustomersOur = '12%'
            leftCustomersOur = '20%'
            topCustomersCustomers = '89.7%'
            leftCustomersCustomers = '72.5%'
          }
        }
      }
    )

    function handleWheel(e: any) {
      if (!listening) return
      let direction = e.wheelDeltaY < 0 ? 'down' : 'up'
      if (direction === 'down' && currentSection === 'initial') {
        listening = false
        setTimeout(() => (listening = true), 3000)
        currentSection = 'second'
        onNextSection()
      } else if (direction === 'up' && currentSection === 'second') {
        listening = false
        setTimeout(() => (listening = true), 3000)
        currentSection = 'initial'
        onPrevSection()
      }
    }

    nextLinkRef.current.addEventListener('click', onClickNextbutton)

    function onClickNextbutton() {
      if (!listening) return
      onNextSection()
    }

    window.addEventListener('wheel', handleWheel)
    setTimeout(() => (listening = true), 3000)
    onPrevSection()

    return () => {
      tl.kill()
      window.removeEventListener('wheel', handleWheel)
    }
  }, [clientsTextRef, loaded])

  const onPrevSection = () => {
    const tl = gsap.timeline()

    //  Hide Our Customer Section
    tl.fromTo(testimonTitleMainRef.current, { opacity: 1 }, { opacity: 2 })
      .fromTo(
        // Hide the "OUR" text of Customer Section
        testimonTitle1Ref.current,
        { y: 0, opacity: 1 },
        { y: 150, opacity: 0, duration: 0.2 },
        '<'
      )
      .fromTo(
        // Hide the "CLIENT" Text of Customer Section
        testimonTitle2Ref.current,
        { y: 0, opacity: 1 },
        { y: 150, opacity: 0, duration: 0.2 },
        '<'
      )
      .fromTo(
        // Hide Block wrap div
        processSectionRef.current,
        { pointerEvents: 'none', opacity: 1, y: 0, zIndex: 1 },
        { pointerEvents: 'auto', zIndex: 30, opacity: 0, y: 50, duration: 0.2 },
        '<'
      )

      // Show Our Client Section
      .fromTo(
        // show background Image
        bgRef.current,
        { opacity: 0, rotate: 0 },
        { opacity: 1, rotate: 10, duration: 0.75 }
      )
      .fromTo(
        // Show Next Section Arrow button
        nextLinkRef.current,
        { opacity: 0, display: 'none' },
        { opacity: 1, zIndex: 1000, display: 'block' },
        '<'
      )
      .fromTo(
        // Show "OUR" & "CLIENT" text wrap div
        ourClientsTitleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '<+=0.5'
      )
      .fromTo(
        // show our text
        ourClientsTextRef.current,
        {
          left: '50%',
          top: '50%',
          xPercent: -250,
          yPercent: -50,
          opacity: 1,
          y: 0,
        },
        {
          left: leftOur,
          top: topOur,
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
          delay: 0.2,
        }
      )
      .fromTo(
        // Show the client Text
        clientsTextRef.current,
        {
          left: '50%',
          top: '50%',
          xPercent: -20,
          yPercent: -50,
          opacity: 1,
          y: 0,
        },
        {
          left: leftClients,
          top: topClients,
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
        },
        '<' // move client text within the same time line with our text
      )
      .fromTo(
        // show Item Wrap
        clientsSectionRef.current,
        { opacity: 0, y: 0, overflow: 'visible' },
        { opacity: 1 },
        '<'
      )
      .fromTo(
        // Show Items Logo
        clientsItemLogoRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.2 },
        '<+=1'
      )
      .fromTo(
        // Show Items Text
        clientsItemTitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.2 },
        '<+=0.05'
      )
      .fromTo(
        // Show Items Logo
        clientsMobileItemLogoRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.2 },
        '<+=1'
      )
      .fromTo(
        // Show Items Text
        clientsMobileItemTitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.2 },
        '<+=0.05'
      )
      .to(
        // Show Next Client Arrow
        nextSliderArrowRef.current,
        { opacity: 1, duration: 0.5 }
      )
  }

  const onNextSection = () => {
    const tl = gsap.timeline()

    // Hide Customer Section
    tl.to(
      // Hide Next Section Arrow button
      nextLinkRef.current,
      { opacity: 0, display: 'none', duration: 0.5 }
    )
      .to(
        // Show Next Client Arrow
        nextSliderArrowRef.current,
        { opacity: 0, duration: 0.5 }
      )
      .fromTo(
        // Hide the "OUR" text of Client Section
        ourClientsTextRef.current,
        { y: 0, opacity: 1 },
        { y: 150, opacity: 0, duration: 0.2 },
        '<'
      )
      .fromTo(
        // Hide the "CLIENT" Text of Client Section
        clientsTextRef.current,
        { y: 0, opacity: 1 },
        { y: 150, opacity: 0, duration: 0.2 },
        '<'
      )
      .fromTo(
        // Hide Client Items Wrap
        clientsSectionRef.current,
        { y: 0, opacity: 1, pointerEvents: 'auto', zIndex: 30 },
        { y: -400, opacity: 0, pointerEvents: 'none', zIndex: 1 },
        '<'
      )

      // Show Customer Section
      .fromTo(
        // Show "OUR" & "CUSTOMERS" wrap div
        testimonTitleMainRef.current,
        { opacity: 0, zIndex: -1 },
        { opacity: 1, zIndex: 1, duration: 0.5 },
        '<+=0.5'
      )
      .fromTo(
        // move "OUR" text
        testimonTitle1Ref.current,
        {
          left: '50%',
          top: '50%',
          xPercent: -250,
          opacity: 1,
          yPercent: -50,
          y: 0,
        },
        {
          left: leftCustomersOur,
          top: topCustomersOur,
          xPercent: -100,
          yPercent: -50,
          duration: 2.5,
          delay: 0.2,
        }
      )
      .fromTo(
        // move "CUSTOMER" text
        testimonTitle2Ref.current,
        {
          left: '55%',
          top: '50%',
          xPercent: -37,
          opacity: 1,
          y: 0,
          yPercent: -50,
        },
        {
          left: leftCustomersCustomers,
          top: topCustomersCustomers,
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
        },
        '<'
      )
      .fromTo(
        // Rotate the background
        bgRef.current,
        { rotate: 10 },
        { rotate: 10, duration: 1 },
        '<'
      )
      .fromTo(
        // Show Block wrap div
        processSectionRef.current,
        { pointerEvents: 'none', opacity: 1, y: 0, zIndex: 1 },
        { pointerEvents: 'auto', zIndex: 30 },
        '<'
      )
      .fromTo(
        testimonBlockSubTitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.2 },
        '<+=1'
      )
      .fromTo(
        testimonBlockTitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.2 },
        '<+=0.05'
      )
  }
  const onNextClients = () => {
    const tl = gsap.timeline()

    // Hide Customer Section
    tl.to(
      // Hide Next Section Arrow button
      nextLinkRef.current,
      { opacity: 0, display: 'none', duration: 0.5 }
    )
      .fromTo(
        // Show Next Section Arrow button
        nextLinkRef.current,
        { opacity: 0, display: 'none' },
        { opacity: 1, zIndex: 1000, display: 'block' },
        '<'
      )
      .fromTo(
        // Show Items Logo
        clientsMobileItemLogoRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.2 },
        '<+=1'
      )
      .fromTo(
        // Show Items Text
        clientsMobileItemTitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.2 },
        '<+=0.05'
      )
  }

  useEffect(() => {
    if (isReloadAnimation) {
      onPrevSection()
      dispatch(setReloadAnimation(false))
    }
  }, [isReloadAnimation])

  const [curretnIndex, setCurrentIndex] = useState(0)
  const [backArrow, setBackArrow] = useState(false)

  const sectionArray = [
    [
      {
        image: bowleroLogo.src,
        description:
          'NFT MARKETPLACE AND MINTING PLATFORM FOR LEAGUE BOWLER CERTIFICATION PROGRAM',
      },
      {
        image: styrLogo.src,
        description:
          'HIGH FREQUENCY TRADING SNEAKER MARKETPLACE WITH ASSET BACKED NFTS',
      },
    ],
    [
      {
        image: GSLogo.src,
        description:
          'CRYPTO MICRO-WALLET LEAD GENERATION PLATFORM WITH GAMING AND AIRDROPS',
      },
      {
        image: JGILogo.src,
        description:
          'MEMBERSHIP, CHARITY, AND NFT TICKETING PLATFORM FOR NATIONAL SPORTS ORGANIZATIONS',
      },
    ],
    [
      {
        image: etherealLogo.src,
        description:
          'WEB3.0 STRATEGY AND IMPLEMENTATION TO PRESERVE DR. GOODALLS LEGACY AND RESEARCH',
      },
      {
        image: pipeflareLogo.src,
        description:
          'PLAY-TO-EARN GAMING PLATFORM SUPPORTING 60,000 DAILY PLAYERS  AND 7 CUSTOM GAMES',
      },
    ],
  ]

  return (
    <Layout>
      <div
        className={cx(styles['clients-page'], {
          [styles[`is-loaded`]]: loaded,
        })}
      >
        <div
          className={styles['clients-page__bg']}
          // style={{ backgroundImage: `url(${orangeBlock.src})` }}
          ref={bgRef}
        >
          <Image src={orangeBlock.src} alt="bg_about" layout="fill" />
        </div>
        <div className={styles['clients-page__menugroup']}>
          <div className={styles['clients-page__selectedMenu']}>
            <div>CLIENTS</div>
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
          {isMenuOpen && (
            <div className={styles['clients-page__optiongroup']}>
              <div
                onClick={() => {
                  router.push('about')
                  setIsMenuOpen(false)
                }}
                className={cx(
                  styles['clients-page__optionMenu'],
                  styles['clients-page__optionMenu--about']
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
                  styles['clients-page__optionMenu'],
                  styles['clients-page__optionMenu--services']
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
                  styles['clients-page__optionMenu'],
                  styles['clients-page__optionMenu--client']
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
        </div>
        <div className={styles['clients-page__inner']}>
          {/* <div className={styles['clients-page__back']}>
              <NavLink href="/">
                <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.22 22.78L12.74 25.26L0.899999 13.06L0.899999 12.66L12.74 0.459999L15.22 2.9L7.14 11.02L30.5 11.02L30.5 14.66L7.1 14.66L15.22 22.78Z"
                      fill="#272822"
                  />
                </svg>
              </NavLink>
            </div> */}

          <div className={styles['clients-page__next']} ref={nextLinkRef}>
            <svg
              // width="26"
              // height="30"
              viewBox="0 0 26 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.28 15.28L25.76 17.76L13.56 29.6H13.16L0.96 17.76L3.4 15.28L11.52 23.36V-1.90735e-06H15.16V23.4L23.28 15.28Z"
                fill="#272822"
              />
            </svg>
          </div>

          <div
            className={styles['clients-page__main-title']}
            ref={ourClientsTitleRef}
          >
            <span ref={ourClientsTextRef}>Our</span>
            <span ref={clientsTextRef}>CLIENTS</span>
          </div>
          {/* <div
            className={styles['clients-page__next-slider']}
            ref={nextSliderArrowRef}
            style={{
              transform: backArrow ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={() => {
              if (backArrow) {
                onNextClients()
                setCurrentIndex(curretnIndex - 1)
                if (curretnIndex - 1 == 0) {
                  setBackArrow(false)
                }
              } else {
                setCurrentIndex(curretnIndex + 1)
                onNextClients()
                if (curretnIndex + 1 == 2) {
                  setBackArrow(true)
                }
              }
            }}
          >
            <svg
              width="30"
              height="24"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.03406 0.83L11.1361 5.044V5.156L7.03406 9.37L6.26406 8.6L9.23207 5.646H0.776064V4.554H9.23207L6.26406 1.6L7.03406 0.83Z"
                fill="#272822"
              />
            </svg>
          </div> */}

          <div className={styles['clients-section']} ref={clientsSectionRef}>
            <div className={styles['clients-section__inner']}>
              <div className={styles['clients-section__boxes']}>
                <div className={styles['clients-section__boxes--mobile']}>
                  {/* {sectionArray[curretnIndex].map((data, index) => {
                    return (
                      <Fragment key={index}>
                        <div className={styles['clients-section__box']}>
                          <div
                            className={styles['clients-section__logo']}
                            ref={(ref) => {
                              if (ref)
                                clientsMobileItemLogoRef.current[index] = ref
                            }}
                          >
                            <img src={data.image} alt="Bowlero Corporation" />
                          </div>
                          <div
                            className={styles['clients-section__text']}
                            ref={(ref) => {
                              if (ref)
                                clientsMobileItemTitleRef.current[index] = ref
                            }}
                          >
                            {data.description}
                          </div>
                        </div>
                      </Fragment>
                    )
                  })} */}
                </div>

                <div className={styles['clients-section__boxes--desktop']}>
                  <div className={styles['clients-section__box']}>
                    <div
                      className={styles['clients-section__logo']}
                      ref={(ref) => {
                        if (ref) clientsItemLogoRef.current[0] = ref
                      }}
                    >
                      <img src={bowleroLogo.src} alt="Bowlero Corporation" />
                    </div>
                    <div
                      className={styles['clients-section__text']}
                      ref={(ref) => {
                        if (ref) clientsItemTitleRef.current[0] = ref
                      }}
                    >
                      NFT MARKETPLACE AND MINTING PLATFORM FOR LEAGUE BOWLER
                      CERTIFICATION PROGRAM
                    </div>
                  </div>

                  <div className={styles['clients-section__box']}>
                    <div
                      className={styles['clients-section__logo']}
                      ref={(ref) => {
                        if (ref) clientsItemLogoRef.current[1] = ref
                      }}
                    >
                      <img src={styrLogo.src} alt="STYR" />
                    </div>
                    <div
                      className={styles['clients-section__text']}
                      ref={(ref) => {
                        if (ref) clientsItemTitleRef.current[1] = ref
                      }}
                    >
                      HIGH FREQUENCY TRADING SNEAKER MARKETPLACE WITH ASSET
                      BACKED NFTS
                    </div>
                  </div>

                  <div className={styles['clients-section__box']}>
                    <div
                      className={styles['clients-section__logo']}
                      ref={(ref) => {
                        if (ref) clientsItemLogoRef.current[2] = ref
                      }}
                    >
                      <img src={GSLogo.src} alt="Game Station" />
                    </div>
                    <div
                      className={styles['clients-section__text']}
                      ref={(ref) => {
                        if (ref) clientsItemTitleRef.current[2] = ref
                      }}
                    >
                      CRYPTO MICRO-WALLET LEAD GENERATION PLATFORM WITH GAMING
                      AND AIRDROPS
                    </div>
                  </div>

                  <div className={styles['clients-section__box']}>
                    <div
                      className={styles['clients-section__logo']}
                      ref={(ref) => {
                        if (ref) clientsItemLogoRef.current[3] = ref
                      }}
                    >
                      <img src={JGILogo.src} alt="Jane Goodall Institute" />
                    </div>
                    <div
                      className={styles['clients-section__text']}
                      ref={(ref) => {
                        if (ref) clientsItemTitleRef.current[3] = ref
                      }}
                    >
                      MEMBERSHIP, CHARITY, AND NFT TICKETING PLATFORM FOR
                      NATIONAL SPORTS ORGANIZATIONS
                    </div>
                  </div>

                  <div className={styles['clients-section__box']}>
                    <div
                      className={styles['clients-section__logo']}
                      ref={(ref) => {
                        if (ref) clientsItemLogoRef.current[4] = ref
                      }}
                    >
                      <img src={etherealLogo.src} alt="Ethereal Collective" />
                    </div>
                    <div
                      className={styles['clients-section__text']}
                      ref={(ref) => {
                        if (ref) clientsItemTitleRef.current[4] = ref
                      }}
                    >
                      WEB3.0 STRATEGY AND IMPLEMENTATION TO PRESERVE DR.
                      GOODALLS LEGACY AND RESEARCH
                    </div>
                  </div>

                  <div className={styles['clients-section__box']}>
                    <div
                      className={styles['clients-section__logo']}
                      ref={(ref) => {
                        if (ref) clientsItemLogoRef.current[5] = ref
                      }}
                    >
                      <img
                        style={{ height: isMobileScreen ?  "50px" : "100%"}}
                        src={pipeflareLogo.src}
                        alt="Pipeflare"
                      />
                    </div>
                    <div
                      className={styles['clients-section__text']}
                      ref={(ref) => {
                        if (ref) clientsItemTitleRef.current[5] = ref
                      }}
                    >
                      PLAY-TO-EARN GAMING PLATFORM SUPPORTING 60,000 DAILY
                      PLAYERS AND 7 CUSTOM GAMES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={styles['clients-page__testimonials-title']}
            ref={testimonTitleMainRef}
          >
            <span ref={testimonTitle1Ref}>Our</span>
            <span ref={testimonTitle2Ref}>CUSTOMERS</span>
          </div>

          <div
            className={styles['testimonials-section']}
            ref={processSectionRef}
          >
            <div className={styles['testimonials-section__inner']}>
              <div className={styles['testimonials-section__block']}>
                <div
                  className={styles['testimonials-section__note']}
                  ref={(ref) => {
                    if (ref) testimonBlockTitleRef.current[0] = ref
                  }}
                >
                  “I WANTED TO MENTION HOW FUN, MOTIVATING, DE-STRESSING AND
                  INVIGORATING IT IS TO WORK WITH LAYER III, EVERYTHING WENT
                  VERY SMOOTHLY.”
                </div>
                <div
                  className={styles['testimonials-section__title']}
                  ref={(ref) => {
                    if (ref) testimonBlockSubTitleRef.current[0] = ref
                  }}
                >
                  JASON KOVAR, COO OF GAMESTATION
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
