import React, { useEffect } from 'react'
import b1 from '../../../../images/b1.jpg'
import b2 from '../../../../images/b2.jpg'
import b3 from '../../../../images/b3.jpg'
import b4 from '../../../../images/b4.png'
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Wallet() {
  useEffect(() => {
    
    const tl = gsap.timeline({
      scrollTrigger:{
          trigger:".pasd",
          start:"-100px center",
          end:"200px center",
          markers:false,
      }
  }).fromTo('.pasd',{y:"80%", opacity:0}, {y:0, opacity:1}, "<70%");

  const ts = gsap.timeline({
    scrollTrigger:{
        trigger:".vsaa",
        start:"-100px center",
        end:"200px center",
        markers:false,
    }
}).fromTo('.vsaa',{y:"80%", opacity:0}, {y:0, opacity:1}, "<70%");

  
  const tb = gsap.timeline({
    scrollTrigger:{
      trigger:".innercontentmainwallet",
      start:"-120px center",
      end:"500px center",
      markers: false,
      stagger:0.2
    }
  }).fromTo('.innercontentmainwallet',{y:"40%", opacity:0}, {y:0, opacity:1, 
    stagger:{
        each:0.15,
        from:'left',
        ease: "power2.inOut",
    
    }}
    , "<20%")
  }, [])
  
  return (
    <section className='my-36'>
      <div>
        <h1 className='text-big-header font-bold pasd'>Your Own Custom Card</h1>
      </div>
      <div>
        <h2 className='text-center text-white pasd'>We introduce you our own custom wallet and currency</h2>
      </div>

      <div className='kjyii'>

        <div className="maindivoutsidewallet vsaa">
          <div className="grid-3-s mt-16">
            {/* InnerContentStart */}
            <div className='innercontentmainwallet'>
              <div className='simage'>
              <img src={b2} alt="" />
              </div>
              <div className='classinit'>
                <h2>helloworld</h2>
                <div>
                  <p>You can pay with your card</p>
                </div>
              </div>
            </div>

            {/* fellowdiv */}
            <div></div> {/*warning*/}
            {/* donotremovethisdiv */}

            <div className='innercontentmainwallet '>
            <div className='simage'>
              <img src={b1} alt="" />
              </div>
              <div className='classinit'>
                <h2>helloworld</h2>
                <div>
                  <p>You can pay with your card</p>
                </div>
              </div>
            </div>
            {/* InnerContentEnd */}
          </div>
        </div>

        <div className="maindivoutsidewallet vsaa">
          <div className="grid-3-s">
            {/* InnerContentStart */}
            <div className='innercontentmainwallet'>

            <div className='simage'>
              <img src={b3} alt="" />
              </div>
              <div className='classinit'>
                <h2>helloworld</h2>
                <div>
                  <p>You can pay with your card</p>
                </div>
              </div>

            </div>
            <div></div>
            <div className='innercontentmainwallet'>

            <div className='simage'>
              <img src={b4} alt="" />
              </div>
              <div className='classinit'>
                <h2>helloworld</h2>
                <div>
                  <p>You can pay with your card</p>
                </div>
              </div>

            </div>
            {/* InnerContentEnd */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wallet