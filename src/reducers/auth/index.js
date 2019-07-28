const initialState = {
  isLogged: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogged: true
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        isLogged: false
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogged: false
      }
    default:
      return state
  }
}

export default reducer
