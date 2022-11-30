import type { NextPage } from 'next'

import React from 'react'


import Layout from '@/layouts/index'

import ServiceMobile from '@/components/Mobile/ServiceMobile/ServiceMobile'
import ServiceDesktop from '@/components/Desktop/Service/ServiceDesktop'

interface PageProps {
  loaded: boolean
}

const Services: NextPage<PageProps> = ({ loaded }) => {
  

  return (
    <Layout>
      <div className="mobile-container">
      <ServiceMobile loaded={loaded}/>
    </div>
    <div className="desktop-container">
      <ServiceDesktop loaded={loaded} />
    </div>
    </Layout>
  )
}

export default Services
