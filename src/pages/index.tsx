import type { NextPage } from 'next';

import React, { useEffect, useState } from 'react';

import cx from 'classnames';

import Investors from '@/components/Investors';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Layout from '@/layouts/index';
import ServicesType from '@/types/services';

import styles from '@/styles/pages/Home.module.scss';

import desktopText1 from '@/images/desktop1.svg';
import desktopText2 from '@/images/desktop2.svg';
import desktopText3 from '@/images/desktop3.svg';
import advisoryIcon from '@/images/services/advisory.svg';
import gamesIcon from '@/images/services/games.svg';
import loyaltyIcon from '@/images/services/loyalty.svg';
import marketplaceIcon from '@/images/services/marketplace.svg';
import metaverseIcon from '@/images/services/metaverse.svg';
import tradingIcon from '@/images/services/trading.svg';
import deanPhoto from '@/images/team/dean-steinbeck.png';
import jonathanPhoto from '@/images/team/jonathan-teplitsky.png';
import liatPhoto from '@/images/team/liat-aaronson.png';
import mayPhoto from '@/images/team/may-lunawong.png';
import robertPhoto from '@/images/team/robert-viglione.png';
import rosarioPhoto from '@/images/team/rosario-pabst.png';

interface PageProps {
  loaded: boolean
}

// TODO: move to data/home.json
const team = [
  {
    image: jonathanPhoto,
    name: 'Jonathan Teplitsky',
    position: 'CEO & Team Lead',
    text: 'JONATHAN HOLDS AN MBA FROM HARVARD BUSINESS SCHOOL AND HAS 10+ YEARS OF MARKETING EXPERIENCE.',
    linkedin: '#.'
  },
  {
    image: mayPhoto,
    name: 'May Lunawong',
    position: 'Product Manager',
    text: 'MAY IS A PRODUCT MANAGER WITH A BACKGROUND IN PRODUCT MANAGEMENT OF TELECOMMUNICATION TECHNOLOGY FOR OVER 7+ YEARS. ',
    linkedin: '#.'
  },
  {
    image: robertPhoto,
    name: 'Robert Viglione',
    position: 'Company Advisor',
    text: 'CEO AND CO-FOUNDER OF HORIZEN AND HORIZEN LABS.  FORMER US AIR FORCE PHYSICIST AND MILITARY INTELLIGENCE. BA IN PHYSICS, MBA AND PHD IN FINANCE.',
    linkedin: '#.'
  },
  {
    image: liatPhoto,
    name: 'Liat Aaronson',
    position: 'Company Advisor',
    text: 'COO AT HORIZEN LABS, HIGH-GROWTH BLOCKCHAIN STARTUP. INVESTMENT PARTNER IN VC FUND AND FORMER M&A LAWYER RAN ACADEMIC ACCELERATOR FOR SAM ZELL AT IDC HERZLIYA.',
    linkedin: '#.'
  },
  {
    image: rosarioPhoto,
    name: 'Rosario Pabst',
    position: 'Company Advisor',
    text: 'SENIOR EXECUTIVE AT HORIZEN. OVER 10 YEARS IN SOFTWARE PROGRAM MANAGEMENT. BS IN PUBLIC ADMINISTRATION AND MS IN SYSTEMS ENGINEERING.',
    linkedin: '#.'
  },
  {
    image: deanPhoto,
    name: 'Dean Steinbeck',
    position: 'Product Manager',
    text: 'PRESIDENT AND GENERAL COUNSEL OF HORIZEN LABS. 15 YEARS REPRESENTING VC-BACKED SOFTWARE DEVELOPMENT COMPANIES WITH A FOCUS ON DATA. ',
    linkedin: '#.'
  }
]

const services = {
  col1: [
    {
      title: 'NFT MARKETPLACES',
      text: 'Deploy your own marketplace in under 30 days and accept credit card payments',
      icon: marketplaceIcon,
    },
    {
      title: 'TRADING PLATFORMS',
      text: 'Create a trading platforms for users to buy, sell, and hold digitized goods',
      icon: tradingIcon,
    },
    {
      title: 'METAVERSE BUILDS',
      text: 'Create metaverse experiences that add to your brand\'s value proposition',
      icon: metaverseIcon,
    },
  ] as ServicesType[],
  col2: [
    {
      title: 'LOYALTY PROGRAMS',
      text: 'Digitize your rewards program to increase engagement and retention',
      icon: loyaltyIcon,
    },
    {
      title: 'PLAY-TO-EARN GAMES',
      text: 'Harness massive user attention through fun p2e games built in unity',
      icon: gamesIcon,
    },
    {
      title: 'Advisory Services',
      text: 'We\'ll help you integrate your web3 strategy with your business goals',
      icon: advisoryIcon,
    },
  ] as ServicesType[],
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

            <div className={styles['home-page__services']}>
              <Services services={services} />
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default Home
