import React from 'react'

export default ({ history }) => {
  return (
    <div className='App'>
      Dashboard

      <button
        onClick={() => {
          localStorage.clear('jwt-cdh')
          history.push('/login')
        }}
      >
        Logout
      </button>
    </div>
  )
}
