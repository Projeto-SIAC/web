import { AUTH_TOKEN_KEY } from '../constants'
import { isExpired } from './jwt'

export const isAuthenticated = () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY)
  return token ? !isExpired(token) : false
}