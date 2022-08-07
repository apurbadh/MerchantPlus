import React, { useEffect } from 'react'
import $ from 'jquery'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Smartphone from "../../../../images/phone.jpg"
import { useNavigate } from 'react-router'

const Cart = (props) => {
    // useEffect(()=>{
    //     $('.sidecart').on('click', ()=>{
    //         $('.cartsidebar').css('width', "300px")
    //     })
    // },[])
    const navigate = useNavigate()
  return (
    <section className='sidecart'>
        <div className='cartsidebar'>
            <div className='cart0contns'>

                <div className='text-white flex text-2xl font-bold' style={{borderBottom:"1px solid #ccc"}}>
                    <AiOutlineShoppingCart  className='mt-1 mr-2 mb-4'/>
                    <h2 className=''>Cart</h2>
                </div>

                {/* items of the cart start */}
                <section style={{height:"400px", overflow:"auto"}}>
                    <div className='init-cartside'>
                        {/* contents */}
                        { Array.apply(null, {length: props.cart}).map( e => 
                        <div className='grid-2-s imageofthesidecart'>
                            <img src={Smartphone} className="" alt="" />
                            <div className='content0-12text'>
                                <h2>Cell phone</h2>
                                <div className='content012-p'>
                                    <p>Smartphone</p>
                                    <p>10 MPT</p>
                                </div>
                            </div>
                        </div>
                        )}
                        {/* contentsend */}
                    </div>
                </section>
                {/* items for the cart end */}

                <section className='text-center'>
                    <button className='checkoutbtn'
                    onClick={e => navigate("/scan")}
                    >Checkout</button>
                </section>
              
            </div>
        </div>
    </section>
  )
}

export default Cart