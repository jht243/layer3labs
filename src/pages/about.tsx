import type { NextPage } from 'next'
import React from 'react'
import Layout from '@/layouts/index'

import AboutMobile from '@/components/Mobile/AboutMobile/AboutMobile'
import AboutDesktop from '@/components/Desktop/About/AboutDesktop'

interface PageProps {
  loaded: boolean
}

const About: NextPage<PageProps> = ({ loaded }) => {
  return (
    <Layout>
      <div className="mobile-container">
        <AboutMobile loaded={loaded}/>
      </div>
      <div className="desktop-container">
        <AboutDesktop loaded={loaded} />
      </div>
    </Layout>
  )
}

export default About
