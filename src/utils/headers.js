import { getToken } from './token'

export default () => ({
  Authorization: `Bearer ${getToken()}`,
  'Content-Type': 'application/json'
})
