import type { Session } from 'next-auth';
import type { AppProps } from 'next/app';

import { SessionProvider } from 'next-auth/react'
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/app/store';

import '@/styles/globals.scss';
import { sleep } from '@/app/utils/helpers';

interface ApplicationProps extends AppProps {
  session: Session
}

const Application = ({ Component, pageProps, session }: ApplicationProps) => {
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    const checkLoader = async () => {
      if (typeof window !== 'undefined') {
        const loader = document.getElementById('globalLoader');
        if (loader) {
          await sleep(2)
          loader.style.opacity = '0';
          await sleep(1)
          setLoaded(true)
          loader.style.display = 'none';
        }
      }
    }

    checkLoader().catch(console.error);
  }, []);

  return (
      <Provider store={store}>
        <SessionProvider session={session}>
          <Component {...pageProps} loaded={loaded} />
        </SessionProvider>
      </Provider>
  );
}

export default Application;
