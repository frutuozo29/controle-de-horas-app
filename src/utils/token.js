module.exports.getToken = () => localStorage.getItem('jwt-cdh') // eslint-disable-line no-undef

module.exports.setToken = (token) => localStorage.setItem('jwt-cdh', token) // eslint-disable-line no-undef

module.exports.removeToken = () => localStorage.removeItem('jwt-cdh') // eslint-disable-line no-undef

module.exports.hasToken = () => !!localStorage.getItem('jwt-cdh') // eslint-disable-line no-undef
