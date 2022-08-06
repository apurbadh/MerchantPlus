import React from 'react'
import logo from '../../../images/logo.png'
import {FaShoppingCart} from 'react-icons/fa'
import {BsCreditCard2BackFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const AdminSidebar = () => {
  return (
    <section className='asdoiw'>
        <div className='asd123klj'>
            <div>
                <div className='logo-items'>
                    <img src={logo}alt="" />
                    <div className='text-white'>
                        <Link to="/useradmin/shop"><FaShoppingCart className='sidebaradicons' /></Link>
                    </div>
                    <div className='text-white'>
                        <Link to="/useradmin/card"><BsCreditCard2BackFill className='sidebaradicons'/></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AdminSidebar