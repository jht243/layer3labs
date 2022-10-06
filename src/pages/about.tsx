import type { NextPage } from 'next'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

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
  const [currentSection, setCurrentSection] = useState('initial')
  const bgRef = useRef(null);
  const nextLinkRef = useRef(null);

  const visionTextRef = useRef(null);
  const ourVisionTextRef = useRef(null);

  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);
  const title4Ref = useRef(null);
  const title5Ref = useRef(null);
  const title6Ref = useRef(null);

  const teamTitleMainRef = useRef(null);
  const teamTitle1Ref = useRef(null);
  const teamTitle2Ref = useRef(null);

  const teamSectionRef = useRef(null);
  const teamMemberTitleRef = useRef<HTMLDivElement[]>([]);
  const teamMemberSubTitleRef = useRef<HTMLDivElement[]>([]);
  const teamMemberDescriptionRef = useRef<HTMLDivElement[]>([]);
  const teamMemberSocialRef = useRef<HTMLAnchorElement[]>([]);

  const partnersRef = useRef(null);
  const partnersTitleMainRef = useRef(null);


  useEffect(() => {
    if (!visionTextRef || !loaded) return

    const tl = gsap.timeline()

    tl.fromTo(
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

     .to(
         title1Ref.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
        },'<+=1'
    )
     .to(
         title2Ref.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.08,
        }, '<'
    )
    .to(
        title2Ref.current,
        {
          y: 100,
          opacity: 0,
          duration: 0.4,
        }, '<+=1'
    )
     .to(
         title1Ref.current,
        {
          y: 100,
          opacity: 0,
          duration: 0.7,
          delay: 0.1,
        },'<'
    )

     .to(
         title3Ref.current,
         {
           y: 0,
           opacity: 1,
           duration: 0.4,
         },'<+=0.5'
    )
     .to(
         title3Ref.current,
         {
           y: 100,
           opacity: 0,
           duration: 0.4,
         },'<+=1'
    )

    .to(
        title4Ref.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
        },'<+=0.5'
    )
    .to(
        title5Ref.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.08,
        }, '<'
    )
    .to(
        title5Ref.current,
        {
          y: 100,
          opacity: 0,
          duration: 0.4,
        }, '<+=1'
    )
    .to(
        title4Ref.current,
        {
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
        },'<'
    )

    .to(
        title6Ref.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
        },'<+=0.5'
    )
    .to(
        nextLinkRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
        },'<'
    )

    return () => {
      tl.kill()
    }
  }, [visionTextRef, loaded])


  const onNextSection = () => {
    if (currentSection === 'initial') {
      const tl = gsap.timeline()

      tl
      .fromTo(
          ourVisionTextRef.current,
          {
            y: 0,
            opacity: 1,
          },
          {
            y: 150,
            opacity: 0,
            duration: 0.2,
          },
      )
      .fromTo(
          visionTextRef.current,
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
      .to(
          title6Ref.current,
          {
            y: -400,
            opacity: 0,
            duration: 0.4,
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

      .fromTo(
          teamTitleMainRef.current,
          {
            y: 200,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          }, '<+=0.5'
      )
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
            delay: 0.2,
          }
      )
      .fromTo(
          teamTitle2Ref.current,
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
          },
          {
            overflowY: 'auto',
          }, '<'
      )
      .to(
          nextLinkRef.current,
          {
            zIndex: 33
          },'<'
      )
      setCurrentSection('team')
    }


    if (currentSection === 'team') {
      const tl = gsap.timeline()
      tl
      .to(
          nextLinkRef.current,
          {
            y: 100,
            opacity: 0,
            duration: 0.2,
            pointerEvents: 'none'
          },'<'
      )
      .fromTo(
          teamSectionRef.current,
          {
            y: 0,
            opacity: 1,
            pointerEvents: 'auto',
            overflowY: 'auto',
          },
          {
            y: -600,
            opacity: 0,
            pointerEvents: 'none',
            overflowY: 'none',
            duration: 1.5,
          },
      )
      .fromTo(
          teamTitleMainRef.current,
          {
            y: 0,
            opacity: 1,
          },
          {
            y: -600,
            opacity: 0,
            duration: 1.5,
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
      .fromTo(
          partnersTitleMainRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          }, '<+=1'
      )
      .fromTo(
          partnersRef.current,
          {
            opacity: 0,
            zIndex: 0,
            pointerEvents: 'none'
          },
          {
            opacity: 1,
            zIndex: 35,
            pointerEvents: 'auto',
            duration: 1,
          }, '<'
      )
    }

  }

  return (
    <Layout>
      <div
        className={cx(styles['about-page'], { [styles[`is-loaded`]]: loaded })}
      >
        <div className={styles['about-page__bg']} style={{ backgroundImage: `url(${purpleBlock.src})` }} ref={bgRef} />
        <div className={styles['about-page__inner']}>
          <div className={styles['about-page__back']}>
            <NavLink href="/">
              <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.22 22.78L12.74 25.26L0.899999 13.06L0.899999 12.66L12.74 0.459999L15.22 2.9L7.14 11.02L30.5 11.02L30.5 14.66L7.1 14.66L15.22 22.78Z" fill="#272822"/>
              </svg>
            </NavLink>
          </div>

          <div className={styles['about-page__next']} onClick={onNextSection} ref={nextLinkRef}>
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.28 15.28L25.76 17.76L13.56 29.6H13.16L0.96 17.76L3.4 15.28L11.52 23.36V-1.90735e-06H15.16V23.4L23.28 15.28Z" fill="#272822"/>
            </svg>
          </div>

          <div className={styles['about-page__vision']}>
            <span ref={ourVisionTextRef}>Our</span>
            <span ref={visionTextRef}>vision</span>
          </div>

          <div className={styles['about-page__title']}>
            <div ref={title1Ref}>EMPOWERING PROGRESSIVE BRANDS TO</div>
            <div ref={title2Ref}>BRIDGE THE GAP INTO WEB3</div>
          </div>

          <div className={styles['about-page__title']}>
            <div ref={title3Ref}>WE ARE WORLD-LEADING DEVELOPERS</div>
          </div>

          <div className={styles['about-page__title']}>
            <div ref={title4Ref}>BACKED BY THE LARGEST INVESTORS</div>
            <div ref={title5Ref}>IN CRYPTO</div>
          </div>

          <div className={styles['about-page__title']}>
            <div ref={title6Ref}>WE ARE LAYER III</div>
          </div>


          <div className={styles['about-page__team-title']} ref={teamTitleMainRef}>
            <span ref={teamTitle1Ref}>Our</span>
            <span ref={teamTitle2Ref}>Team</span>
          </div>

          <div className={cx(styles['about-page__team'])} ref={teamSectionRef}>
            <div className={styles['team-section']}>

              <div className={styles['team-section__col']}>
                <div className={styles['team-section__block']}>
                  <h2 className={styles['team-section__title']}
                      ref={(ref) => { if (ref) teamMemberTitleRef.current[0] = ref;}}>
                    JONATHAN TEPLITSKY
                  </h2>
                  <div className={styles['team-section__subtitle']}
                       ref={(ref) => { if (ref) teamMemberSubTitleRef.current[0] = ref;}}>
                    CEO & TEAM LEAD
                  </div>
                  <div className={styles['team-section__description']}
                       ref={(ref) => { if (ref) teamMemberDescriptionRef.current[0] = ref;}}>
                    JONATHAN HOLDS AN MBA FROM HARVARD BUSINESS SCHOOL AND HAS 10+ YEARS OF MARKETING EXPERIENCE.
                  </div>
                  <a href="#." className={styles['team-section__social']}
                     ref={(ref) => { if (ref) teamMemberSocialRef.current[0] = ref;}}>
                    LINKEDIN <span>↗</span>
                  </a>
                </div>

                <div className={styles['team-section__block']}>
                  <h2 className={styles['team-section__title']}
                      ref={(ref) => { if (ref) teamMemberTitleRef.current[2] = ref;}}>
                    ROBERT VIGLIONE
                  </h2>
                  <div className={styles['team-section__subtitle']}
                       ref={(ref) => { if (ref) teamMemberSubTitleRef.current[2] = ref;}}>
                    COMPANY ADVISOR
                  </div>
                  <div className={styles['team-section__description']}
                       ref={(ref) => { if (ref) teamMemberDescriptionRef.current[2] = ref;}}>
                    CEO AND CO-FOUNDER OF HORIZEN AND HORIZEN LABS.
                    FORMER US AIR FORCE PHYSICIST AND MILITARY INTELLIGENCE. BA IN PHYSICS, MBA AND PHD IN FINANCE.
                  </div>
                  <a href="#." className={styles['team-section__social']}
                     ref={(ref) => { if (ref) teamMemberSocialRef.current[2] = ref;}}>
                    LINKEDIN <span>↗</span>
                  </a>
                </div>

                <div className={styles['team-section__block']}>
                  <h2 className={styles['team-section__title']}
                      ref={(ref) => { if (ref) teamMemberTitleRef.current[4] = ref;}}>
                    ROSARIO PABST
                  </h2>
                  <div className={styles['team-section__subtitle']}
                       ref={(ref) => { if (ref) teamMemberSubTitleRef.current[4] = ref;}}>
                    COMPANY ADVISOR
                  </div>
                  <div className={styles['team-section__description']}
                       ref={(ref) => { if (ref) teamMemberDescriptionRef.current[4] = ref;}}>
                    SENIOR EXECUTIVE AT HORIZEN. OVER 10 YEARS IN SOFTWARE PROGRAM MANAGEMENT.
                    BS IN PUBLIC ADMINISTRATION AND MS IN SYSTEMS ENGINEERING.
                  </div>
                  <a href="#." className={styles['team-section__social']}
                     ref={(ref) => { if (ref) teamMemberSocialRef.current[4] = ref;}}>
                    LINKEDIN <span>↗</span>
                  </a>
                </div>
              </div>

              <div className={styles['team-section__col']}>
                <div className={styles['team-section__block']}>
                  <h2 className={styles['team-section__title']}
                      ref={(ref) => { if (ref) teamMemberTitleRef.current[1] = ref;}}>
                    MAY LUNAWONG
                  </h2>
                  <div className={styles['team-section__subtitle']}
                       ref={(ref) => { if (ref) teamMemberSubTitleRef.current[1] = ref;}}>
                    PRODUCT MANAGER
                  </div>
                  <div className={styles['team-section__description']}
                       ref={(ref) => { if (ref) teamMemberDescriptionRef.current[1] = ref;}}>
                    MAY IS A PRODUCT MANAGER WITH A BACKGROUND IN PRODUCT MANAGEMENT OF
                    TELECOMMUNICATION TECHNOLOGY FOR OVER 7+ YEARS.
                  </div>
                  <a href="#." className={styles['team-section__social']}
                     ref={(ref) => { if (ref) teamMemberSocialRef.current[3] = ref;}}>
                    LINKEDIN <span>↗</span>
                  </a>
                </div>

                <div className={styles['team-section__block']}>
                  <h2 className={styles['team-section__title']}
                      ref={(ref) => { if (ref) teamMemberTitleRef.current[3] = ref;}}>
                    LIAT AARONSON
                  </h2>
                  <div className={styles['team-section__subtitle']}
                       ref={(ref) => { if (ref) teamMemberSubTitleRef.current[3] = ref;}}>
                    COMPANY ADVISOR
                  </div>
                  <div className={styles['team-section__description']}
                       ref={(ref) => { if (ref) teamMemberDescriptionRef.current[3] = ref;}}>
                    COO AT HORIZEN LABS, HIGH-GROWTH BLOCKCHAIN STARTUP. INVESTMENT PARTNER IN VC FUND AND
                    FORMER M&A LAWYER RAN ACADEMIC ACCELERATOR FOR SAM ZELL AT IDC HERZLIYA.
                  </div>
                  <a href="#." className={styles['team-section__social']}
                     ref={(ref) => { if (ref) teamMemberSocialRef.current[3] = ref;}}>
                    LINKEDIN <span>↗</span>
                  </a>
                </div>

                <div className={styles['team-section__block']}>
                  <h2 className={styles['team-section__title']}
                      ref={(ref) => { if (ref) teamMemberTitleRef.current[5] = ref;}}>
                    DEAN STEINBECK
                  </h2>
                  <div className={styles['team-section__subtitle']}
                       ref={(ref) => { if (ref) teamMemberSubTitleRef.current[5] = ref;}}>
                    PRODUCT MANAGER
                  </div>
                  <div className={styles['team-section__description']}
                       ref={(ref) => { if (ref) teamMemberDescriptionRef.current[5] = ref;}}>
                    PRESIDENT AND GENERAL COUNSEL OF HORIZEN LABS.
                    15 YEARS REPRESENTING VC-BACKED SOFTWARE DEVELOPMENT COMPANIES WITH A FOCUS ON DATA.
                  </div>
                  <a href="#." className={styles['team-section__social']}
                     ref={(ref) => { if (ref) teamMemberSocialRef.current[5] = ref;}}>
                    LINKEDIN <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className={styles['about-page__partners-title']} ref={partnersTitleMainRef}>
            <span>Our</span>
            <span>Partners</span>
          </div>

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
      </div>
    </Layout>
  )
}

export default About
