import type { NextPage } from 'next'

import React from 'react';

import Layout from '@/layouts/index';

interface PageProps {
  loaded: boolean
}

const About: NextPage<PageProps> = ({ loaded }) => {
  return (
      <Layout loaded={loaded}>
        <div className="about-page">
          about
        </div>
      </Layout>
  )
}

export default About
