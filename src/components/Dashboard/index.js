import React from 'react'

export default ({ history }) => {
  return (
    <div className='App'>
      Dashboard

      <button
        onClick={() => {
          localStorage.clear('jwt-cdh') // eslint-disable-line no-undef
          history.push('/login')
        }}
      >
        Logout
      </button>
    </div>
  )
}
