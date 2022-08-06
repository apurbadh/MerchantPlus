import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../../../images/logo.png'

const AdminNavBar= () => {
  return (
    <nav>
      <header className='navheader'>
        <div className='logo-nav'>
          {/* <Link to="/">
            <img src={logo} alt="" className='logo-merchant'/>
          </Link> */}
        </div>

        <div className='active-nvabar'>
          <Link to="/useradmin/dashboard" className='linkofthenav'>Dashboard</Link>
          <Link to="/useradmin/shop" className='linkofthenav'>Shop</Link>
          <Link to="/useradmin/card" className='linkofthenav'>Card</Link>
          <Link to="/" className='linkofthenav'>Logout</Link>
        </div>
      </header>
    </nav>
  )
}

export default AdminNavBar