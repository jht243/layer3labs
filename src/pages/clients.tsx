import type { NextPage } from 'next'

import React from 'react'

import Layout from '@/layouts/index'

import ClientsDesktop from '@/components/Desktop/Clients/ClientsDesktop'
import ClientsMobile from '@/components/Mobile/ClientsMobile/ClientsMobile'

interface PageProps {
  loaded: boolean
}

const Clients: NextPage<PageProps> = ({ loaded }) => {
  

  return (
    <Layout>
    <div className="mobile-container">
      <ClientsMobile loaded={loaded}/>
    </div>
    <div className="desktop-container">
      <ClientsDesktop loaded={loaded} />
    </div>
  </Layout>
  )
}

export default Clients
