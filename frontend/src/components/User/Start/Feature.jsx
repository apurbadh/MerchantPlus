import React, { useEffect } from 'react'
import {FaWallet} from 'react-icons/fa'
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Feature = () => {

  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
          trigger:".featureheader",
          start:"-100px center",
          end:"200px center",
          markers:false,
      }
  }).fromTo('.featureheader',{y:"80%", opacity:0}, {y:0, opacity:1}, "<70%");

  const tb = gsap.timeline({
    scrollTrigger:{
      trigger:".fea-elements",
      start:"-120px center",
      end:"500px center",
      markers: false,
      stagger:0.2
    }
  }).fromTo('.fea-elements',{y:"40%", opacity:0}, {y:0, opacity:1, 
    stagger:{
        each:0.2,
        from:'left',
        ease: "power2.inOut",
    
    }}
    , "<20%")
  }, [])
  
  return (
    <section className='my-36'>
      <div className='featureheader'>
        <h1 className='text-white text-center text-big-header font-bold kjyii'>Why use others when you have MerchantPlus</h1>
      </div>
      <div className='featureheader'>
        <h2 className='text-center text-white font-light mt-8'>Our servers are very safe</h2>
      </div>
      <div className='kjyii'>
        <div className='grid-2 sjhda'>
          {/* grid-elements-start */}
          <div className='fea-elements'>
            <div className='fea-header-component gap-2 text-white text-center mt-20 mb-5'>
              {/* <FaWallet className='text-4xl'/> */}
              <h2 className='text-2xl font-bold'>Safe Wallet</h2>  
            </div>
            <div className='fea-elements-context'>
              <p>Use multiple-signatures to manage your transactions</p>
            </div>
          </div>

          <div className='fea-elements' style={{background:"#1f2933"}}>
            <div className='fea-header-component gap-2 text-white text-center mt-20 mb-5'>
              {/* <FaWallet className='text-4xl'/> */}
              <h2 className='text-2xl font-bold'>Instant - Continuous</h2>  
            </div>
            <div className='fea-elements-context'>
              <p>Transcations can be easily viewed, paused and removed whenever you desire</p>
            </div>
          </div>

          <div className='fea-elements' style={{background:"#2e3135"}}>
            <div className='fea-header-component gap-2 text-white text-center mt-20 mb-5'>
              {/* <FaWallet className='text-4xl'/> */}
              <h2 className='text-2xl font-bold'>Your Own Shop</h2>  
            </div>
            <div className='fea-elements-context'>
              <p>Create your own shop and sell yours items</p>
            </div>
          </div>

          <div className='fea-elements' style={{background:"#2f382f"}}>
            <div className='fea-header-component gap-2 text-white text-center mt-20 mb-5'>
              {/* <FaWallet className='text-4xl'/> */}
              <h2 className='text-2xl font-bold'>Fully Secure Transactions</h2>  
            </div>
            <div className='fea-elements-context'>
              <p>Your transaction are fully encrypted and secure</p>
            </div>
          </div>

          
          {/* grid-elements-end */}
        </div>
      </div>
    </section>
  )
}

export default Feature