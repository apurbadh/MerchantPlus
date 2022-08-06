import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../images/logo.png'

const NavBar= (props) => {
  const refresh = () => {
    useEffect(()=>{
      window.location.reload(false)
    },[refresh])
  }
  return (
    <nav>
      <header className='navheader'>
        <div className='logo-nav'>
          <Link to="/">
            <img src={logo} alt="" className='logo-merchant'/>
          </Link>
        </div>

        <div className='active-nvabar'>
          <Link to="/" className='linkofthenav'>Home</Link>
          <Link to="/shop/form" className='linkofthenav'>Become a merchant</Link>
          <Link to="/card/form" className='linkofthenav'>Apply for Card</Link>
          <button className='linkofthenav' onClick={props.connect}>Connect Wallet</button>
        </div>
      </header>
    </nav>
  )
}

export default NavBar