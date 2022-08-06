import React, { useEffect } from 'react'
import blockchain from '../../../../images/blockchain.jpg'
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger:{
          trigger:".nsmsd",
          start:"-100px center",
          end:"200px center",
          markers:false,
      }
  }).fromTo('.nsmsd',{y:"80%", opacity:0}, {y:0, opacity:1}, "<70%");


    const tb = gsap.timeline({
      scrollTrigger:{
        trigger:".info-content",
        start:"-120px center",
        end:"500px center",
        markers: false,
        stagger:0.2
      }
    }).fromTo('.info-content',{y:"40%", opacity:0}, {y:0, opacity:1, 
      stagger:{
          each:0.15,
          from:'left',
          ease: "power2.inOut",
      
      }}
      , "<20%")
  }, [])
  
  return (
    <section className='mb-36'>
      <div className='nsmsd'>
        <h1 className='text-big-header text-center'>MerchantPlus</h1>
      </div>
      <div className='nsmsd opacity-0'>
        <h2 className='text-center text-white mt-16'>has used</h2>
      </div>

      <div className='grid-4-sm kjyii'>
        {/* elementstart */}
          <div className='info-content first-s'>
              <h2>
                Polygon : BlockChain
              </h2>
          </div>
          <div className='info-content second-s'>
            <h2>
              FastAPI
            </h2>
            </div>
            <div className='info-content third-s'>
              <h2>
                React JS
              </h2>
            </div>
            <div className='info-content last'>
              <h2>
                TensorFlow
              </h2>
            </div>  
                      {/* elementstartstop  */}

      </div>
    </section>
  )
}

export default Info