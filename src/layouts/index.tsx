import Head from 'next/head'
import { FC, ReactNode } from 'react';

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
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b791f1" />
          <meta name="apple-mobile-web-app-title" content="Layer3" />
          <meta name="application-name" content="Layer3" />
          <meta name="msapplication-TileColor" content="#b791f1" />
          <meta name="theme-color" content="#ffffff" />
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
