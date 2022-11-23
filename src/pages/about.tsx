import type { NextPage } from 'next'

import React, {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import cx from 'classnames'

import { NavLink } from '@/components/ui/NavLink'
import Layout from '@/layouts/index'

import styles from '@/styles/pages/About.module.scss'

import purpleBlock from '@/images/purple-block-p.png'
import horizenLogo from '@/images/horizen.png'
import dcgLogo from '@/images/dcg.png'
import polygonLogo from '@/images/polygon.svg'
import horizen2Logo from '@/images/horizen2.png'
import polygon2Logo from '@/images/polygon2.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { setReloadAnimation } from '@/app/slices/commonSlice'
import { useDispatch } from 'react-redux'

interface PageProps {
  loaded: boolean
}

const About: NextPage<PageProps> = ({ loaded }) => {
  gsap.registerPlugin(ScrollTrigger)

  const aboutUsContainer = useRef(null)
  const bgRef = useRef(null)
  const nextLinkRef = useRef(null)
  const logoRef = useRef<HTMLDivElement[]>([])
  const navNextButtonRef = useRef() as MutableRefObject<HTMLDivElement>

  const visionTextRef = useRef(null)
  const ourVisionTextRef = useRef(null)

  const titlesRef = useRef(null)

  const teamTitleMainRef = useRef(null)
  const teamTitle1Ref = useRef(null)
  const teamTitle2Ref = useRef(null)

  const teamSectionRef = useRef() as MutableRefObject<HTMLDivElement>
  const teamMemberTitleRef = useRef<HTMLDivElement[]>([])
  const teamMemberSubTitleRef = useRef<HTMLDivElement[]>([])
  const teamMemberDescriptionRef = useRef<HTMLDivElement[]>([])
  const teamMemberSocialRef = useRef<HTMLAnchorElement[]>([])

  const partnersRef = useRef(null)

  const isReloadAnimation = useSelector(
    (state: RootState) => state.common.reloadAnimation
  )

  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (isReloadAnimation) {
  //     onPrevSection()
  //     dispatch(setReloadAnimation(false))
  //   }
  // }, [isReloadAnimation])
  // const countBarNumber = () => {
  //   console.log(aboutUsContainer.current?.clientHeight)
  //   console.log(bgRef.current?.clientWidth)
  //   console.log(
  //     bgRef.current?.clientHeight - aboutUsContainer.current?.clientHeight + 20
  //   )
  //   console.log(
  //     aboutUsContainer.current?.clientHeight -
  //       (bgRef.current?.clientHeight - aboutUsContainer.current?.clientHeight)
  //   )
  // }

  // useLayoutEffect(() => {
  //   countBarNumber()
  // })

  useEffect(() => {
    if (!loaded) return

    const headings: any = gsap.utils.toArray('.section-heading')

    document.addEventListener('wheel', handleWheel)
    document.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd, { passive: false })

    let timer: any
    let canMoveBack = true

    const handleTeamScroll = (e: any) => {
      if (e?.currentTarget?.scrollTop <= 0) {
        timer = setTimeout(() => {
          canMoveBack = true
        }, 600)
      } else {
        clearTimeout(timer)
        canMoveBack = false
      }
    }

    teamSectionRef.current.addEventListener('scroll', handleTeamScroll, {
      passive: false,
    })

    let listening = false,
      direction = 'down',
      current: any,
      next = 0

    navNextButtonRef.current.addEventListener('click', onClickNextButton)
    const touch = {
      startX: 0,
      startY: 0,
      dx: 0,
      dy: 0,
      startTime: 0,
      dt: 0,
    }

    const tlDefaults = {
      ease: 'slow.inOut',
      duration: 1,
    }

    function revealSectionHeading() {
      const tl = gsap.timeline()
      return tl
        .to(headings[next], {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          delay: 3,
          ease: 'power2',
        })
        .to(
          partnersRef.current,
          { autoAlpha: 1, y: 0, duration: 1, ease: 'power2' },
          '<'
        )
    }

    // Slides a section in on scroll up
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

    function onClickNextButton() {
      if (current < headings.length - 1) {
        next = current + 1
        slideIn()
      } else if (current === headings.length - 1) {
        onNextSection()
        setTimeout(() => (listening = true), 5000)
        current += 1
      }
    }

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

    function handleWheel(e: any) {
      if (!listening) return
      direction = e.wheelDeltaY < 0 ? 'down' : 'up'
      handleDirection()
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

    slideIn()

    const tl = gsap.timeline()

    tl.set(ourVisionTextRef.current, { autoAlpha: 1 })
      .set(visionTextRef.current, { autoAlpha: 1 })
      .fromTo(
        ourVisionTextRef.current,
        { left: '50%', top: '50%', xPercent: -175, yPercent: -50 },
        {
          left: '13.8%',
          top:
            bgRef.current?.clientHeight -
            aboutUsContainer.current?.clientHeight +
            20,
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
          delay: 1,
        }
      )
      .fromTo(
        visionTextRef.current,
        { right: '50%', top: '50%', xPercent: 125, yPercent: -50 },
        {
          right: '7%',
          top:
            aboutUsContainer.current?.clientHeight -
            (bgRef.current?.clientHeight -
              aboutUsContainer.current?.clientHeight),
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
        },
        '<'
      )

    return () => {
      tl.kill()

      document.removeEventListener('wheel', handleWheel)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)

      if (teamSectionRef?.current) {
        teamSectionRef.current.removeEventListener('scroll', handleTeamScroll)
      }
    }
  }, [loaded])

  const onPrevSection = () => {
    const tl = gsap.timeline()

    // Hide Team Section
    tl.set(titlesRef.current, { clearProps: 'all' })
      .set(titlesRef.current, { autoAlpha: 0 })
      .fromTo(navNextButtonRef.current, { opacity: 0 }, { opacity: 1 }, '<')
      .fromTo(
        // Hide the Team Section
        teamSectionRef.current,
        { autoAlpha: 1, y: 0, pointerEvents: 'auto' },
        { autoAlpha: 0, y: -200, pointerEvents: 'none' },
        '<'
      )
      .fromTo(
        // Rotate the Background
        bgRef.current,
        { rotate: -45, left: '6%' },
        { rotate: 12, duration: 1, left: '3%' },
        '<'
      )
      .to(teamTitle1Ref.current, { autoAlpha: 0, duration: 0.2 }, '<') // Hide "OUR" text for Team section
      .to(teamTitle2Ref.current, { autoAlpha: 0, duration: 0.2 }, '<') // Hide "TEAM" text for Team section

      // Show Vision Section
      .to(ourVisionTextRef.current, { autoAlpha: 1 }) // Show "OUR" & "TEAM" text for Team Section
      .to(visionTextRef.current, { autoAlpha: 1 }, '<')
      .fromTo(
        // move "OUR" text
        ourVisionTextRef.current,
        { left: '50%', top: '50%', xPercent: -175, yPercent: -50 },
        {
          left: '13.8%',
          top:
            aboutUsContainer.current?.clientHeight -
            bgRef.current?.clientHeight,
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
        }
      )
      .fromTo(
        visionTextRef.current,
        { right: '50%', top: '50%', xPercent: 125, yPercent: -50 },
        {
          right: '7%',
          top: '89.7%',
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
        },
        '<'
      )
      .to(titlesRef.current, { autoAlpha: 1 })
  }

  const onNextSection = () => {
    const tl = gsap.timeline()

    tl.set(teamSectionRef.current, { clearProps: 'all' })
      .fromTo(navNextButtonRef.current, { opacity: 1 }, { opacity: 0 }, '<')
      .fromTo(
        ourVisionTextRef.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -150,
          opacity: 0,
          duration: 0.5,
        },
        '<'
      )
      .fromTo(
        visionTextRef.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -150,
          opacity: 0,
          duration: 0.5,
        },
        '<'
      )
      .fromTo(
        titlesRef.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -150,
          opacity: 0,
          duration: 0.5,
        },
        '<'
      )
      .fromTo(
        bgRef.current,
        {
          rotate: 12,
          left: '3%',
        },
        {
          rotate: -45,
          duration: 1,
          left: '6%',
        },
        '<'
      )

      .set(teamTitle1Ref.current, { autoAlpha: 1 })
      .set(teamTitle2Ref.current, { autoAlpha: 1 })

      .fromTo(
        teamTitle1Ref.current,
        {
          left: '50%',
          top: '50%',
          xPercent: -150,
          yPercent: -50,
        },
        {
          left: '10.8%',
          top: '12%',
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
          delay: 1,
        }
      )
      .fromTo(
        teamTitle2Ref.current,
        {
          right: '50%',
          top: '50%',
          xPercent: 155,
          yPercent: -50,
        },
        {
          right: '0%',
          // left: 0,
          top: '89.7%',
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
        },
        '<'
      )
      .fromTo(
        teamSectionRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        },
        '<'
      )
      .fromTo(
        teamSectionRef.current,
        {
          pointerEvents: 'none',
        },
        {
          pointerEvents: 'auto',
        },
        '<'
      )
      .fromTo(
        teamMemberTitleRef.current,
        {
          y: 200,
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
        teamMemberSubTitleRef.current,
        {
          y: 200,
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
        teamMemberDescriptionRef.current,
        {
          y: 200,
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
        teamMemberSocialRef.current,
        {
          y: 200,
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
        teamSectionRef.current,
        {
          overflowY: 'none',
          zIndex: 1,
        },
        {
          overflowY: 'auto',
          zIndex: 999,
        },
        '<'
      )
      .set(titlesRef.current, { pointerEvents: 'none', zIndex: -1 })
      .to(
        nextLinkRef.current,
        {
          zIndex: 1000,
        },
        '<'
      )

      .set(ourVisionTextRef.current, { clearProps: 'all' })
      .set(visionTextRef.current, { clearProps: 'all' })
  }

  return (
    <Layout>
      <div
        className={cx(styles['about-page'], { [styles[`is-loaded`]]: loaded })}
        ref={aboutUsContainer}
      >
        <div
          className={styles['about-page__bg']}
          // style={{ backgroundImage: `url(${purpleBlock.src})` }}
          ref={bgRef}
        >
          <Image src={purpleBlock.src} alt="bg_about" layout="fill" />
        </div>
        <div className={styles['about-page__vision']}>
          <span ref={ourVisionTextRef}>Our</span>
          <span ref={visionTextRef}>vision</span>
        </div>
        <div className={styles['about-page__inner']}>
          <div className={styles['about-page__next']} ref={navNextButtonRef}>
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

          <div className="sections-wrapper" ref={titlesRef}>
            <section className="section-title">
              <div className="section-title__inner">
                <h2 className="section-heading">
                  <div>EMPOWERING PROGRESSIVE BRANDS TO</div>
                  <div>BRIDGE THE GAP INTO WEB3</div>
                </h2>
              </div>
            </section>

            <section className="section-title">
              <div className="section-title__inner">
                <h2 className="section-heading">
                  WE ARE WORLD-LEADING DEVELOPERS
                </h2>
              </div>
            </section>

            <section className="section-title">
              <div className="section-title__inner">
                <h2 className="section-heading">
                  <div>BACKED BY THE LARGEST INVESTORS</div>
                  <div>IN CRYPTO</div>
                </h2>
              </div>
            </section>

            <div
              className={cx(styles['about-page__partners'])}
              ref={partnersRef}
            >
              <div className={cx(styles['about-page__partners-images'])}>
                <div
                  ref={(ref) => {
                    if (ref) logoRef.current[0] = ref
                  }}
                  className={cx(styles['about-page__partners-images-div'])}
                >
                  <Image
                    src={horizenLogo.src}
                    alt="Horizen Labs"
                    width={240}
                    height={95}
                    objectFit="contain"
                  />
                </div>
                <div
                  ref={(ref) => {
                    if (ref) logoRef.current[1] = ref
                  }}
                  className={cx(styles['about-page__partners-images-div'])}
                >
                  <Image
                    src={dcgLogo.src}
                    alt="Digital Currency Group"
                    width={160}
                    height={111}
                    objectFit="contain"
                  />
                </div>
                <div
                  ref={(ref) => {
                    if (ref) logoRef.current[2] = ref
                  }}
                  className={cx(styles['about-page__partners-images-div'])}
                >
                  <Image
                    src={polygonLogo.src}
                    alt="Polygon"
                    width={195}
                    height={92}
                    objectFit="contain"
                  />
                </div>
                <div
                  ref={(ref) => {
                    if (ref) logoRef.current[3] = ref
                  }}
                  className={cx(styles['about-page__partners-images-div'])}
                >
                  <Image
                    src={horizen2Logo.src}
                    alt="Horizen"
                    width={175}
                    height={125}
                    objectFit="contain"
                  />
                </div>
                <div
                  ref={(ref) => {
                    if (ref) logoRef.current[4] = ref
                  }}
                  className={cx(styles['about-page__partners-images-div'])}
                >
                  <Image
                    src={polygon2Logo.src}
                    alt="Polygon Studios"
                    width={208}
                    height={88}
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={styles['about-page__team-title']}
            ref={teamTitleMainRef}
          >
            <span ref={teamTitle1Ref}>Our</span>
            <span ref={teamTitle2Ref}>Team</span>
          </div>

          <div className={cx(styles['about-page__team'])} ref={teamSectionRef}>
            <div className={styles['team-section']}>
              <div className={styles['team-section__col']}>
                <div className={styles['team-section__block']}>
                  <h2
                    className={styles['team-section__title']}
                    ref={(ref) => {
                      if (ref) teamMemberTitleRef.current[0] = ref
                    }}
                  >
                    JONATHAN TEPLITSKY
                    <a
                      href="https://www.linkedin.com/in/jonathanteplitsky/"
                      className={styles['team-section__social']}
                      ref={(ref) => {
                        if (ref) teamMemberSocialRef.current[3] = ref
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </a>
                  </h2>
                  <div
                    className={styles['team-section__subtitle']}
                    ref={(ref) => {
                      if (ref) teamMemberSubTitleRef.current[0] = ref
                    }}
                  >
                    CEO & TEAM LEAD
                  </div>
                  <div
                    className={styles['team-section__description']}
                    ref={(ref) => {
                      if (ref) teamMemberDescriptionRef.current[0] = ref
                    }}
                  >
                    JONATHAN HOLDS AN MBA FROM HARVARD BUSINESS SCHOOL AND HAS
                    10+ YEARS OF MARKETING EXPERIENCE.
                  </div>
                </div>

                <div className={styles['team-section__block']}>
                  <h2
                    className={styles['team-section__title']}
                    ref={(ref) => {
                      if (ref) teamMemberTitleRef.current[1] = ref
                    }}
                  >
                    MAY LUNAWONG
                    <a
                      href="https://www.linkedin.com/in/nutchara-lunawong-954183190/"
                      className={styles['team-section__social']}
                      ref={(ref) => {
                        if (ref) teamMemberSocialRef.current[3] = ref
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </a>
                  </h2>
                  <div
                    className={styles['team-section__subtitle']}
                    ref={(ref) => {
                      if (ref) teamMemberSubTitleRef.current[1] = ref
                    }}
                  >
                    PRODUCT MANAGER
                  </div>
                  <div
                    className={styles['team-section__description']}
                    ref={(ref) => {
                      if (ref) teamMemberDescriptionRef.current[1] = ref
                    }}
                  >
                    MAY IS A PRODUCT MANAGER WITH A BACKGROUND IN PRODUCT
                    MANAGEMENT OF TELECOMMUNICATION TECHNOLOGY FOR OVER 7+
                    YEARS.
                  </div>
                </div>

                <div className={styles['team-section__block']}>
                  <h2
                    className={styles['team-section__title']}
                    ref={(ref) => {
                      if (ref) teamMemberTitleRef.current[2] = ref
                    }}
                  >
                    ROBERT VIGLIONE
                    <a
                      href="https://www.linkedin.com/in/robert-viglione-2780634/"
                      className={styles['team-section__social']}
                      ref={(ref) => {
                        if (ref) teamMemberSocialRef.current[3] = ref
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </a>
                  </h2>
                  <div
                    className={styles['team-section__subtitle']}
                    ref={(ref) => {
                      if (ref) teamMemberSubTitleRef.current[2] = ref
                    }}
                  >
                    COMPANY ADVISOR
                  </div>
                  <div
                    className={styles['team-section__description']}
                    ref={(ref) => {
                      if (ref) teamMemberDescriptionRef.current[2] = ref
                    }}
                  >
                    CEO AND CO-FOUNDER OF HORIZEN AND HORIZEN LABS. FORMER US
                    AIR FORCE PHYSICIST AND MILITARY INTELLIGENCE. BA IN
                    PHYSICS, MBA AND PHD IN FINANCE.
                  </div>
                </div>
              </div>

              <div className={styles['team-section__col']}>
                <div className={styles['team-section__block']}>
                  <h2
                    className={styles['team-section__title']}
                    ref={(ref) => {
                      if (ref) teamMemberTitleRef.current[3] = ref
                    }}
                  >
                    LIAT AARONSON
                    <a
                      href="https://www.linkedin.com/in/liataaronson/"
                      className={styles['team-section__social']}
                      ref={(ref) => {
                        if (ref) teamMemberSocialRef.current[3] = ref
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </a>
                  </h2>

                  <div
                    className={styles['team-section__subtitle']}
                    ref={(ref) => {
                      if (ref) teamMemberSubTitleRef.current[3] = ref
                    }}
                  >
                    COMPANY ADVISOR
                  </div>
                  <div
                    className={styles['team-section__description']}
                    ref={(ref) => {
                      if (ref) teamMemberDescriptionRef.current[3] = ref
                    }}
                  >
                    COO AT HORIZEN LABS, HIGH-GROWTH BLOCKCHAIN STARTUP.
                    INVESTMENT PARTNER IN VC FUND AND FORMER M&A LAWYER RAN
                    ACADEMIC ACCELERATOR FOR SAM ZELL AT IDC HERZLIYA.
                  </div>
                </div>

                <div className={styles['team-section__block']}>
                  <h2
                    className={styles['team-section__title']}
                    ref={(ref) => {
                      if (ref) teamMemberTitleRef.current[5] = ref
                    }}
                  >
                    DEAN STEINBECK
                    <a
                      href="https://www.linkedin.com/in/dean-steinbeck/"
                      className={styles['team-section__social']}
                      ref={(ref) => {
                        if (ref) teamMemberSocialRef.current[3] = ref
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </a>
                  </h2>
                  <div
                    className={styles['team-section__subtitle']}
                    ref={(ref) => {
                      if (ref) teamMemberSubTitleRef.current[5] = ref
                    }}
                  >
                    COMPANY ADVISOR
                  </div>
                  <div
                    className={styles['team-section__description']}
                    ref={(ref) => {
                      if (ref) teamMemberDescriptionRef.current[5] = ref
                    }}
                  >
                    PRESIDENT AND GENERAL COUNSEL OF HORIZEN LABS. 15 YEARS
                    REPRESENTING VC-BACKED SOFTWARE DEVELOPMENT COMPANIES WITH A
                    FOCUS ON DATA.
                  </div>
                </div>

                <div className={styles['team-section__block']}>
                  <h2
                    className={styles['team-section__title']}
                    ref={(ref) => {
                      if (ref) teamMemberTitleRef.current[4] = ref
                    }}
                  >
                    ROSARIO PABST
                    <a
                      href="https://www.linkedin.com/in/rosario-pabst/"
                      className={styles['team-section__social']}
                      ref={(ref) => {
                        if (ref) teamMemberSocialRef.current[3] = ref
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </a>
                  </h2>
                  <div
                    className={styles['team-section__subtitle']}
                    ref={(ref) => {
                      if (ref) teamMemberSubTitleRef.current[4] = ref
                    }}
                  >
                    COMPANY ADVISOR
                  </div>
                  <div
                    className={styles['team-section__description']}
                    ref={(ref) => {
                      if (ref) teamMemberDescriptionRef.current[4] = ref
                    }}
                  >
                    SENIOR EXECUTIVE AT HORIZEN. OVER 10 YEARS IN SOFTWARE
                    PROGRAM MANAGEMENT. BS IN PUBLIC ADMINISTRATION AND MS IN
                    SYSTEMS ENGINEERING.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
