import type { NextPage } from 'next'

import React, {
  Fragment,
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { gsap, Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import cx from 'classnames'
import { useRouter } from 'next/router'

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
import Link from 'next/link'

interface PageProps {
  loaded: boolean
  isMenuOpen: boolean
  setIsMenuOpen: (data: boolean) => void
}

const linkArray = [
  'https://www.nasdaq.com/articles/exploring-the-next-frontier-of-nfts',
  'https://www.cmcmarkets.com/en/opto/nfts-to-act-as-loyalty-stamps-for-brands',
  'https://www.nasdaq.com/articles/ukraines-crypto-donation-triumph-offers-glimpse-into-the-future-of-giving',
  'https://restauranttechnologynews.com/2022/05/restaurants-are-the-next-frontier-for-nfts-here-are-some-considerations-and-recommendations/',
  'https://www.amazon.com/dp/B09K2MFPWX',
  'https://blocktelegraph.io/jonathan-teplitsky-ceo-of-pipeflare-talks-about-a-better-deal-for-game-developers-and-the-democratizing-nfts/',
]

const AboutDesktop: NextPage<PageProps> = ({
  loaded,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  gsap.registerPlugin(ScrollTrigger)

  const router = useRouter()
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  // start comman variable -- for animation
  let topOur = '12.5%'
  let leftOur = '7.5%'
  let topVision = '87.7%'
  let rightVision = '0%'
  let lefttVision = '88%'
  let topTeamOur = '12%'
  let leftTeamOur = '10.8%'
  let topTeamTeam = '89.7%'
  let rightTeamTeam = '0%'
  let bgEndRotate = -42
  let bgLeft = '3%'
  let bgTop = '4%'
  let bgRotate = 12
  let bgBackTop = '4%'
  let bgPrevLeft = '3%'

  let teamArray = [
    [
      {
        name: 'JONATHAN TEPLITSKY',
        linkedinLink: 'https://www.linkedin.com/in/jonathanteplitsky/',
        position: 'CEO & TEAM LEAD',
        description:
          'JONATHAN HOLDS AN MBA FROM HARVARD BUSINESS SCHOOL AND HAS 10+ YEARS OF MARKETING EXPERIENCE.',
      },
      {
        name: 'MAY LUNAWONG',
        linkedinLink:
          'https://www.linkedin.com/in/nutchara-lunawong-954183190/',
        position: 'PRODUCT MANAGER',
        description:
          'MAY IS A PRODUCT MANAGER WITH A BACKGROUND IN PRODUCT MANAGEMENT OF TELECOMMUNICATION TECHNOLOGY FOR OVER 7+ YEARS.',
      },
      {
        name: 'ROBERT VIGLIONE',
        linkedinLink: 'https://www.linkedin.com/in/robert-viglione-2780634/',
        position: 'COMPANY ADVISOR',
        description:
          'CEO AND CO-FOUNDER OF HORIZEN AND HORIZEN LABS. FORMER US AIR FORCE PHYSICIST AND MILITARY INTELLIGENCE. BA IN PHYSICS, MBA AND PHD IN FINANCE.',
      },
    ],
    [
      {
        name: 'LIAT AARONSON',
        linkedinLink: 'https://www.linkedin.com/in/liataaronson/',
        position: 'COMPANY ADVISOR',
        description:
          'COO AT HORIZEN LABS, HIGH-GROWTH BLOCKCHAIN STARTUP. INVESTMENT PARTNER IN VC FUND AND FORMER M&A LAWYER RAN ACADEMIC ACCELERATOR FOR SAM ZELL AT IDC HERZLIYA.',
      },
      {
        name: 'DEAN STEINBECK',
        linkedinLink: 'https://www.linkedin.com/in/dean-steinbeck/',
        position: 'COMPANY ADVISOR',
        description:
          'PRESIDENT AND GENERAL COUNSEL OF HORIZEN LABS. 15 YEARS REPRESENTING VC-BACKED SOFTWARE DEVELOPMENT COMPANIES WITH A FOCUS ON DATA.',
      },
      {
        name: 'ROSARIO PABST',
        linkedinLink: 'https://www.linkedin.com/in/rosario-pabst/',
        position: 'COMPANY ADVISOR',
        description:
          'SENIOR EXECUTIVE AT HORIZEN. OVER 10 YEARS IN SOFTWARE PROGRAM MANAGEMENT. BS IN PUBLIC ADMINISTRATION AND MS IN SYSTEMS ENGINEERING.',
      },
    ],
  ]
  const [curretnIndex, setCurrentIndex] = useState(0)
  const [backArrow, setBackArrow] = useState(false)
  // end comman variable
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
  const leftToRightScroll = useRef<any>([])

  const teamSectionRef = useRef() as MutableRefObject<HTMLDivElement>
  const teamMemberTitleRef = useRef<HTMLDivElement[]>([])
  const teamMemberSubTitleRef = useRef<HTMLDivElement[]>([])
  const teamMemberDescriptionRef = useRef<HTMLDivElement[]>([])
  const teamMemberSocialRef = useRef<HTMLDivElement[]>([])
  const partnersRef = useRef(null)
  const [isMobileScreen, setisMobileScreen] = useState<boolean>(false)

  const isReloadAnimation = useSelector(
    (state: RootState) => state.common.reloadAnimation
  )

  var mediaQueries = [
    { id: 'x-small', media: '(max-width: 400px)' },
    { id: 'small', media: '(min-width: 400px) and (max-width: 700px)' },
    { id: 'medium', media: '(min-width: 700px) and (max-width: 1000px)' },
    { id: 'large', media: '(min-width: 1000px) and (max-width: 1300px)' },
    { id: 'x-large', media: '(min-width: 1300px)' },
  ]



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
          delay: 2,
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

        // let topOur = '12.5%'
        // let leftOur = '13.8%'
        // let topVision = '87.7%'
        // let rightVision = '7%'
        if (isMobile && isDesktopHeight) {
          setisMobileScreen(true)
          topOur = '1%'
          leftOur = '12.5%'
          topVision = '81.7%'
          rightVision = '0%'
          lefttVision = '79%'
          topTeamOur = '0%'
          leftTeamOur = '10.8%'
          topTeamTeam = '86.7%'
          rightTeamTeam = '0%'
          bgEndRotate = -85
          bgLeft = '-25%'
        } else {
          if (isDesktopHeight) {
            topOur = '17.5%'
            leftOur = '7.5%'
            topVision = '81.7%'
            rightVision = '7%'
            lefttVision = '79%'
            topTeamOur = '0%'
            leftTeamOur = '10.8%'
            topTeamTeam = '96.7%'
            rightTeamTeam = '0%'
          }
          if (isDesktop) {
            topOur = '12.5%'
            leftOur = '7.5%'
            topVision = '87.7%'
            rightVision = '0%'
            lefttVision = '88%'
            topTeamOur = '12%'
            leftTeamOur = '10.8%'
            topTeamTeam = '89.7%'
            rightTeamTeam = '0%'
          }
          if (isMobile) {
            setisMobileScreen(true)
            topOur = '1%'
            leftOur = '17.8%'
            topVision = '93.7%'
            rightVision = '7%'
            lefttVision = '79%'
            topTeamOur = '-2.5%'
            leftTeamOur = '9.8%'
            topTeamTeam = '95%'
            rightTeamTeam = '0%'
            bgEndRotate = -98
            bgLeft = '0%'
            bgTop = '3.5%'
            bgRotate = 25
            bgBackTop = '6%'
            bgPrevLeft = '-10%'
          }
        }

        tl.set(ourVisionTextRef.current, { autoAlpha: 1 })
          .set(visionTextRef.current, { autoAlpha: 1 })
          .fromTo(
            ourVisionTextRef.current,
            { left: '50%', top: '50%', xPercent: -175, yPercent: -50 },
            {
              left: leftOur,
              top: topOur,
              xPercent: -50,
              yPercent: -50,
              duration: 2.5,
              delay: 1,
            }
          )
          .fromTo(
            visionTextRef.current,
            { left: '50%', top: '50%', xPercent: 0, yPercent: -50 },
            {
              // right: rightVision,
              left: lefttVision,
              top: topVision,
              xPercent: -50,
              yPercent: -50,
              duration: 2.5,
            },
            '<'
          )
      }
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
  }, [visionTextRef, loaded])

  const onPrevSection = () => {
    const tl = gsap.timeline()

    // Hide Team Section
    tl.set(titlesRef.current, { clearProps: 'all' })
      .set(titlesRef.current, { autoAlpha: 0 })
      .set('.ticker-items', { opacity: 0 })
      .set(leftToRightScroll.current, { opacity: 0, borderTop: 'none' })
      .to('.ticker-items', {
        duration: 22,
        xPercent: -85,
        ease: Power0.easeNone,
        repeat: -1,
        opacity: 0,
      })
      .fromTo(
        navNextButtonRef.current,
        { opacity: 0, display: 'none' },
        { opacity: 1, display: 'block' },
        '<'
      )
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
        { rotate: bgEndRotate, left: bgLeft, top: bgBackTop },
        { rotate: bgRotate, duration: 1, left: bgPrevLeft },
        '<'
      )
      .to(teamTitle1Ref.current, { autoAlpha: 0, duration: 0.2 }, '<') // Hide "OUR" text for Team section
      .to(teamTitle2Ref.current, { autoAlpha: 0, duration: 0.2 }, '<') // Hide "TEAM" text for Team section

      // Show Vision Section
      .to(ourVisionTextRef.current, { autoAlpha: 1 }) // Show "OUR" & "TEAM" text for Team Section
      .to(visionTextRef.current, { autoAlpha: 1 }, '<')
      .fromTo(
        ourVisionTextRef.current,
        { left: '50%', top: '50%', xPercent: -175, yPercent: -50 },
        {
          left: leftOur,
          top: topOur,
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
          delay: 1,
        }
      )
      .fromTo(
        visionTextRef.current,
        { left: '55%', top: '50%', xPercent: 0, yPercent: -50 },
        {
          // right: rightVision,
          left: lefttVision,
          top: topVision,
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
    let tickerWidth =
      leftToRightScroll?.current && leftToRightScroll?.current?.offsetWidth
        ? leftToRightScroll?.current?.offsetWidth
        : 0

    let new_html =
      "<div class='ticker-items'>" +
      leftToRightScroll?.current?.innerHTML +
      '</div>'

    if (leftToRightScroll?.current?.innerHTML) {
      leftToRightScroll.current.innerHTML = new_html
      leftToRightScroll.current.innerHTML += new_html
      let tickerItems: any = document.querySelector('.ticker-items')
      tickerWidth = tickerItems?.offsetWidth
    }

    let initDuration = tickerWidth / 50
    // let target = leftToRightScroll?.current;
    // let original_html = target?.innerHTML ;
    // let new_html = "<div class='ticker-items'>" + original_html + "</div>";
    // target.innerHTML = new_html;
    // target.innerHTML += new_html;

    // let tickerWidth = document.querySelector(".ticker-items")?.offsetWidth;
    // let initDuration = tickerWidth / speed;

    tl.set(teamSectionRef.current, { clearProps: 'all' })
      .fromTo(
        navNextButtonRef.current,
        { opacity: 1, display: 'block' },
        { opacity: 0, display: 'none' },
        '<'
      )
      .fromTo(
        ourVisionTextRef.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -150,
          opacity: 0,
          duration: 0.2,
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
          duration: 0.2,
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
          rotate: bgRotate,
          left: '3%',
        },
        {
          rotate: bgEndRotate,
          duration: 1,
          left: bgLeft,
          top: bgTop,
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
          left: leftTeamOur,
          top: topTeamOur,
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
          right: rightTeamTeam,
          top: topTeamTeam,
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
      .set(leftToRightScroll.current, {
        opacity: 1,
        borderTop: '1px solid black',
        marginLeft: '-20px',
        marginRight: '-20px',
      })
      .set('.ticker-items', { opacity: 1 })
      .to('.ticker-items', {
        duration: initDuration,
        xPercent: -85,
        ease: Power0.easeNone,
        repeat: -1,
        opacity: 1,
      })
  }

  function generateRandomNumber(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1))
  }

  const redirectToLink = () => {
    const randomNumber = generateRandomNumber(0, 5)
    const a = document.createElement('a')
    a.target = '_blank'
    a.href = linkArray[randomNumber]
    a.click()
    console.log('randomNumber', randomNumber)

    // return linkArray[randomNumber].toString()
  }

  return (
    <>
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
        <div className={styles['about-page__menugroup']}>
          <div className={styles['about-page__selectedMenu']}>
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
          {isMenuOpen && (
            <div className={styles['about-page__optiongroup']}>
              <div
                onClick={() => {
                  router.push('about')
                  setIsMenuOpen(false)
                }}
                className={cx(
                  styles['about-page__optionMenu'],
                  styles['about-page__optionMenu--about']
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
                  styles['about-page__optionMenu'],
                  styles['about-page__optionMenu--services']
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
                  styles['about-page__optionMenu'],
                  styles['about-page__optionMenu--client']
                )}
              >
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
            </div>
          )}
        </div>

        <div className={styles['about-page__inner']}>
          {/* CHANGE STRUCTURE */}

          <div className={styles['about-page__next']} ref={navNextButtonRef}>
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
          <div className={styles['about-page__vision']}>
            <span ref={ourVisionTextRef}>Our</span>
            <span ref={visionTextRef}>vision</span>
          </div>
          <div className="sections-wrapper" ref={titlesRef}>
            <section className="section-title">
              <div className="section-title__inner">
                <h2 className="section-heading">
                  <div>EMPOWERING PROGRESSIVE BRANDS {!isMobileScreen && "TO"}</div>
                  <div>{isMobileScreen && "TO"} BRIDGE THE GAP INTO WEB3</div>
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
                    layout="fill"
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
            <span
              ref={teamTitle1Ref}
              className={cx(styles['about-page__logo__our'])}
            >
              Our
            </span>
            <span
              ref={teamTitle2Ref}
              className={cx(styles['about-page__logo__team'])}
            >
              Team
            </span>
          </div>

          <div className={cx(styles['about-page__team'])} ref={teamSectionRef}>
            <div className={styles['team-section']}>
              <div className={styles['team-section--desktop']}>
                <div className={styles['team-section__col']}>
                  <div className={styles['team-section__block']}>
                    <h2
                      className={styles['team-section__title']}
                      ref={(ref) => {
                        if (ref) teamMemberTitleRef.current[0] = ref
                      }}
                    >
                      JONATHAN TEPLITSKY
                      <div
                        className={styles['team-section__social']}
                        ref={(ref) => {
                          if (ref) teamMemberSocialRef.current[3] = ref
                        }}
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
                      <div
                        className={styles['team-section__social']}
                        ref={(ref) => {
                          if (ref) teamMemberSocialRef.current[3] = ref
                        }}
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
                      <div
                        className={styles['team-section__social']}
                        ref={(ref) => {
                          if (ref) teamMemberSocialRef.current[3] = ref
                        }}
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
                      <div
                        className={styles['team-section__social']}
                        ref={(ref) => {
                          if (ref) teamMemberSocialRef.current[3] = ref
                        }}
                        onClick={() => {
                          router.push(
                            'https://www.linkedin.com/in/liataaronson/'
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
                      <div
                        className={styles['team-section__social']}
                        ref={(ref) => {
                          if (ref) teamMemberSocialRef.current[3] = ref
                        }}
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
                      REPRESENTING VC-BACKED SOFTWARE DEVELOPMENT COMPANIES WITH
                      A FOCUS ON DATA.
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
                      <div
                        className={styles['team-section__social']}
                        ref={(ref) => {
                          if (ref) teamMemberSocialRef.current[3] = ref
                        }}
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
              {/* mobile */}
              <div className={styles['team-section__group-slider']}>
              <div
                  className={styles['team-section__next-slider']}
                  // ref={nextSliderArrowRef}
                  style={{
                    transform:  'rotate(180deg)' ,
                  }}
                  onClick={() => {
                    console.log('gfbsdbvhjsdbfvsdfvbsmndsfvsdvbh');
                    
                    if (backArrow) {
                      // onNextServices()
                      setCurrentIndex(curretnIndex - 1)
                      if (curretnIndex - 1 == 0) {
                        setBackArrow(false)
                      }
                    } else {
                      setCurrentIndex(curretnIndex + 1)
                      // onNextServices()
                      if (curretnIndex + 1 == 1) {
                        setBackArrow(true)
                      }
                    }
                  }}
                >
                  <svg
                    width="20px"
                    height="20px"
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
                <div className={styles['team-section--mobile']}>
                  {teamArray[curretnIndex].map((data, index) => {
                    return (
                      <Fragment key={index}>
                        <div className={styles['team-section__block']}>
                          <h2
                            className={styles['team-section__title']}
                            ref={(ref) => {
                              if (ref) teamMemberTitleRef.current[index] = ref
                            }}
                          >
                            {data.name}
                            <div
                              className={styles['team-section__social']}
                              ref={(ref) => {
                                if (ref)
                                  teamMemberSocialRef.current[index] = ref
                              }}
                              onClick={() => {
                                router.push(data.linkedinLink)
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

                          <div
                            className={styles['team-section__subtitle']}
                            ref={(ref) => {
                              if (ref)
                                teamMemberSubTitleRef.current[index] = ref
                            }}
                          >
                            {data.position}
                          </div>
                          <div
                            className={styles['team-section__description']}
                            ref={(ref) => {
                              if (ref)
                                teamMemberDescriptionRef.current[index] = ref
                            }}
                          >
                            {data.description}
                          </div>
                        </div>
                      </Fragment>
                    )
                  })}
                </div>
                <div
                  className={styles['team-section__next-slider']}
                  // ref={nextSliderArrowRef}
                  style={{
                    transform:  'rotate(0deg)' ,
                  }}
                  onClick={() => {
                    console.log('gfbsdbvhjsdbfvsdfvbsmndsfvsdvbh');
                    
                    if (backArrow) {
                      // onNextServices()
                      setCurrentIndex(curretnIndex - 1)
                      if (curretnIndex - 1 == 0) {
                        setBackArrow(false)
                      }
                    } else {
                      setCurrentIndex(curretnIndex + 1)
                      // onNextServices()
                      if (curretnIndex + 1 == 1) {
                        setBackArrow(true)
                      }
                    }
                  }}
                >
                  <svg
                    width="20px"
                    height="20px"
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
              </div>
            </div>
          </div>

          {/* <div className={cx(styles['about-page__headline'])}>
          <div className={cx(styles['about-page__headline--content'])}>
            <span className={cx(styles['about-page__headline--subhead'])}>IN THE PRESS</span>
            <span className={cx(styles['about-page__headline--head'])}>A BETTER DEAL FOR GAME DEVELOPER</span>
          </div>
          <div  className={cx(styles['about-page__headline--content'])}>
            <span className={cx(styles['about-page__headline--subhead'])}>IN THE PRESS</span>
            <span  className={cx(styles['about-page__headline--head'])}>WHAT IS BLOCKCHAIN?</span>
          </div>
          <div className={cx(styles['about-page__headline--content'])}>
            <span className={cx(styles['about-page__headline--subhead'])}>IN THE PRESS</span>
            <span className={cx(styles['about-page__headline--head'])}>5 THINGS YOU NEED TO KNOW IN THE NFT INDUSTRY</span>
          </div>
        </div> */}
        </div>
      </div>
      <div className={styles['animatedHeadLine']}>
        <div
          onClick={() => redirectToLink()}
          style={{ cursor: 'pointer' }}
          className={cx(styles['about-page__headline'])}
          ref={leftToRightScroll}
        >
          <div className={cx(styles['about-page__headline--subhead'])}>
            IN THE PRESS
          </div>
          <div className={cx(styles['about-page__headline--head'])}>
            A BETTER DEAL FOR GAME DEVELOPER
          </div>
          <div className={cx(styles['about-page__headline--subhead'])}>
            IN THE PRESS
          </div>
          <div className={cx(styles['about-page__headline--head'])}>
            WHAT IS BLOCKCHAIN?
          </div>
        </div>
        {/* <div className={cx(styles['about-page__headline--subhead'])}>
        IN THE PRESS
        </div>
        <div className={cx(styles['about-page__headline--head'])}>
        5 THINGS YOU NEED TO KNOW IN THE NFT INDUSTRY
        </div> */}
      </div>
    </>
  )
}

export default AboutDesktop
