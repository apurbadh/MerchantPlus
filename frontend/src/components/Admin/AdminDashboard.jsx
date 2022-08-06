import React from 'react'
import AdminNavBar from './AdminNavBar'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
  return (
    <section>
        <div>
            <AdminSidebar />
        </div>
        <div>
            <AdminNavBar />
        </div>

        <section className='dashboardsideworkingad'>
            <div>
                <h1 className='text-big' style={{fontSize:"40px"}}>Hello Sam</h1>
                <p className='text-white text-lg'>Check what happening today !</p>
            </div>

            <div className='grid-3'>
                <div className='leftsecgd'>
                    <h2 className='text-xl font-bold mt-5 mb-7'>Random</h2>
                    <div>
                       <p className='text-3xl font-bold'>$5000000</p> 
                    </div>
                    <h2 className='mt-5'>Increased by 1000%</h2>
                </div>
                <div className='middlesecgd '>
                <h2 className='text-xl font-bold mt-5 mb-7'>Random</h2>
                    <div>
                       <p className='text-3xl font-bold'>$5000000</p> 
                    </div>
                    <h2 className='mt-5'>Increased by 1000%</h2>
                </div>
                <div className='rightsecgd '>
                <h2 className='text-xl font-bold mt-5 mb-7'>Random</h2>
                    <div>
                       <p className='text-3xl font-bold'>$5000000</p> 
                    </div>
                    <h2 className='mt-5'>Increased by 1000%</h2>
                </div>

            </div>
        </section>
    </section>
  )
}

export default AdminDashboard