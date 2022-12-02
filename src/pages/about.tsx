import type { NextPage } from 'next'
import React from 'react'
import Layout from '@/layouts/index'

import AboutMobile from '@/components/Mobile/About/AboutMobile'
import AboutDesktop from '@/components/Desktop/About/AboutDesktop'

interface PageProps {
  loaded: boolean
  isMenuOpen: boolean
  setIsMenuOpen: (data: boolean) => void
}

const About: NextPage<PageProps> = ({ loaded , isMenuOpen, setIsMenuOpen}) => {


  return (
    <Layout>
    {/* <div className='mobile-container'>
     <AboutMobile />
    </div>
    <div  className='desktop-container'> */}
     <AboutDesktop loaded={loaded}  isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    {/* </div> */}
    </Layout>
  )
}

export default About
