import React from 'react'
import AdminNavBar from '../AdminNavBar'
import AdminSidebar from '../AdminSidebar'

const AdminShopDetail = () => {
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
                <div><h1 className='text-white'>Name: Samyam</h1></div>
                <div><h1 className='text-white text-right'>Email: lol@lol.com</h1></div>
              </div>
              <div className='grid-2-s sbvjsk'>
                <div><h1 className='text-white'>Address: ChinaTown</h1></div>
                <div><h1 className='text-white text-right'>Phone: 9876543221</h1></div>
              </div>
              <div className='text-white text-center mt-40'>
                <button className='acceptbtn'>Accept</button>
                <button className='rejectbtn'>Reject</button>
              </div>
          </div>
          
        </div>
      </section>
    </section>
  )
}

export default AdminShopDetail