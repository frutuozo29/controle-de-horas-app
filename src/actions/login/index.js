import API_URL from '../../actions'

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
      localStorage.setItem('jwt-cdh', res.token) // eslint-disable-line no-undef
      dispatch(loginSuccess())
    })
    .catch(() => dispatch(loginError()))
}

export const logout = () => {
  localStorage.removeItem('jwt-cdh') // eslint-disable-line no-undef
  return {
    type: 'LOGOUT'
  }
}
