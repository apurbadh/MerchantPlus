import React, { useState } from 'react'
import {AiOutlineSwap} from 'react-icons/ai'
import {FaEthereum} from 'react-icons/fa'
import CUNavBar from '../NavBar/CUNavBar'
import Token from "../../../abis/Token.json"
import MerchantSwap from "../../../abis/MerchantPlusSwap.json"


const Exchange = () => {
  const [CUData, setCUData] = useState("")
  return (
    <section>
        <div>
          <CUNavBar/>
        </div>

        <div className='exchangewallet'>
          {/* header */}
          <div className='headWallet'>
            <div className='title-head-wallet'>
            <h1 className='text-big'>Swap</h1>
            </div>
            <div className='title-side-head-nav text-mid mt-10'>
              <p>Total Balance</p>
              <div>
              <p className='text-right font-bold text-white text-3xl'>$9000</p>
              </div> 
            </div>
          </div>
          {/* headerend */}
            
            {/* bodystart */}
            <section className='mainbodyconnectwallet '>
              <div className='grid-3'>
                <div>
                  <div className='swaping'></div>
                </div>
                <div className='swaping'></div>
                <div className='swaping'></div>
              </div>

              <div className='grid-3 mb-5'>
                <div>
                  <h2 className='text-white font-bold text-2xl'>From</h2>
                </div>
                <div></div>
                <div className='text-white text-right font-bold text-2xl'>Receive</div>
              </div>
               {/* gridstartin */}
               <div className='grid-3-s'>
                  <div className='exchangewalletleft'>
                    <div className='kjyii'>
                        <FaEthereum className='text-3xl text-center mt-8'/>
                        <div>
                          <h2 className=' mt-8 text-5xl font-bold'>Ether</h2>
                        </div>
                        <div className='mt-10'>
                          <p className='text-xl font-semibold'>${CUData}</p>
                        </div>
                    </div> 
                  </div>
                 
                  <div className='inbetweenswap'><AiOutlineSwap className='text-white font-bold font-big' /></div>
                 
                  <div className='exchangewalletright'>
                  <div className='kjyii'>
                        <FaEthereum className='text-3xl text-center mt-8'/>
                        <div>
                          <h2 className=' mt-8 text-5xl font-bold'>Ether</h2>
                        </div>
                        <div className='mt-10'>
                          <p className='text-xl font-semibold'>$20</p>
                        </div>
                    </div> 
                  </div>
                </div>
                {/* gridstopcontetn */}
            </section>
            {/* bodyend */}
            
            {/* inputfieldsection */}
            <section className='text-center mt-28'>
              <input type="text" name="" id="" className='inpfieldconnect' placeholder='Value*' autoFocus
              onChange={(e)=>setCUData(e.target.value)}
              />
            </section>
            {/* inputfiledsectionend */}

            {/* exchangebutton */}
            <section className='text-white text-center mt-10'>
              <button className='btnconnectwallet'>Exchange</button>
            </section>
            {/* exchangebuttonend */}
        </div>
    </section>
  )
}

export default Exchange