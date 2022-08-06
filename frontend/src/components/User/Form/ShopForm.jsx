import React from 'react'
import CUNavBar from '../NavBar/CUNavBar'
import NavBar from '../NavBar/NavBar'

const ShopForm =(props) => {
    
  return (
<section>
        <div>
            {props.account ? <CUNavBar/> : <NavBar />}

        </div>

        <section className='mnbns'>
            <div className="form-card">
                <div className='postionformdata'>
                <h1 className='text-big text-center'>Shop</h1>
                    <form className='text-white formcardtextdata'>
                        <div className='sb1'>
                            <label htmlFor="Name" className='label'>Name</label><br/>
                            <input type="text" name="" id="" placeholder='Enter your username' />
                        </div>
                        <div className='sb1'>
                            <label htmlFor="Email" className='label'>Email</label><br/>
                            <input type="email" name="" id="" placeholder='Enter your email...' />
                        </div>
                        <div className='sb1'>
                            <label htmlFor="Address" className='label'>Address</label><br/>
                            <input type="text" name="" id="" placeholder='Enter your address...'/>
                        </div>
                        <div className='sb1'>
                            <label htmlFor="Phone" className='label'>Phone</label><br/>
                            <input type="text" name="" id="" placeholder='Enter your phone no...'/>
                        </div>
                        <div className='sb1'>
                            <label htmlFor="Password" className='label'>Desired Password</label><br/>
                            <input type="text" name="" id="" placeholder='Enter your desired password...' />
                        </div>
                        <div className='sb1 text-center'>
                            <button className='btncardform'>Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </section>  )
}

export default ShopForm