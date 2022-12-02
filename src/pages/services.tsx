import type { NextPage } from 'next'

import React, {
  Fragment,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import { gsap, Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import cx from 'classnames'

import Layout from '@/layouts/index'
import { NavLink } from '@/components/ui/NavLink'

import styles from '@/styles/pages/Services.module.scss'

import greenBlock from '@/images/green-bg.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface PageProps {
  loaded: boolean
  isMenuOpen: boolean
  setIsMenuOpen: (data: boolean) => void
}

// start comman variable -- for animation
let topOur = '12%'
let leftOur = '7.5%'
let topServices = '92.7%'
let leftServices = '88%'
let topProcessOur = '12%'
let leftProcessOur = '7.5%'
let topProcessProcess = '92.7%'
let leftProcessProcess = '88%'

const Services: NextPage<PageProps> = ({
  loaded,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  gsap.registerPlugin(ScrollTrigger)
  const [currentSection, setCurrentSection] = useState('initial')

  let timer: any
  let canMoveBack = true

  const bgRef = useRef(null)
  const nextLinkRef = useRef(null)
  const nextSliderArrowRef = useRef() as MutableRefObject<HTMLDivElement>

  const servicesTextRef = useRef(null)
  const ourServicesTextRef = useRef(null)
  const ourServiceWrapRef = useRef(null)

  const benefitsSectionRef = useRef(null)

  const benefitsTitleRef = useRef<HTMLDivElement[]>([])
  const benefitsSubTitleRef = useRef<HTMLDivElement[]>([])

  const processTitleMainRef = useRef(null)
  const processTitle1Ref = useRef(null)
  const processTitle2Ref = useRef(null)
  const processSectionRef = useRef(null)

  const processNoteRef = useRef<HTMLDivElement[]>([])
  const processBlockTitleRef = useRef<HTMLDivElement[]>([])

  const clientsMobileItemLogoRef = useRef<HTMLDivElement[]>([])
  const clientsMobileItemTitleRef = useRef<HTMLDivElement[]>([])

  const partnersRef = useRef(null)

  useEffect(() => {
    if (!servicesTextRef || !loaded) return
    const tl = gsap.timeline()

    let listening = false,
      currentSection = 'initial'
    const headings: any = gsap.utils.toArray('.section-heading')

    document.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd, { passive: false })

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
          topOur = '12%'
          leftOur = '10.5%'
          topServices = '91.7%'
          leftServices = '79%'
          topProcessOur = '12%'
          leftProcessOur = '9.5%'
          topProcessProcess = '91.7%'
          leftProcessProcess = '75%'
        } else {
          if (isDesktopHeight) {
            topOur = '12%'
            leftOur = '7.5%'
            topServices = '92.7%'
            leftServices = '88%'
            topProcessOur = '12%'
            leftProcessOur = '7.5%'
            topProcessProcess = '92.7%'
            leftProcessProcess = '88%'
          }
          if (isDesktop) {
            topOur = '12%'
            leftOur = '7.5%'
            topServices = '92.7%'
            leftServices = '88%'
            topProcessOur = '12%'
            leftProcessOur = '7.5%'
            topProcessProcess = '92.7%'
            leftProcessProcess = '88%'
          }
          if (isMobile) {
            topOur = '12%'
            leftOur = '10.5%'
            topServices = '91.7%'
            leftServices = '79%'
            topProcessOur = '12%'
            leftProcessOur = '9.5%'
            topProcessProcess = '91.7%'
            leftProcessProcess = '75%'
          }
        }
      }
    )

    let direction = 'down',
      current: any,
      next = 0

    function handleWheel(e: any) {
      if (!listening) return
      let direction = e.wheelDeltaY < 0 ? 'down' : 'up'
      if (direction === 'down' && currentSection === 'initial') {
        listening = false
        setTimeout(() => (listening = true), 4000)
        currentSection = 'second'
        onNextSection()
      } else if (direction === 'up' && currentSection === 'second') {
        listening = false
        setTimeout(() => (listening = true), 4000)
        currentSection = 'initial'
        onPrevSection()
      }
    }

    window.addEventListener('wheel', handleWheel)
    setTimeout(() => (listening = true), 3000)
    onPrevSection()

    function handleDirection() {
      listening = false

      if (direction === 'down') {
        if (current < headings.length - 1) {
          next = current + 1
          slideIn()
        } else if (current === headings.length - 1) {
          onNextSection()
          setTimeout(() => (listening = true), 5000)
          current += 1
        } else {
          setTimeout(() => {
            listening = true
          }, 2000)
        }
      }

      if (direction === 'up') {
        if (current === 0) {
          listening = true
          return
        }
        if (current < headings.length) {
          next = current - 1
          slideOut()
        } else if (current >= headings.length && canMoveBack) {
          onPrevSection()
          setTimeout(() => {
            listening = true
          }, 5000)
          current -= 1
        } else {
          setTimeout(() => {
            listening = true
          }, 2000)
        }
      }
    }

    const touch = {
      startX: 0,
      startY: 0,
      dx: 0,
      dy: 0,
      startTime: 0,
      dt: 0,
    }

    function handleTouchStart(e: any) {
      if (!listening) return
      const t = e.changedTouches[0]
      touch.startX = t.pageX
      touch.startY = t.pageY
    }

    function handleTouchMove(e: any) {
      if (!listening) return
      e.preventDefault()
    }

    function handleTouchEnd(e: any) {
      if (!listening) return
      const t = e.changedTouches[0]
      touch.dx = t.pageX - touch.startX
      touch.dy = t.pageY - touch.startY
      if (touch.dy > 10) direction = 'up'
      if (touch.dy < -10) direction = 'down'
      handleDirection()
    }

    function revealSectionHeading() {
      const tl = gsap.timeline()
      return tl
        .to(headings[next], {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          delay: 2,
          ease: 'power2',
        })
        .to(
          partnersRef.current,
          { autoAlpha: 1, y: 0, duration: 1, ease: 'power2' },
          '<'
        )
    }

    const tlDefaults = {
      ease: 'slow.inOut',
      duration: 1,
    }

    function slideIn() {
      const tl = gsap.timeline({
        defaults: tlDefaults,
        onComplete: () => {
          setTimeout(() => {
            listening = true
            current = next
          }, 500)
        },
      })
      if (current === undefined) {
        tl.add(revealSectionHeading(), 0)
      }

      if (current !== undefined) {
        tl.add(
          gsap
            .timeline()
            .to(headings[current], { y: -100, autoAlpha: 0, duration: 0.3 })
            .to(headings[next], { y: 0, autoAlpha: 1, duration: 0.3 }, '<+=0.5')
        )
      }

      tl.play(0)
    }

    // Slides a section out on scroll up
    function slideOut() {
      gsap
        .timeline({
          defaults: tlDefaults,
          onComplete: () => {
            setTimeout(() => {
              listening = true
              current = next
            }, 500)
          },
        })
        .to(headings[current], { y: 100, autoAlpha: 0, duration: 0.3 })
        .to(headings[next], { y: 0, autoAlpha: 1, duration: 0.3 }, '<+=0.5')
    }

    return () => {
      tl.kill()
      topOur = '12%'
      leftOur = '7.5%'
      topServices = '92.7%'
      leftServices = '88%'
      topProcessOur = '12%'
      leftProcessOur = '7.5%'
      topProcessProcess = '92.7%'
      leftProcessProcess = '88%'
      window.removeEventListener('wheel', handleWheel)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [servicesTextRef, loaded])

  const [curretnIndex, setCurrentIndex] = useState(0)
  const [backArrow, setBackArrow] = useState(false)

  const sectionArray = [
    [
      {
        title: 'NFT MARKETPLACES',
        description:
          'DEPLOY YOUR OWN MARKETPLACE IN UNDER 30 DAYS AND ACCEPT CREDIT CARD PAYMENTS',
      },
      {
        title: 'LOYALTY PROGRAMS',
        description:
          'DIGITIZE YOUR REWARDS PROGRAM TO INCREASE ENGAGEMENT AND RETENTION',
      },
    ],
    [
      {
        title: 'TRADING PLATFORMS',
        description:
          'CREATE A TRADING PLATFORMS FOR USERS TO BUY, SELL, AND HOLD DIGITIZED GOODS',
      },
      {
        title: 'PLAY-TO-EARN GAMES',
        description:
          'HARNESS MASSIVE USER ATTENTION THROUGH FUN P2E GAMES BUILT IN UNITY',
      },
    ],
    [
      {
        title: 'METAVERSE BUILDS',
        description:
          "CREATE METAVERSE EXPERIENCES THAT ADD TO YOUR BRAND'S VALUE PROPOSITION",
      },
      {
        title: '',
        description: '',
      },
    ],
  ]

  const onPrevSection = () => {
    const tl = gsap.timeline()

    tl.fromTo(
      processTitle1Ref.current,
      {
        y: 0,
        opacity: 1,
      },
      {
        y: 50,
        opacity: 0,
        duration: 0.1,
        stagger: 0.2,
      }
    )
      .fromTo(
        processTitle2Ref.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: 150,
          opacity: 0,
          duration: 0.1,
          stagger: 0.2,
        },
        '<'
      )
      .fromTo(
        processSectionRef.current,
        {
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0,
        },
        {
          pointerEvents: 'auto',
          zIndex: 30,
          opacity: 0,
        },
        '<'
      )
      .fromTo(
        ourServiceWrapRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      )
      .fromTo(
        ourServicesTextRef.current,
        {
          left: '50%',
          top: '50%',
          xPercent: -200,
          y: 0,
          opacity: 1,
          yPercent: -50,
        },
        {
          left: leftOur,
          top: topOur,
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
          delay: 1,
          opacity: 1,
        }
      )
      .fromTo(
        servicesTextRef.current,
        {
          left: '55%',
          top: '50%',
          opacity: 1,
          y: 0,
          xPercent: -20,
          yPercent: -50,
        },
        {
          left: leftServices,
          top: topServices,

          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
        },
        '<'
      )
      .fromTo(
        bgRef.current,
        {
          opacity: 1,
          rotate: 0,
        },
        {
          opacity: 1,
        },
        '<+=0.05'
      )
      .fromTo(
        benefitsSectionRef.current,
        {
          pointerEvents: 'none',
          y: 0,
          zIndex: 1,
          opacity: 1,
        },
        {
          pointerEvents: 'auto',
          zIndex: 30,
        },
        '<'
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
          stagger: 0.2,
        },
        '<+=1'
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
        },
        '<+=0.05'
      )
      .fromTo(
        benefitsSectionRef.current,
        {
          overflowY: 'visible',
        },
        {
          overflowY: 'visible',
        },
        '<'
      )
      .to(
        nextLinkRef.current,
        {
          y: 0,
          opacity: 1,
          zIndex: 33,
          duration: 0.2,
        },
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
      .to(
        // Show Next Client Arrow
        nextSliderArrowRef.current,
        { opacity: 1, duration: 0.2 }
      )
  }

  const onNextSection = () => {
    const tl = gsap.timeline()

    tl.to(nextLinkRef.current, {
      pointerEvents: 'none',
      opacity: 0,
      duration: 0.5,
    })
      .to(
        // Show Next Services Arrow
        nextSliderArrowRef.current,
        { opacity: 0, duration: 0.5 }
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
        },
        '<'
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
        },
        '<'
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
        },
        '<'
      )
      .to(
        nextLinkRef.current,
        {
          zIndex: 1000,
        },
        '<'
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
        },
        '<+=0.5'
      )
      .fromTo(
        processTitle1Ref.current,
        {
          left: '50%',
          top: '50%',
          y: 0,
          xPercent: -200,
          yPercent: -50,
          opacity: 1,
        },
        {
          left: leftProcessOur,
          top: topProcessOur,
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
          opacity: 1,
          delay: 0.2,
        }
      )
      .fromTo(
        processTitle2Ref.current,
        {
          left: '55%',
          top: '50%',
          xPercent: -20,
          y: 0,
          opacity: 1,
          yPercent: -50,
        },
        {
          left: leftProcessProcess,
          top: topProcessProcess,
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
        },
        '<'
      )

      .fromTo(
        bgRef.current,
        {
          rotate: 0,
        },
        {
          rotate: 0,
          duration: 1,
        },
        '<'
      )
      .fromTo(
        processSectionRef.current,
        {
          pointerEvents: 'none',
          opacity: 1,
          zIndex: 1,
        },
        {
          pointerEvents: 'auto',
          opacity: 1,
          zIndex: 30,
        },
        '<'
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
          stagger: 0.2,
        },
        '<+=1'
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
        },
        '<+=0.05'
      )
      .fromTo(
        processSectionRef.current,
        {
          overflowY: 'visible',
        },
        {
          overflowY: 'visible',
        },
        '<'
      )
      .to(
        nextLinkRef.current,
        {
          zIndex: -1,
          opacity: 0,
          duration: 0.5,
        },
        '<'
      )
  }
  const router = useRouter()
  const onNextServices = () => {
    const tl = gsap.timeline()

    // Hide Customer Section
    tl.to(
      // Hide Next Section Arrow button
      nextLinkRef.current,
      { opacity: 0, duration: 0.5 }
    )
      .fromTo(
        // Show Next Section Arrow button
        nextLinkRef.current,
        { opacity: 0 },
        { opacity: 1, zIndex: 1000 },
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

  return (
    <Layout>
      <div
        className={cx(styles['services-page'], {
          [styles[`is-loaded`]]: loaded,
        })}
      >
        <div
          className={styles['services-page__bg']}
          // style={{ backgroundImage: `url(${purpleBlock.src})` }}
          ref={bgRef}
        >
          <Image src={greenBlock.src} alt="bg_services" layout="fill" />
        </div>
        <div className={styles['services-page__menugroup']}>
          <div className={styles['services-page__selectedMenu']}>
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
          {isMenuOpen && (
          <div className={styles['services-page__optiongroup']}>
            <div
              onClick={() => {
                router.push('about')
                setIsMenuOpen(false)
              }}
              className={cx(
                styles['services-page__optionMenu'],
                styles['services-page__optionMenu--about']
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
                styles['services-page__optionMenu'],
                styles['services-page__optionMenu--services']
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
                styles['services-page__optionMenu'],
                styles['services-page__optionMenu--client']
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
        {/* <div
          className={styles['services-page__bg']}
          style={{ backgroundImage: `url(${greenBlock.src})` }}
          ref={bgRef}
        /> */}
        <div className={styles['services-page__inner']}>
          {/* <div className={styles['services-page__back']}>
            <NavLink href="/">
              <svg
                width="31"
                height="26"
                viewBox="0 0 31 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.22 22.78L12.74 25.26L0.899999 13.06L0.899999 12.66L12.74 0.459999L15.22 2.9L7.14 11.02L30.5 11.02L30.5 14.66L7.1 14.66L15.22 22.78Z"
                  fill="#272822"
                />
              </svg>
            </NavLink>
          </div> */}

          <div
            className={styles['services-page__next']}
            onClick={() => onNextSection()}
            ref={nextLinkRef}
          >
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
          </div>

          <div
            className={styles['services-page__main-title']}
            ref={ourServiceWrapRef}
          >
            <span ref={ourServicesTextRef}>Our</span>
            <span ref={servicesTextRef}>SERVICES</span>
          </div>

          <div
            className={styles['services-page__next-slider']}
            ref={nextSliderArrowRef}
            style={{
              transform: backArrow ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={() => {
              if (backArrow) {
                onNextServices()
                setCurrentIndex(curretnIndex - 1)
                if (curretnIndex - 1 == 0) {
                  setBackArrow(false)
                }
              } else {
                setCurrentIndex(curretnIndex + 1)
                onNextServices()
                if (curretnIndex + 1 == 2) {
                  setBackArrow(true)
                }
              }
            }}
          >
            <svg
              width="30"
              height="26"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.03406 0.83L11.1361 5.044V5.156L7.03406 9.37L6.26406 8.6L9.23207 5.646H0.776064V4.554H9.23207L6.26406 1.6L7.03406 0.83Z"
                fill="#272822"
              />
            </svg>
          </div>

          <div className={styles['benefits-section']} ref={benefitsSectionRef}>
            <div className={styles['benefits-section__inner']}>
              <div className={styles['benefits-section--desktop']}>
                <div className={styles['benefits-section__row']}>
                  <div className={styles['benefits-section__col']}>
                    <div
                      className={styles['benefits-section__title']}
                      ref={(ref) => {
                        if (ref) benefitsTitleRef.current[0] = ref
                      }}
                    >
                      NFT MARKETPLACES
                    </div>
                  </div>
                  <div className={styles['benefits-section__col']}>
                    <div
                      className={styles['benefits-section__text']}
                      ref={(ref) => {
                        if (ref) benefitsSubTitleRef.current[0] = ref
                      }}
                    >
                      DEPLOY YOUR OWN MARKETPLACE IN UNDER 30 DAYS AND ACCEPT
                      CREDIT CARD PAYMENTS
                    </div>
                  </div>
                </div>

                <div className={styles['benefits-section__row']}>
                  <div className={styles['benefits-section__col']}>
                    <div
                      className={styles['benefits-section__title']}
                      ref={(ref) => {
                        if (ref) benefitsTitleRef.current[1] = ref
                      }}
                    >
                      LOYALTY PROGRAMS
                    </div>
                  </div>
                  <div className={styles['benefits-section__col']}>
                    <div
                      className={styles['benefits-section__text']}
                      ref={(ref) => {
                        if (ref) benefitsSubTitleRef.current[1] = ref
                      }}
                    >
                      DIGITIZE YOUR REWARDS PROGRAM TO INCREASE ENGAGEMENT AND
                      RETENTION
                    </div>
                  </div>
                </div>

                <div className={styles['benefits-section__row']}>
                  <div className={styles['benefits-section__col']}>
                    <div
                      className={styles['benefits-section__title']}
                      ref={(ref) => {
                        if (ref) benefitsTitleRef.current[2] = ref
                      }}
                    >
                      TRADING PLATFORMS
                    </div>
                  </div>
                  <div className={styles['benefits-section__col']}>
                    <div
                      className={styles['benefits-section__text']}
                      ref={(ref) => {
                        if (ref) benefitsSubTitleRef.current[2] = ref
                      }}
                    >
                      CREATE A TRADING PLATFORMS FOR USERS TO BUY, SELL, AND
                      HOLD DIGITIZED GOODS
                    </div>
                  </div>
                </div>

                <div className={styles['benefits-section__row']}>
                  <div className={styles['benefits-section__col']}>
                    <div
                      className={styles['benefits-section__title']}
                      ref={(ref) => {
                        if (ref) benefitsTitleRef.current[3] = ref
                      }}
                    >
                      PLAY-TO-EARN GAMES
                    </div>
                  </div>
                  <div className={styles['benefits-section__col']}>
                    <div
                      className={styles['benefits-section__text']}
                      ref={(ref) => {
                        if (ref) benefitsSubTitleRef.current[3] = ref
                      }}
                    >
                      HARNESS MASSIVE USER ATTENTION THROUGH FUN P2E GAMES BUILT
                      IN UNITY
                    </div>
                  </div>
                </div>

                <div className={styles['benefits-section__row']}>
                  <div className={styles['benefits-section__col']}>
                    <div
                      className={styles['benefits-section__title']}
                      ref={(ref) => {
                        if (ref) benefitsTitleRef.current[4] = ref
                      }}
                    >
                      METAVERSE BUILDS
                    </div>
                  </div>
                  <div className={styles['benefits-section__col']}>
                    <div
                      className={styles['benefits-section__text']}
                      ref={(ref) => {
                        if (ref) benefitsSubTitleRef.current[4] = ref
                      }}
                    >
                      CREATE METAVERSE EXPERIENCES THAT ADD TO YOUR BRAND'S
                      VALUE PROPOSITION
                    </div>
                  </div>
                </div>
              </div>
              {/* mobile */}
              <div className={styles['benefits-section--mobile']}>
                {sectionArray[curretnIndex].map((data, index) => {
                  return (
                    <Fragment key={index}>
                      <div className={styles['benefits-section__row']}>
                        <div
                          className={styles['benefits-section__title']}
                          ref={(ref) => {
                            if (ref)
                              clientsMobileItemLogoRef.current[index] = ref
                          }}
                        >
                          {data.title}
                        </div>
                        <div
                          className={styles['benefits-section__text']}
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
                })}
              </div>
            </div>
          </div>

          <div
            className={styles['services-page__process-title']}
            ref={processTitleMainRef}
          >
            <span ref={processTitle1Ref}>Our</span>
            <span ref={processTitle2Ref}>Process</span>
          </div>

          <div className={styles['process-section']} ref={processSectionRef}>
            <div className={styles['process-section__inner']}>
              <div className={styles['process-section__block']}>
                <div
                  className={styles['process-section__note']}
                  ref={(ref) => {
                    if (ref) processNoteRef.current[0] = ref
                  }}
                >
                  STUDY <span>I</span>
                </div>
                <div
                  className={styles['process-section__title']}
                  ref={(ref) => {
                    if (ref) processBlockTitleRef.current[0] = ref
                  }}
                >
                  WE STUDY YOUR UNIQUE BUSINESS REQUIREMENTS AND BUILD SOFTWARE
                  TO FIT YOUR BUSINESS GOAL
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

              <div className={styles['process-section__block']}>
                <div
                  className={styles['process-section__note']}
                  ref={(ref) => {
                    if (ref) processNoteRef.current[1] = ref
                  }}
                >
                  DEPLOY <span>II</span>
                </div>
                <div
                  className={styles['process-section__title']}
                  ref={(ref) => {
                    if (ref) processBlockTitleRef.current[1] = ref
                  }}
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

              <div className={styles['process-section__block']}>
                <div
                  className={styles['process-section__note']}
                  ref={(ref) => {
                    if (ref) processNoteRef.current[2] = ref
                  }}
                >
                  MANAGE <span>III</span>
                </div>
                <div
                  className={styles['process-section__title']}
                  ref={(ref) => {
                    if (ref) processBlockTitleRef.current[2] = ref
                  }}
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
        </div>
      </div>
    </Layout>
  )
}

export default Services
