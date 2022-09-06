import type { NextPage } from 'next'

import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

import { useWindowSize } from '@/app/hooks/useWindowSize';
import Layout from '@/layouts/index';

import Logo from '@/assets/images/logo.svg'
import desktopText1 from '@/assets/images/desktop1.svg'
import desktopText2 from '@/assets/images/desktop2.svg'
import desktopText3 from '@/assets/images/desktop3.svg'
import mobileText1 from '@/assets/images/mobile1.svg'
import mobileText2 from '@/assets/images/mobile2.svg'
import mobileText3 from '@/assets/images/mobile3.svg'
import mobileText4 from '@/assets/images/mobile4.svg'
import mobileText5 from '@/assets/images/mobile5.svg'

import styles from '@/styles/pages/Home.module.scss'


const Home: NextPage = () => {
  const [desktopImages] = useState([
    desktopText1, desktopText2, desktopText3
  ])
  const [mobileImages] = useState([
    [mobileText1, mobileText3, mobileText2, mobileText5, mobileText1],
    [mobileText2, mobileText5, mobileText1, mobileText3, mobileText2],
    [mobileText3, mobileText4, mobileText5, mobileText1, mobileText3],
    [mobileText4, mobileText5, mobileText2, mobileText3, mobileText4],
    [mobileText5, mobileText1, mobileText3, mobileText4, mobileText2],
  ])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isRepeat, setIsRepeat] = useState(false)
  const [currentMobileImageIndexes, setCurrentMobileImageIndexes] = useState([0, 0, 0, 0, 0])
  const textRef = useRef([]);
  const size = useWindowSize();

  const changeCurrentImage = () => {
    const noOfImages = desktopImages.length;

    if (currentImageIndex !== noOfImages - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      setCurrentImageIndex(0)
    }
  }

  useEffect(() => {
    let interval: any
    if (size && size.width && size.width > 768) {
      interval = setInterval(() => changeCurrentImage(), 500);
    }

    return () => {
      if (interval) clearInterval(interval);
    }
  }, [currentImageIndex, size])


  useEffect(() => {
    const tl = gsap.timeline()
    tl
    .to(textRef.current, {
      opacity: 1,
      duration: 0.1,
      stagger: 0.5,
      onComplete: () => {
        const interval = setInterval(() => {
          setCurrentMobileImageIndexes((prevState) => [...prevState.map((i) => {

            if (i >= currentMobileImageIndexes.length - 2) {
              clearInterval(interval)

              setTimeout(() => {
                tl
                .to(textRef.current, {
                  opacity: 0,
                  duration: 0.1,
                  stagger: 0.5,
                  onComplete: () => {
                    setTimeout(() => {
                      setCurrentMobileImageIndexes([0, 0, 0, 0, 0])
                      setIsRepeat((prevState) => !prevState)
                    }, 500)
                  }
                });
              }, 500)
            }
            return i + 1
          })])
        }, 500);
      }
    });

    return () => {
      tl.kill()
    }
  }, [isRepeat])

  return (
      <Layout>
        <div className="home-page">
          <div className={styles['home-page__actions']}>
            <div className="header__note">
              Site Under Construction
            </div>
            <a href="mailto:partnerships@layer3labs.io" className={styles['home-page__contact']}>
              partnerships@layer3labs.io
            </a>
          </div>

          <div className={styles['desktop-texts']}>
            <img src={desktopImages[currentImageIndex].src} alt="Layer 3" />
          </div>

          <div className={styles['mobile-texts']}>
            {mobileImages.map((images, index) => {
              if (!images[currentMobileImageIndexes[index]]) {
                setCurrentMobileImageIndexes([0, 0, 0, 0, 0])
                setIsRepeat((prevState) => !prevState)
              }
              return images[currentMobileImageIndexes[index]] && (
                  <img
                      key={index}
                      src={images[currentMobileImageIndexes[index]].src}
                      alt="Layer 3"
                      ref={(element) => {
                        // @ts-ignore
                        textRef.current[index] = element;
                      }
                      }
                  />
              )
            })
            }
          </div>

          <div className={styles['main-logo']}>
            <img className={styles['main-logo__inner']} src={Logo.src} alt="Layer3" />
          </div>
        </div>
      </Layout>
  )
}

export default Home
