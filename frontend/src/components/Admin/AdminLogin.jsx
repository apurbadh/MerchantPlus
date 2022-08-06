import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin =() => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/useradmin/dashboard')
  }
  return (
    <section className='skjap'>
      <div className='bkopeu'>
        <h2 className='text-big-header'>Sign in</h2>
        <div className='jlao'>
          <input type="email" name="" id="" placeholder='Enter email...' />
        </div>
        <div className='jlao'>
          <input type="password" name="" id="" placeholder='Enter password...' />
        </div>
        <div className='jlao text-center'>
          <button onClick={handleSubmit}>Sign in</button>
        </div>
      </div>
    </section>
  )
}

export default AdminLogin