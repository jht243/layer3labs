import Cookies from 'js-cookie'
import { signOut, useSession } from 'next-auth/react'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectCurrentUser, setUser } from '@/app/slices/authSlice'

export const useCurrentUser = () => {
  const user = useAppSelector(selectCurrentUser)
  const dispatch = useAppDispatch()
  const { data: session } = useSession()

  const isAuthenticated = session !== undefined && session !== null

  const doLogout = async () => {
    dispatch(setUser({ user: null, token: null }))
    await signOut({ callbackUrl: '/login', redirect: true })
    // Cookies.remove('jwt', { path: '/' });
  }

  return { isLogged: isAuthenticated, user, doLogout }
}
