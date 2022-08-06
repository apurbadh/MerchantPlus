import React from 'react'
import ShopNavBar from '../NavBar/ShopNavBar'
import { useRef } from 'react'
import { useEffect } from 'react';
import Cart from './Cart';
import Ruby from '../../../../images/Ruby.png'
const Shop = () => {
    const vidRef = useRef(null);

    const getCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: {width:1920, height:1080} })
        .then(stream => {
            let video = vidRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    useEffect(()=>{
        getCamera();
    }, [vidRef])
  return (
    <section className='mainshps'>
        <div>
            <ShopNavBar />
        </div>
        <div>
            <Cart />
        </div>

        <section className='mainshp-section flex'>
            {/* section1 */}
            <div className='section1-cam'>
                <div className='accescmdata'>
                    <video ref={vidRef}></video>
                </div>
            </div>
            {/* section1end */}
            
        </section>

        <section className='popupforcart'>
            {/* PopupforAdditemstocart */}
            <div className='popupwitin'>
                <div className='inside-pop'>
                    <img src={Ruby} alt="" />
                    <div className='content-jaksdkasj'>
                        <h2>Ruby</h2>
                        <div className='price'>
                        <p>$190909</p>
                        </div>
                        <div className='mt-5'>
                            <button className=' addbtnhere'>Add</button>
                            <button className=' cancelbtnhere'>Cancel</button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    </section>
  )
}

export default Shop