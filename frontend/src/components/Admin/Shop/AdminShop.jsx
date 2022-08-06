import React from 'react'
import AdminSidebar from '../AdminSidebar'
import AdminNavBar from '../AdminNavBar'
import { Link } from 'react-router-dom'

const AdminShop = () => {
  return (
    <section>
        <div>
            <AdminSidebar />
        </div>
        <div>
            <AdminNavBar />
        </div>

        <section className='w-80per spvc' >
                <div className='flex'>
                    <h1 className='text-big ' style={{fontSize:"40px"}}>Shop Applicants</h1>
                   <button className='text-white'>Grid</button>
                </div>
                <div className='mnoutsidecv'>
                    {/* itemstart */}
                    <div className='grid-4 text-white formdev-shop mt-10 bg-[#897990]'>
                        <div><h1>Name</h1></div>
                        <div><h1>Email</h1></div>
                        <div><h1>Address</h1></div>
                        <div><h1>Phone</h1></div>
                    </div>

                    <Link to="/useradmin/shop/id">
                    <div className='grid-4 text-white svghover formdev-shop'>
                        <div className='nmo'><h1>Ram Lal Dubashi</h1></div>
                        <div><h1>ram@gmail.com</h1></div>
                        <div><h1>China</h1></div>
                        <div><h1>098765676</h1></div>
                    </div>
                    </Link>
                    <Link to="/useradmin/shop/id">
                    <div className='grid-4 text-white svghover formdev-shop'>
                        <div className='nmo'><h1>Ram Lal Dubashi</h1></div>
                        <div><h1>ram@gmail.com</h1></div>
                        <div><h1>China</h1></div>
                        <div><h1>098765676</h1></div>
                    </div>
                    </Link>
                    {/* itemend */}
                </div>
        </section>
    </section>
  )
}

export default AdminShop