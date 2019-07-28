const { NODE_ENV } = process.env

const API_URL = NODE_ENV !== 'production' ? 'http://localhost:8000/api' : 'https://controle-de-horas-api.herokuapp.com/api'

export default API_URL
