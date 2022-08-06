import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../images/logo.png'

const CUNavBar= () => {
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
          <Link to="/shop/form" className='linkofthenav' onClick={refresh}>Become a merchant</Link>
          <Link to="/card/form" className='linkofthenav' onClick={refresh}>Apply for Card</Link>
        </div>
      </header>
    </nav>
  )
}

export default CUNavBar