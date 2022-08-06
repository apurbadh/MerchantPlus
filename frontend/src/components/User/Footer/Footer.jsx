import React, { useEffect } from 'react'
import logo from '../../../../images/logo.png'
import {AiFillGithub} from 'react-icons/ai'
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    // useEffect(()=>{
    //     gsap.set('footer', { yPercent: -50 })

    //         const uncover = gsap.timeline({ paused:true })

    //         uncover
    //         .to('section.footer-container', { yPercent: 0, ease: 'none' })
    //         ;

    //         ScrollTrigger.create({  
    //         trigger: 'footer',
    //         start: 'bottom center',
    //         end: '+=40%',
    //         animation: uncover,
    //         scrub: true,  
    //         markers: true,
    //         })
    // })
  return (
    <footer>
        <section className='w-80per'>
        <div className='grid-3 pt-10'>
            <div className='frontline'>
                <div className='header-img-footer'>
                    <img src={logo} alt="" />
                    <h2 className='text-white'>MerchantPlus</h2>
                </div>
                <div>
                    <p className='text-white font-semibold text-lg ml-10 pb-10'>The WebSite that destroys your future</p>
                </div>

            </div>

            <div className='secondline'>
                <div>
                    <h2>Product</h2>
                </div>
                <div className='flex contents-footerinint'>
                    <AiFillGithub className='text-3xl' />
                    <p className=' ml-4 text-lg font-semibold '>Github</p>
                </div>
            </div>
            <div className='backline'>
                <div>
                    <h2>Developed by</h2>
                </div>
                    <div className='contents-footerinintback'>
                        <p>BotsWithDots</p>
                    </div>
            </div>
        </div>
        </section>
    </footer>
  )
}

export default Footer