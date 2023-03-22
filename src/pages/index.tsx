import type { NextPage } from 'next';

import React from 'react';

import cx from 'classnames';

import AnimHead from '@/components/AnimHead';
import Clients from '@/components/Clients';
import Investors from '@/components/Investors';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Header from '@/components/layout/Header';
import { NavLink } from '@/components/ui/NavLink';
import Layout from '@/layouts/index';

import { team, services, processes, clients, testimonials } from '../../data/home';

import styles from '@/styles/pages/Home.module.scss';

interface PageProps {
  loaded: boolean
}

const Home: NextPage<PageProps> = ({ loaded }) => {

  return (
      <Layout>
        <div className={cx(styles['home-page'], { [styles[`is-loaded`]]: loaded })}>
          <Header />

          <div className={styles['home-page__hero']}>
            <div className={styles['home-page__anim-logo']}>
              <AnimHead loaded={loaded} />
            </div>

            <h1 className={styles['home-page__title']}>
              We are a software development and advisory firm
              that will help you navigate the world of Web3.
            </h1>

            <p className={styles['home-page__subtitle']}>
              We start by getting to know&nbsp;you, your&nbsp;brand, and&nbsp;your&nbsp;goals.
              <br />
              Then we create amazing Web3 experiences, from NFT&nbsp;Marketplaces to&nbsp;masterful Metaverses.
            </p>

            <div className={styles['home-page__contact-wrap']}>
              <a
                  href="mailto:partners@layer3labs.io?subject=Web3 Development Inquiry"
                  className={styles['home-page__contact']}
              >
                contact us
              </a>
            </div>
          </div>

          <div className={styles['home-page__investors']}>
            <Investors />
          </div>

          <div id="about" className="container">
            <div className={styles['home-page__team']}>
              <Team team={team} />
            </div>
          </div>

          <div id="services" className={styles['home-page__services']}>
            <Services services={services} />
          </div>

          <div className={styles['home-page__processes']}>
            <Process processes={processes} />
          </div>

          <div id="clients" className={styles['home-page__clients']}>
            <Clients clients={clients} />
          </div>

          <div className={styles['home-page__testimonials']}>
            <Testimonials testimonials={testimonials} />
          </div>


          <div className={cx(styles['home-page__contact-wrap'], styles['is-bottom'])}>
            <a
                href="mailto:partners@layer3labs.io?subject=Web3 Development Inquiry"
                className={styles['home-page__contact']}
            >
              contact us
            </a>
          </div>
        </div>
      </Layout>
  )
}

export default Home
