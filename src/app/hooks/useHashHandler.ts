import { useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

export function useHashHandler(loaded?: boolean) {
  const router = useRouter()

  const updateHash = useCallback((hash: string) => {
    if (typeof window === 'undefined') return
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    updateHash(hash)
  }, [loaded, updateHash])

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
