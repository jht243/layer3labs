import type { NextPage } from 'next'

import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import cx from 'classnames'

import { NavLink } from '@/components/ui/NavLink'
import Layout from '@/layouts/index'

import styles from '@/styles/pages/About.module.scss'

import purpleBlock from '@/images/purple-block.svg'
import horizenLogo from '@/images/horizen.png'
import dcgLogo from '@/images/dcg.png'
import polygonLogo from '@/images/polygon.svg'
import horizen2Logo from '@/images/horizen2.png'
import polygon2Logo from '@/images/polygon2.png'

interface PageProps {
  loaded: boolean
}

const About: NextPage<PageProps> = ({ loaded }) => {
  gsap.registerPlugin(ScrollTrigger);

  const bgRef = useRef(null);
  const nextLinkRef = useRef(null);

  const visionTextRef = useRef(null);
  const ourVisionTextRef = useRef(null);

  const titlesRef = useRef(null);

  const teamTitleMainRef = useRef(null);
  const teamTitle1Ref = useRef(null);
  const teamTitle2Ref = useRef(null);

  const teamSectionRef = useRef() as MutableRefObject<HTMLDivElement>;
  const teamMemberTitleRef = useRef<HTMLDivElement[]>([]);
  const teamMemberSubTitleRef = useRef<HTMLDivElement[]>([]);
  const teamMemberDescriptionRef = useRef<HTMLDivElement[]>([]);
  const teamMemberSocialRef = useRef<HTMLAnchorElement[]>([]);

  const partnersRef = useRef(null);


  useEffect(() => {
    if (!loaded) return

    const headings: any = gsap.utils.toArray('.section-heading');

    document.addEventListener('wheel', handleWheel);
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });

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


    teamSectionRef.current.addEventListener('scroll', handleTeamScroll, { passive: false });

    let listening = false,
        direction = 'down',
        current: any,
        next = 0;

    const touch = {
      startX: 0,
      startY: 0,
      dx: 0,
      dy: 0,
      startTime: 0,
      dt: 0
    };

    const tlDefaults = {
      ease: 'slow.inOut',
      duration: 1
    };

    function revealSectionHeading () {
      const tl = gsap.timeline()
      return tl
      .to(headings[next], {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        delay: 3,
        ease: 'power2',
      })
      .to(partnersRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power2',
      }, '<')
    }


    function showTeam () {
      onNextSection()
      setTimeout(() => {
        listening = true;
      }, 5000)
    }

    function hideTeam () {
      onPrevSection()
      setTimeout(() => {
        listening = true;
      }, 5000)
    }


    function slideIn () {
      const tl = gsap
      .timeline({
        defaults: tlDefaults,
        onComplete: () => {
          setTimeout(() => {
            listening = true;
            current = next;
          }, 500)
        }
      })
      if (current === undefined) {
        tl.add(revealSectionHeading(), 0);
      }

      if (current !== undefined) {
        tl
        .add(
            gsap
            .timeline()
            .to(headings[current], { y: -100, autoAlpha: 0, duration: 0.3 })
            .to(headings[next], { y: 0, autoAlpha: 1, duration: 0.3 }, '<+=0.5')
        );
      }

      tl.play(0);
    }

    // Slides a section out on scroll up
    function slideOut () {
      gsap
      .timeline({
        defaults: tlDefaults,
        onComplete: () => {
          setTimeout(() => {
            listening = true;
            current = next;
          }, 500)
        }
      })
      .to(headings[current], { y: 100, autoAlpha: 0, duration: 0.3 })
      .to(headings[next], { y: 0, autoAlpha: 1, duration: 0.3 }, '<+=0.5')
    }

    function handleDirection () {

      listening = false;

      if (direction === 'down') {
        if (current < headings.length - 1) {
          next = current + 1;
          slideIn();
        } else if (current === headings.length - 1) {
          showTeam()
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
          next = current - 1;
          slideOut();
        } else if (current >= headings.length && canMoveBack) {
          hideTeam()
          current -= 1
        } else {
          setTimeout(() => {
            listening = true
          }, 2000)
        }

      }
    }

    function handleWheel (e: any) {
      if (!listening) return;
      direction = e.wheelDeltaY < 0 ? 'down' : 'up';
      handleDirection();
    }

    function handleTouchStart (e: any) {
      if (!listening) return;
      const t = e.changedTouches[0];
      touch.startX = t.pageX;
      touch.startY = t.pageY;
    }

    function handleTouchMove (e: any) {
      if (!listening) return;
      e.preventDefault();
    }

    function handleTouchEnd (e: any) {
      if (!listening) return;
      const t = e.changedTouches[0];
      touch.dx = t.pageX - touch.startX;
      touch.dy = t.pageY - touch.startY;
      if (touch.dy > 10) direction = 'up';
      if (touch.dy < -10) direction = 'down';
      handleDirection();
    }

    slideIn();

    const tl = gsap.timeline()

    tl
    .set(ourVisionTextRef.current, { autoAlpha: 1 })
    .set(visionTextRef.current, { autoAlpha: 1 })
    .fromTo(
        ourVisionTextRef.current,
        {
          left: '50%',
          top: '50%',
          xPercent: -200,
          yPercent: -50,
        },
        {
          left: '14%',
          top: '8%',
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
          delay: 1,
        }
    )
    .fromTo(
        visionTextRef.current,
        {
          right: '50%',
          top: '50%',
          xPercent: 50,
          yPercent: -50,
        },
        {
          right: '8%',
          top: '80%',
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
        }, '<'
    )


    return () => {
      tl.kill()

      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);

      if (teamSectionRef?.current) {
        teamSectionRef.current.removeEventListener('scroll', handleTeamScroll);
      }
    }
  }, [loaded])


  const onPrevSection = () => {

    const tl = gsap.timeline()

    tl
    .set(titlesRef.current, { clearProps: 'all' })
    .set(titlesRef.current, { autoAlpha: 0 })
    .fromTo(
        teamSectionRef.current,
        {
          autoAlpha: 1,
          y: 0,
        },
        {
          autoAlpha: 0,
          y: -200,
        }
    )
    .fromTo(
        teamSectionRef.current,
        {
          pointerEvents: 'auto',
        },
        {
          pointerEvents: 'none',
        }, '<'
    )
    .fromTo(
        bgRef.current,
        {
          rotate: -45,
        },
        {
          rotate: 0,
          duration: 1,
        }, '<'
    )
    .to(teamTitle1Ref.current, { autoAlpha: 0 })
    .to(teamTitle2Ref.current, { autoAlpha: 0 })

    .to(ourVisionTextRef.current, { autoAlpha: 1 })
    .to(visionTextRef.current, { autoAlpha: 1 })
    .fromTo(
        ourVisionTextRef.current,
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
        visionTextRef.current,
        {
          right: '50%',
          top: '50%',
          xPercent: 50,
          yPercent: -50,
        },
        {
          right: '8%',
          // left: 0,
          top: '80%',
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
        }, '<'
    )
    .to(titlesRef.current, { autoAlpha: 1 })
  }

  const onNextSection = () => {
    const tl = gsap.timeline()

    tl
    .set(teamSectionRef.current, { clearProps: 'all' })
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
        }, '<'
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
        }, '<'
    )
    .fromTo(
        bgRef.current,
        {
          rotate: 0,
        },
        {
          rotate: -45,
          duration: 1,
        }, '<'
    )

    .set(teamTitle1Ref.current, { autoAlpha: 1 })
    .set(teamTitle2Ref.current, { autoAlpha: 1 })

    .fromTo(
        teamTitle1Ref.current,
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
        teamTitle2Ref.current,
        {
          right: '50%',
          top: '50%',
          xPercent: 50,
          yPercent: -50,
        },
        {
          right: '8%',
          // left: 0,
          top: '80%',
          xPercent: -50,
          yPercent: -50,
          duration: 2.5,
        }, '<'
    )
    .fromTo(
        teamSectionRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }, '<'
    )
    .fromTo(
        teamSectionRef.current,
        {
          pointerEvents: 'none',
        },
        {
          pointerEvents: 'auto',
        }, '<'
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
          stagger: 0.2
        }, '<+=1'
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
        }, '<+=0.05'
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
        }, '<+=0.05'
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
        }, '<+=0.05'
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
        }, '<'
    )
    .set(titlesRef.current, { pointerEvents: 'none', zIndex: -1 })
    .to(
        nextLinkRef.current,
        {
          zIndex: 1000,
        }, '<'
    )


    .set(ourVisionTextRef.current, { clearProps: 'all' })
    .set(visionTextRef.current, { clearProps: 'all' })
  }

  return (
      <Layout>
        <div
            className={cx(styles['about-page'], { [styles[`is-loaded`]]: loaded })}
        >
          <div
              className={styles['about-page__bg']}
              style={{ backgroundImage: `url(${purpleBlock.src})` }}
              ref={bgRef}
          />
          <div className={styles['about-page__inner']}>
            <div className={styles['about-page__back']}>
              <NavLink href="/">
                <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.22 22.78L12.74 25.26L0.899999 13.06L0.899999 12.66L12.74 0.459999L15.22 2.9L7.14 11.02L30.5 11.02L30.5 14.66L7.1 14.66L15.22 22.78Z"
                      fill="#272822"
                  />
                </svg>
              </NavLink>
            </div>

            <div className={styles['about-page__next']}>
              <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <div>EMPOWERING PROGRESSIVE BRANDS TO</div>
                    <div>BRIDGE THE GAP INTO WEB3</div>
                  </h2>
                </div>
              </section>

              <section className="section-title">
                <div className="section-title__inner">
                  <h2 className="section-heading">WE ARE WORLD-LEADING DEVELOPERS</h2>
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

              <div className={cx(styles['about-page__partners'])} ref={partnersRef}>
                <div className={cx(styles['about-page__partners-images'])}>
                  <img src={horizenLogo.src} alt="Horizen Labs" />
                  <img src={dcgLogo.src} alt="Digital Currency Group" />
                  <img src={polygonLogo.src} alt="Polygon" />
                  <img src={horizen2Logo.src} alt="Horizen" />
                  <img src={polygon2Logo.src} alt="Polygon Studios" />
                </div>
              </div>
            </div>

            <div className={styles['about-page__team-title']} ref={teamTitleMainRef}>
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
                          if (ref) teamMemberTitleRef.current[0] = ref;
                        }}
                    >
                      JONATHAN TEPLITSKY
                    </h2>
                    <div
                        className={styles['team-section__subtitle']}
                        ref={(ref) => {
                          if (ref) teamMemberSubTitleRef.current[0] = ref;
                        }}
                    >
                      CEO & TEAM LEAD
                    </div>
                    <div
                        className={styles['team-section__description']}
                        ref={(ref) => {
                          if (ref) teamMemberDescriptionRef.current[0] = ref;
                        }}
                    >
                      JONATHAN HOLDS AN MBA FROM HARVARD BUSINESS SCHOOL AND HAS 10+ YEARS OF MARKETING EXPERIENCE.
                    </div>
                    <a
                        href="#." className={styles['team-section__social']}
                        ref={(ref) => {
                          if (ref) teamMemberSocialRef.current[0] = ref;
                        }}
                    >

                      LINKEDIN
                      <span>
                      <svg width="18" height="18" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M13.4385 11.591L13.6388 8.08952L30.5953 9.31415L30.8616 9.61268L30.1452 26.5983L26.6703 26.428L27.2961 14.9899L9.86197 30.5379L7.43924 27.8213L24.9032 12.2467L13.4385 11.591Z"
                          fill="#272822"
                      />
                    </svg>
                  </span>
                    </a>
                  </div>

                  <div className={styles['team-section__block']}>
                    <h2
                        className={styles['team-section__title']}
                        ref={(ref) => {
                          if (ref) teamMemberTitleRef.current[1] = ref;
                        }}
                    >
                      MAY LUNAWONG
                    </h2>
                    <div
                        className={styles['team-section__subtitle']}
                        ref={(ref) => {
                          if (ref) teamMemberSubTitleRef.current[1] = ref;
                        }}
                    >
                      PRODUCT MANAGER
                    </div>
                    <div
                        className={styles['team-section__description']}
                        ref={(ref) => {
                          if (ref) teamMemberDescriptionRef.current[1] = ref;
                        }}
                    >
                      MAY IS A PRODUCT MANAGER WITH A BACKGROUND IN PRODUCT MANAGEMENT OF
                      TELECOMMUNICATION TECHNOLOGY FOR OVER 7+ YEARS.
                    </div>
                    <a
                        href="#." className={styles['team-section__social']}
                        ref={(ref) => {
                          if (ref) teamMemberSocialRef.current[1] = ref;
                        }}
                    >

                      LINKEDIN
                      <span>
                          <svg width="18" height="18" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.4385 11.591L13.6388 8.08952L30.5953 9.31415L30.8616 9.61268L30.1452 26.5983L26.6703 26.428L27.2961 14.9899L9.86197 30.5379L7.43924 27.8213L24.9032 12.2467L13.4385 11.591Z"
                              fill="#272822"
                          />
                          </svg>
                      </span>
                    </a>
                  </div>

                  <div className={styles['team-section__block']}>
                    <h2
                        className={styles['team-section__title']}
                        ref={(ref) => {
                          if (ref) teamMemberTitleRef.current[2] = ref;
                        }}
                    >
                      ROBERT VIGLIONE
                    </h2>
                    <div
                        className={styles['team-section__subtitle']}
                        ref={(ref) => {
                          if (ref) teamMemberSubTitleRef.current[2] = ref;
                        }}
                    >
                      COMPANY ADVISOR
                    </div>
                    <div
                        className={styles['team-section__description']}
                        ref={(ref) => {
                          if (ref) teamMemberDescriptionRef.current[2] = ref;
                        }}
                    >
                      CEO AND CO-FOUNDER OF HORIZEN AND HORIZEN LABS.
                      FORMER US AIR FORCE PHYSICIST AND MILITARY INTELLIGENCE. BA IN PHYSICS, MBA AND PHD IN FINANCE.
                    </div>
                    <a
                        href="#." className={styles['team-section__social']}
                        ref={(ref) => {
                          if (ref) teamMemberSocialRef.current[2] = ref;
                        }}
                    >
                      LINKEDIN
                      <span>
                      <svg width="18" height="18" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M13.4385 11.591L13.6388 8.08952L30.5953 9.31415L30.8616 9.61268L30.1452 26.5983L26.6703 26.428L27.2961 14.9899L9.86197 30.5379L7.43924 27.8213L24.9032 12.2467L13.4385 11.591Z"
                          fill="#272822"
                      />
                    </svg>
                  </span>
                    </a>
                  </div>

                  <div className={styles['team-section__block']}>
                    <h2
                        className={styles['team-section__title']}
                        ref={(ref) => {
                          if (ref) teamMemberTitleRef.current[4] = ref;
                        }}
                    >
                      ROSARIO PABST
                    </h2>
                    <div
                        className={styles['team-section__subtitle']}
                        ref={(ref) => {
                          if (ref) teamMemberSubTitleRef.current[4] = ref;
                        }}
                    >
                      COMPANY ADVISOR
                    </div>
                    <div
                        className={styles['team-section__description']}
                        ref={(ref) => {
                          if (ref) teamMemberDescriptionRef.current[4] = ref;
                        }}
                    >
                      SENIOR EXECUTIVE AT HORIZEN. OVER 10 YEARS IN SOFTWARE PROGRAM MANAGEMENT.
                      BS IN PUBLIC ADMINISTRATION AND MS IN SYSTEMS ENGINEERING.
                    </div>
                    <a
                        href="#." className={styles['team-section__social']}
                        ref={(ref) => {
                          if (ref) teamMemberSocialRef.current[4] = ref;
                        }}
                    >

                      LINKEDIN
                      <span>
                      <svg width="18" height="18" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M13.4385 11.591L13.6388 8.08952L30.5953 9.31415L30.8616 9.61268L30.1452 26.5983L26.6703 26.428L27.2961 14.9899L9.86197 30.5379L7.43924 27.8213L24.9032 12.2467L13.4385 11.591Z"
                          fill="#272822"
                      />
                    </svg>
                  </span>
                    </a>
                  </div>
                </div>

                <div className={styles['team-section__col']}>
                  

                  <div className={styles['team-section__block']}>
                    <h2
                        className={styles['team-section__title']}
                        ref={(ref) => {
                          if (ref) teamMemberTitleRef.current[3] = ref;
                        }}
                    >
                      LIAT AARONSON
                    </h2>
                    <div
                        className={styles['team-section__subtitle']}
                        ref={(ref) => {
                          if (ref) teamMemberSubTitleRef.current[3] = ref;
                        }}
                    >
                      COMPANY ADVISOR
                    </div>
                    <div
                        className={styles['team-section__description']}
                        ref={(ref) => {
                          if (ref) teamMemberDescriptionRef.current[3] = ref;
                        }}
                    >
                      COO AT HORIZEN LABS, HIGH-GROWTH BLOCKCHAIN STARTUP. INVESTMENT PARTNER IN VC FUND AND
                      FORMER M&A LAWYER RAN ACADEMIC ACCELERATOR FOR SAM ZELL AT IDC HERZLIYA.
                    </div>
                    <a
                        href="#." className={styles['team-section__social']}
                        ref={(ref) => {
                          if (ref) teamMemberSocialRef.current[3] = ref;
                        }}
                    >

                      LINKEDIN
                      <span>
                      <svg width="18" height="18" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M13.4385 11.591L13.6388 8.08952L30.5953 9.31415L30.8616 9.61268L30.1452 26.5983L26.6703 26.428L27.2961 14.9899L9.86197 30.5379L7.43924 27.8213L24.9032 12.2467L13.4385 11.591Z"
                          fill="#272822"
                      />
                    </svg>
                  </span>
                    </a>
                  </div>

                  <div className={styles['team-section__block']}>
                    <h2
                        className={styles['team-section__title']}
                        ref={(ref) => {
                          if (ref) teamMemberTitleRef.current[5] = ref;
                        }}
                    >
                      DEAN STEINBECK
                    </h2>
                    <div
                        className={styles['team-section__subtitle']}
                        ref={(ref) => {
                          if (ref) teamMemberSubTitleRef.current[5] = ref;
                        }}
                    >
                      COMPANY ADVISOR
                    </div>
                    <div
                        className={styles['team-section__description']}
                        ref={(ref) => {
                          if (ref) teamMemberDescriptionRef.current[5] = ref;
                        }}
                    >
                      PRESIDENT AND GENERAL COUNSEL OF HORIZEN LABS.
                      15 YEARS REPRESENTING VC-BACKED SOFTWARE DEVELOPMENT COMPANIES WITH A FOCUS ON DATA.
                    </div>
                    <a
                        href="#." className={styles['team-section__social']}
                        ref={(ref) => {
                          if (ref) teamMemberSocialRef.current[5] = ref;
                        }}
                    >

                      LINKEDIN
                      <span>
                      <svg width="18" height="18" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M13.4385 11.591L13.6388 8.08952L30.5953 9.31415L30.8616 9.61268L30.1452 26.5983L26.6703 26.428L27.2961 14.9899L9.86197 30.5379L7.43924 27.8213L24.9032 12.2467L13.4385 11.591Z"
                          fill="#272822"
                      />
                    </svg>
                  </span>
                    </a>
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