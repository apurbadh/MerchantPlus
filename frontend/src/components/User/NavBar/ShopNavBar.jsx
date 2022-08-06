import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../images/logo.png'

const ShopNavBar= () => {
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

        <div className='active-nvabar flex'>
          <Link to="/" className='linkofthenav' onClick={refresh}>Home</Link>
          <p className='popupqrCode'>QR Code</p>
        </div>
      </header>
    </nav>
  )
}

export default ShopNavBar