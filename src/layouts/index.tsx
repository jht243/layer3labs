import { FC, ReactNode } from 'react';

import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  bgImage?: boolean | string
}

const Layout: FC<LayoutProps> = (
    {
      children,
      title = 'Layer3',
      description = '',
    }) => {

  return (
      <>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="out">
          <main className="main">
            {children}
          </main>
        </div>
      </>
  )
}

export default Layout
