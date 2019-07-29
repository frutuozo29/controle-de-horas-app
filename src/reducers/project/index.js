const initialState = {
  items: [],
  isLoading: false,
  hasError: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_PROJECTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        items: action.payload
      }
    case 'GET_PROJECTS_ERROR':
      return {
        ...state,
        isLoading: false,
        hasError: true,
        items: []
      }
    default:
      return state
  }
}

export default reducer
