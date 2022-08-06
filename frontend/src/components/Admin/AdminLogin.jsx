import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import request from "../../scripts/request"
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const AdminLogin =() => {
  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const setUsername = username => {
    let temp = data;
    temp.username = username
    setData(temp)
  }

  const setPassword = password => {
    let temp = data;
    temp.password = password;
    setData(temp)
  }

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const axios = request()
    let res;

    try {
      res = await axios.post('/auth/admin', data)
      console.log(res)
      localStorage.setItem('token', res.data.bearer)
      navigate('/useradmin/dashboard')
      
    } catch(exception)
    {
      Swal.fire(exception.response.data.detail)
    }
  
    
    // navigate('/useradmin/dashboard')
  }
  return (
    <section className='skjap'>
      <div className='bkopeu'>
        <h2 className='text-big-header'>Sign in</h2>
        <div className='jlao'>
          <input type="email" name="" id="" placeholder='Enter username...' style={{ color: "white" }}
          onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className='jlao'>
          <input type="password" name="" id="" placeholder='Enter password...' style={{ color: "white" }}
          onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='jlao text-center'>
          <button onClick={handleSubmit}>Sign in</button>
        </div>
      </div>
    </section>
  )
}

export default AdminLogin