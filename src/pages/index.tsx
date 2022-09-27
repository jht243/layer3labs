import type { NextPage } from 'next'

import { gsap } from 'gsap';
import React, { useEffect, useState } from 'react';

import Layout from '@/layouts/index';

import desktopText1 from '@/assets/images/desktop1.svg'
import desktopText2 from '@/assets/images/desktop2.svg'
import desktopText3 from '@/assets/images/desktop3.svg'

import styles from '@/styles/pages/Home.module.scss'
import cx from 'classnames';


interface PageProps {
  loaded: boolean
}


const Home: NextPage<PageProps> = ({ loaded }) => {
  const [desktopImages] = useState([
    desktopText1, desktopText2, desktopText3
  ])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  // const size = useWindowSize();

  const changeCurrentImage = () => {
    const noOfImages = desktopImages.length;

    if (currentImageIndex !== noOfImages - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      setCurrentImageIndex(0)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => changeCurrentImage(), 500);

    return () => {
      if (interval) clearInterval(interval);
    }
  }, [currentImageIndex])


  useEffect(() => {
    // const tl = gsap.timeline()
    // tl
    // .to(textRef.current, {
    //   opacity: 1,
    //   duration: 0.1,
    //   stagger: 0.5,
    //   onComplete: () => {
    //     const interval = setInterval(() => {
    //       setCurrentMobileImageIndexes((prevState) => [...prevState.map((i) => {
    //
    //         if (i >= currentMobileImageIndexes.length - 2) {
    //           clearInterval(interval)
    //
    //           setTimeout(() => {
    //             tl
    //             .to(textRef.current, {
    //               opacity: 0,
    //               duration: 0.1,
    //               stagger: 0.5,
    //               onComplete: () => {
    //                 setTimeout(() => {
    //                   setCurrentMobileImageIndexes([0, 0, 0, 0, 0])
    //                   setIsRepeat((prevState) => !prevState)
    //                 }, 500)
    //               }
    //             });
    //           }, 500)
    //         }
    //         return i + 1
    //       })])
    //     }, 500);
    //   }
    // });
    //
    // return () => {
    //   tl.kill()
    // }
  }, [])

  return (
      <Layout loaded={loaded}>
        <div className="home-page">

          <div className={cx(styles['anim-head'], { [styles[`is-loaded`]]: loaded })}>
            <div className={styles['anim-head__text']}>
              <img src={desktopImages[currentImageIndex].src} alt="Layer 3" />
            </div>

            <div className={styles['anim-head__dummy']} />

            <div className={styles['anim-head__path']}>
              <svg width="187" height="179" viewBox="0 0 187 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M125.456 179H102.049C102.049 158.965 98.3689 149.608 94.1089 138.777C89.6249 127.38 84.5439 114.457 84.5439 89.9801C84.5439 65.5031 89.6249 52.5881 94.1089 41.1871C98.3689 30.3561 102.049 21.0001 102.049 0.964111H125.456C125.456 25.4361 120.375 38.3571 115.891 49.7571C111.631 60.5881 107.951 69.9431 107.951 89.9791C107.951 110.015 111.631 119.371 115.891 130.202C120.376 141.602 125.456 154.524 125.456 178.995"
                    fill="#272822"
                />
                <path d="M41.955 0.969971L0 179H23.761L65.716 0.969971H41.955Z" fill="#272822" />
                <path d="M163.283 179H186.672V0.968994H163.283V179Z" fill="#272822" />
              </svg>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default Home
