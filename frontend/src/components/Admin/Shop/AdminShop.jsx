import React, { useEffect, useState } from 'react'
import AdminSidebar from '../AdminSidebar'
import AdminNavBar from '../AdminNavBar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import request from "../../../scripts/request"


const AdminShop = () => {
    
    const navigate = useNavigate();
    const [data, setData] = useState([])
    
    useEffect( () => {
        if (!localStorage.getItem('token')){
            navigate('/useradmin/login')
        }

        const axios = request()
        axios.get("/merchant/get").then(res => {
            setData(res.data)
        })
    
    }, [])
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
                </div>
                <div className='mnoutsidecv'>
                    {/* itemstart */}
                    <div className='grid-4 text-white formdev-shop mt-10 bg-[#897990]'>
                        <div><h1>Name</h1></div>
                        <div><h1>Email</h1></div>
                        <div><h1>Address</h1></div>
                        <div><h1>Phone</h1></div>
                    </div>
                    {data.map(
                        item => <Link to={`/useradmin/shop/${item.id}`} >
                    <div className='grid-4 text-white svghover formdev-shop'>
                        <div className='nmo'><h1>{item.name}</h1></div>
                        <div><h1>{item.email}</h1></div>
                        <div><h1>{item.address}</h1></div>
                        <div><h1>{item.phone_number}</h1></div>
                    </div>
                    </Link>
                    )}
                    
                    
                </div>
        </section>
    </section>
  )
}

export default AdminShop