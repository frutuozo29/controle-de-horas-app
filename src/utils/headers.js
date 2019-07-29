export default {
  Authorization: `Bearer ${localStorage.getItem('jwt-cdh')}`, // eslint-disable-line no-undef
  'Content-Type': 'application/json'
}
