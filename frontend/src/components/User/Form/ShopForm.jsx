import React, { useState } from 'react'
import CUNavBar from '../NavBar/CUNavBar'
import NavBar from '../NavBar/NavBar'
import request from "../../../scripts/request"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

const ShopForm = (props) => {

    const [data, setData] = useState({
        name : "",
        email: "",
        address: "",
        phone_number: "",
        password_desired: ""
    })

    const navigate = useNavigate()

    const setInput = (key, value) => {
        let temp = data;
        temp[key] = value
        setData(temp)

        console.log(data)
    }

    const submitForm = async e => {
        e.preventDefault();
        const axios = request()
        try {
            let res = await axios.post('/merchant/create', data)
            Swal.fire(res.data.success).then(() => {
                navigate('/connect')
            })
        } catch (e){
            Swal.fire("Invalid Data")
        }
        
    }


    
  return (
<section>
        <div>
            {props.account ? <CUNavBar/> : <NavBar />}

        </div>

        <section className='mnbns'>
            <div className="form-card">
                <div className='postionformdata'>
                <h1 className='text-big text-center'>Shop</h1>
                    <form className='text-white formcardtextdata' onSubmit={submitForm}>
                        <div className='sb1'>
                            <label htmlFor="Name" className='label'>Name</label><br/>
                            <input type="text" name="" id="" placeholder='Enter your username'
                            onChange={e => setInput("name", e.target.value)}
                            />
                        </div>
                        <div className='sb1'>
                            <label htmlFor="Email" className='label'>Email</label><br/>
                            <input type="email" name="" id="" placeholder='Enter your email...' 
                            onChange={e => setInput("email", e.target.value)}/>
                        </div>
                        <div className='sb1'>
                            <label htmlFor="Address" className='label'>Address</label><br/>
                            <input type="text" name="" id="" placeholder='Enter your address...'
                            onChange={e => setInput("address", e.target.value)}
                            />
                        </div>
                        <div className='sb1'>
                            <label htmlFor="Phone" className='label'>Phone</label><br/>
                            <input type="text" name="" id="" placeholder='Enter your phone no...'
                            onChange={e => setInput("phone_number", e.target.value)}
                            />
                        </div>
                        <div className='sb1'>
                            <label htmlFor="Password" className='label'>Desired Password</label><br/>
                            <input type="password" name="" id="" placeholder='Enter your desired password...' 
                            onChange={e => setInput("password_desired", e.target.value)} 
                            />
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