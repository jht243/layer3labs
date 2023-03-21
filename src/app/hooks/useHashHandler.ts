import { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

export function useHashHandler (loaded: boolean) {
  const router = useRouter()
  const [isMounted, setMounted] = useState(false)

  const updateHash = useCallback((hash: string) => {
    if (typeof window === 'undefined') return;
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, (loaded && isMounted) ? 0 : 1600);
    }
  }, [isMounted, loaded])

  useEffect(() => {
    const hash = window.location.hash
    updateHash(hash)
    if (loaded && !isMounted) {
      setMounted(true)
    }
  }, [isMounted, loaded, updateHash])

  useEffect(() => {
    const onWindowHashChange = () => updateHash(window.location.hash)
    const onNextJSHashChange = (url: string) => updateHash(url)

    router.events.on('hashChangeStart', onNextJSHashChange)
    window.addEventListener('popstate', onWindowHashChange)
    window.addEventListener('load', onWindowHashChange)
    return () => {
      router.events.off('hashChangeStart', onNextJSHashChange)
      window.removeEventListener('load', onWindowHashChange)
      window.removeEventListener('popstate', onWindowHashChange)
    }
  }, [router.asPath, router.events, loaded, updateHash])
}
