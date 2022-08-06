import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import AdminNavBar from '../AdminNavBar'
import AdminSidebar from '../AdminSidebar'
import request from '../../../scripts/request'
import Swal from 'sweetalert2'

const AdminShopDetail = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    phone_number: 0
  })

  const navigate = useNavigate();
  const params = useParams();

  const accept = () => {
    const id = params.id 
    const axios = request()

    axios.post(`/merchant/${id}/approve`).then(
      res =>   {Swal.fire(res.data.success)
        navigate("/useradmin/shop")}
    )

    
  }

  const reject = () => {
    const id = params.id 
    const axios = request()

    axios.post(`/merchant/${id}/reject`).then(
      res =>   {Swal.fire(res.data.success)
        navigate("/useradmin/shop")}
    )

    
  }


    useEffect(() => {
        if (!localStorage.getItem('token')){
            navigate('/useradmin/login')
        }

        const id = params.id 
        const axios = request()

        axios.get(`/merchant/get/${id}`).then(
          res => setData(res.data)
        )



    }, [])
  return (
    <section className='spvc'>
      <div><AdminSidebar /></div>
      <div><AdminNavBar /></div>

      <section className='w-80per'>
        <div>
          <h2 className='text-big' style={{fontSize:"34px"}}>Merchant Application / Sam</h2>

          <div className='innerbody-shopdetail w-60per'>
            <h2 className='text-big text-center' style={{fontSize:"34px"}}>Authorization</h2>
              <div className='grid-2-s sbvjsk'>
                <div><h1 className='text-white'>Name: {data.name}</h1></div>
                <div><h1 className='text-white text-right'>Email: {data.email}</h1></div>
              </div>
              <div className='grid-2-s sbvjsk'>
                <div><h1 className='text-white'>Address: {data.address}</h1></div>
                <div><h1 className='text-white text-right'>Phone: {data.phone_number}</h1></div>
              </div>
              <div className='text-white text-center mt-40'>
                <button className='acceptbtn' onClick={accept}>Accept</button>
                <button className='rejectbtn' onClick={reject}>Reject</button>
              </div>
          </div>
          
        </div>
      </section>
    </section>
  )
}

export default AdminShopDetail