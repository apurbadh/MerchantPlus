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
                    
                    
                </div>
        </section>
    </section>
  )
}

export default AdminCard