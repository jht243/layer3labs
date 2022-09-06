import type { Session } from 'next-auth';
import type { AppProps } from 'next/app';

import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux';

import { store } from '@/app/store';

import '@/styles/globals.scss';

interface ApplicationProps extends AppProps {
  session: Session
}

const Application = ({ Component, pageProps, session }: ApplicationProps) => {
  return (
      <Provider store={store}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
  );
}

export default Application;
