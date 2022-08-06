import React, { useEffect } from 'react'
import $ from 'jquery'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Ruby from '../../../../images/Ruby.png'

const Cart = () => {
    // useEffect(()=>{
    //     $('.sidecart').on('click', ()=>{
    //         $('.cartsidebar').css('width', "300px")
    //     })
    // },[])
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
                        <div className='grid-2-s imageofthesidecart'>
                            <img src={Ruby} className="" alt="" />
                            <div className='content0-12text'>
                                <h2>Ruby</h2>
                                <div className='content012-p'>
                                    <p>Ruby on Rails</p>
                                    <p>$10000</p>
                                </div>
                            </div>
                        </div>
                        {/* contentsend */}
                         {/* contents */}
                         <div className='grid-2-s imageofthesidecart'>
                            <img src={Ruby} className="" alt="" />
                            <div className='content0-12text'>
                                <h2>Ruby</h2>
                                <div className='content012-p'>
                                    <p>Ruby on Rails</p>
                                    <p>$10000</p>
                                </div>
                            </div>
                        </div>
                        {/* contentsend */}
                    </div>
                </section>
                {/* items for the cart end */}

                <section className='text-center'>
                    <button className='checkoutbtn'>Checkout</button>
                </section>
              
            </div>
        </div>
    </section>
  )
}

export default Cart