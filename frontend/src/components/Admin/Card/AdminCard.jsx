import React from 'react'
import AdminSidebar from '../AdminSidebar'
import AdminNavBar from '../AdminNavBar'
import { Link } from 'react-router-dom'

const AdminCard = () => {
  return (
    <section>
        <div>
            <AdminSidebar />
        </div>
        <div>
            <AdminNavBar />
        </div>

        <section className='w-80per spvc' >
                <div>
                    <h1 className='text-big ' style={{fontSize:"40px"}}>Card Applicants</h1>
                </div>
                <div className='mnoutsidecv'>
                    {/* itemstart */}
                    
                    <div className='grid-4 text-white formdev-shop mt-10 bg-[#ba881d]'>
                        <div><h1>Name</h1></div>
                        <div><h1>Email</h1></div>
                        <div><h1>Address</h1></div>
                        <div><h1>Phone</h1></div>
                    </div>
                    
                    <Link to="/useradmin/card/id">
                    <div className='grid-4 text-white svghover formdev-shop '>
                        <div className='nmo'><h1>Ram Lal Dal</h1></div>
                        <div><h1>ramlal@gmail.com</h1></div>
                        <div><h1>Nepal</h1></div>
                        <div><h1>98765475665</h1></div>
                    </div>
                    </Link>

                    <Link to="/useradmin/card/id">
                    <div className='grid-4 text-white svghover formdev-shop '>
                        <div className='nmo'><h1>Ram Lal Dal</h1></div>
                        <div><h1>ramlal@gmail.com</h1></div>
                        <div><h1>Nepal</h1></div>
                        <div><h1>98765475665</h1></div>
                    </div>
                    </Link>
                    {/* itemend */}
                </div>
        </section>
    </section>
  )
}

export default AdminCard