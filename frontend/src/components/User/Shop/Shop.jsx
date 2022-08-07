import React, { useState } from 'react'
import ShopNavBar from '../NavBar/ShopNavBar'
import { useRef } from 'react'
import { useEffect } from 'react';
import Cart from './Cart';
import Ruby from '../../../../images/Ruby.png'
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { drawRect } from '../../../scripts/draw';
import Swal from 'sweetalert2';

let test = []

const Shop = () => {

    const [cart, setCart] = useState(0);
     const webcamRef = useRef(null);
  const canvasRef = useRef(null);


  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);

      if ((await obj)[0].class == "cell phone"){
        if (test.length > 15){
            test = []
            Swal.fire({
                title: "Do you want to add cellphone ?",
                showDenyButton: true,
                confirmButtonText: 'Add to cart',
                denyButtonText: `Dismiss`,
            }).then(
                res => {
                    console.log(cart)
                    if (res.isConfirmed)
                    {
                        setCart(cart +  1)
                    }
                }
            )
        }else {
            test.push('cellphone')
        }
      }
      

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx); 
    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
    <section className='mainshps'>
        <div>
            <ShopNavBar />
        </div>
        <div>
            <Cart cart={cart}/>
        </div>

        <section className='mainshp-section flex'>
        <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
            marginTop: 20
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
            
        </section>

        {/* <section className='popupforcart'>
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
        </section> */}
    </section>
  )
}

export default Shop