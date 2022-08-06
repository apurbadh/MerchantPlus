import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Start = () => {
  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger:{
        trigger:"onefs",
        start:"300px center",
        end:"850px center",
        markers: false,
        stagger:0.8
      }
    }).fromTo('.startwork',{y:"40%", opacity:0}, {y:0, opacity:1, 
      stagger:{
          each:0.9,
          from:'center',
          ease: "power2.inOut",
      
      }}
      , "<20%")
  }, [])
  
  return (
    <section className='mt-32 startwork' style={{marginBottom:"300px"}}>
      <div className='onefs'>
        <h2 className='text-center text-white mb-10'>Developed by BotsWithDots</h2>
      </div>

      <div className='kjyii'>
        <h1 className='text-center text-big font-bold capitalize'>Secure Way Of Selling Your Goods And Paying For It</h1>
      </div>
{/* 
      <div className='text-center my-10 text-white'>
        Loading 
      </div> */}

      <div className='my-10'>
        <h2 className='text-center font-light text-2xl capitalize text-white'>MerchantPlus is most secure way of trading goods online</h2>
      </div>

    </section>
  )
}

export default Start