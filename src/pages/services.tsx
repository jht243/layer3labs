import type { NextPage } from 'next'

import React from 'react';

import Layout from '@/layouts/index';


interface PageProps {
  loaded: boolean
}


const Services: NextPage<PageProps> = ({ loaded }) => {
  return (
      <Layout loaded={loaded}>
        <div className="services-page">
          services
        </div>
      </Layout>
  )
}

export default Services
