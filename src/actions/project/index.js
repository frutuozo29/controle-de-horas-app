import API_URL from '../../actions'
import headers from '../../utils/headers'

export const getProjetosRequest = () => ({ type: 'GET_PROJECTS_REQUEST' })

export const getProjetosSuccess = (payload) => ({ type: 'GET_PROJECTS_SUCCESS', payload })

export const getProjetosError = () => ({ type: 'GET_PROJECTS_ERROR' })

export const getProjetos = (username, password) => dispatch => {
  dispatch(getProjetosRequest())

  fetch(`${API_URL}/project`, { // eslint-disable-line no-undef
    headers: headers()
  })
    .then(res => {
      if (!res.ok) {
        throw new Error()
      }
      return res.json()
    })
    .then(res => dispatch(getProjetosSuccess(res)))
    .catch(() => dispatch(getProjetosError()))
}
