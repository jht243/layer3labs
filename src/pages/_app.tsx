import type { AppProps } from 'next/app'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { Provider } from 'react-redux'

import { useWindowSize } from '@/app/hooks/useWindowSize'
import { store } from '@/app/store'
import { sleep } from '@/app/utils/helpers'

import '@/styles/globals.scss'

interface ApplicationProps extends AppProps {}

const Application = ({ Component, pageProps }: ApplicationProps) => {
  const router = useRouter()
  const [loaded, setLoaded] = useState<boolean>(false)

  useWindowSize()

  useEffect(() => {
    const checkLoader = async () => {
      if (typeof window !== 'undefined') {
        const loader = document.getElementById('globalLoader')
        document.body.classList.add('no-scroll')
        if (loader) {
          await sleep(2)
          loader.style.opacity = '0'
          await sleep(1.5)
          setLoaded(true)
          loader.style.display = 'none'
          document.body.classList.remove('no-scroll')
        }
      }
    }

    checkLoader().catch(console.error)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <div>
      <Provider store={store}>
        <Component {...pageProps} loaded={loaded} key={router.pathname} />
      </Provider>
    </div>
  )
}

export default Application
