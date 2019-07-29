import API_URL from '../../actions'
import { setToken, removeToken } from '../../utils/token'

export const loginSuccess = () => ({ type: 'LOGIN_SUCCESS' })

export const loginError = () => ({ type: 'LOGIN_ERROR' })

export const login = (username, password) => dispatch => {
  fetch(`${API_URL}/auth`, { // eslint-disable-line no-undef
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => {
      if (!res.ok) {
        throw new Error()
      }
      return res.json()
    })
    .then(res => {
      setToken(res.token)
      dispatch(loginSuccess())
    })
    .catch(() => dispatch(loginError()))
}

export const logout = () => {
  removeToken()
  return {
    type: 'LOGOUT'
  }
}
