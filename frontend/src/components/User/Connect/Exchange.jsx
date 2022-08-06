import React, { useState, useEffect } from 'react'
import {AiOutlineSwap} from 'react-icons/ai'
import CUNavBar from '../NavBar/CUNavBar'
import { swapContractAbi, swapTokenAddress } from "../../../contracts/MerchantPlusSwap"
import { contractAbi, tokenAddress } from "../../../contracts/Token";
import Web3 from 'web3/dist/web3.min.js'


const Exchange = (props) => {
  const [CUData, setCUData] = useState(0)
  const [mtv, setMtv] = useState(0)

  useEffect(() => {
      setMtv(CUData / 10)
  }, [CUData])

  const [balance, setBalance] = useState(0)

  const getBalance = async () => {
      const web3 = new Web3(Web3.givenProvider)
      const contract = new web3.eth.Contract(contractAbi, tokenAddress)
        
      contract.methods.balanceOf(await props.account).call().then(
          balance => setBalance(balance / 10000000000000000000)
        )    
  }

  const buyMPT = async () => {

    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(swapContractAbi, swapTokenAddress)

    if (balance < 1 && balance === parseInt(balance)){
      alert("Please buy more than one")
      return
    }
    console.log(web3.utils.toWei(mtv.toString(), "Ether"))
    await contract.methods.buyTokens().send({
      from: await props.account,
      value: web3.utils.toWei(mtv.toString(), "Ether")
    })

    getBalance()
  }

   useEffect(() => {
        getBalance();
    }, [])

  return (
    <section style={{ paddingBottom: "5%" }}>
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
              <p className='text-right font-bold text-white text-3xl'>{balance} MPT</p>
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
                        <div>
                          <h2 className=' mt-8 text-5xl font-bold'>Ether</h2>
                        </div>
                        <div className='mt-10'>
                          <p className='text-xl font-semibold'>{mtv}</p>
                        </div>
                    </div> 
                  </div>
                 
                  <div className='inbetweenswap'><AiOutlineSwap className='text-white font-bold font-big' /></div>
                 
                  <div className='exchangewalletright'>
                  <div className='kjyii'>
                        <div>
                          <h2 className=' mt-8 text-5xl font-bold'>MPT</h2>
                        </div>
                        <div className='mt-10'>
                          <p className='text-xl font-semibold'>{CUData}</p>
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
              <button className='btnconnectwallet' onClick={buyMPT}>Exchange</button>
            </section>
            {/* exchangebuttonend */}
        </div>
    </section>
  )
}

export default Exchange