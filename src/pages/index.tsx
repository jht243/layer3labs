import type { NextPage } from 'next';

import React, { useEffect, useState } from 'react';

import cx from 'classnames';

import Investors from '@/components/Investors';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Layout from '@/layouts/index';

import { team, services, processes } from '../../data/home';

import styles from '@/styles/pages/Home.module.scss';

import desktopText1 from '@/images/desktop1.svg';
import desktopText2 from '@/images/desktop2.svg';
import desktopText3 from '@/images/desktop3.svg';

interface PageProps {
  loaded: boolean
}

const Home: NextPage<PageProps> = ({ loaded }) => {
  const [desktopImages] = useState([desktopText1, desktopText2, desktopText3])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const changeCurrentImage = () => {
      const noOfImages = desktopImages.length

      if (currentImageIndex !== noOfImages - 1) {
        setCurrentImageIndex(currentImageIndex + 1)
      } else {
        setCurrentImageIndex(0)
      }
    }

    const interval = setInterval(() => changeCurrentImage(), 500)

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentImageIndex, desktopImages.length])

  return (
      <Layout>
        <div className={cx(styles['home-page'], { [styles[`is-loaded`]]: loaded })}>
          <div className={cx(styles['anim-head'], { [styles[`is-loaded`]]: loaded })}>
            <div className={styles['anim-head__text']}>
              <img src={desktopImages[currentImageIndex].src} alt="Layer 3" />
            </div>

            <div className={styles['anim-head__path']}>
              <svg width="95" height="110" viewBox="0 0 95 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.9403 0.492188L0.182617 109.792H14.7702L40.5279 0.492188H25.9403Z" fill="#B791F1" />
                <path
                    d="M66.6256 109.792H52.2551C52.2551 97.4915 49.9962 91.7479 47.3809 85.0983C44.628 78.099 41.5088 70.1668 41.5088 55.1422C41.5088 40.1177 44.628 32.1855 47.3809 25.1862C49.9962 18.5365 52.2551 12.7923 52.2551 0.492188H66.6256C66.6256 15.5168 63.5069 23.4489 60.7528 30.4482C58.1375 37.0973 55.8781 42.8415 55.8781 55.1422C55.8781 67.443 58.1375 73.1871 60.7528 79.8362C63.5064 86.8361 66.6256 94.7683 66.6256 109.792Z"
                    fill="#D1FF80"
                />
                <path d="M94.9596 0.492188H80.6006V109.792H94.9596V0.492188Z" fill="#E87B5D" />
              </svg>
            </div>
          </div>

          <h1 className={styles['home-page__title']}>
            We are a software development and advisory firm
            that will help you navigate the world of Web3.
          </h1>

          <p className={styles['home-page__subtitle']}>
            We start by getting to know you, your brand, and your goals.
            <br />
            Then we create amazing Web3 experiences, from NFT Marketplaces to masterful Metaverses.
          </p>

          <a
              href="mailto:partners@layer3labs.io?subject=Web3 Development Inquiry"
              className={styles['home-page__contact']}
          >
            contact us
          </a>

          <div className={styles['home-page__investors']}>
            <Investors />
          </div>

          <div className="container">
            <div className={styles['home-page__team']}>
              <Team team={team} />
            </div>
          </div>

          <div className={styles['home-page__services']}>
            <Services services={services} />
          </div>

          <div className={styles['home-page__processes']}>
            <Process processes={processes} />
          </div>
        </div>
      </Layout>
  )
}

export default Home
