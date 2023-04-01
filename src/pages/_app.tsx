import type { AppProps } from 'next/app'

import { useEffect } from 'react'

import { useRouter } from 'next/router'
import { Provider } from 'react-redux'

import { useHashHandler } from '@/app/hooks/useHashHandler'
import { useWindowSize } from '@/app/hooks/useWindowSize'
import { store } from '@/app/store'

import '@/styles/globals.scss'

interface ApplicationProps extends AppProps {}

const Application = ({ Component, pageProps }: ApplicationProps) => {
  const router = useRouter()

  useWindowSize()
  useHashHandler()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [router.pathname])

  return (
    <div>
      <Provider store={store}>
        <Component {...pageProps} key={router.pathname} />
      </Provider>
    </div>
  )
}

export default Application
