import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

export default async function authPageSSR (context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const forbiddenSignedPaths = ['/login', '/register'];

  if (!session && !forbiddenSignedPaths.includes(context.resolvedUrl)) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }

  if (session && forbiddenSignedPaths.includes(context.resolvedUrl)) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {},
  };
}
