import React, { useState, useEffect } from 'react'
import CUNavBar from '../NavBar/CUNavBar'
import { Link, useNavigate } from 'react-router-dom'
import { contractAbi, tokenAddress } from "../../../contracts/Token";
import Web3 from 'web3/dist/web3.min.js'


const ConnectWallet = (props) => {

    const navigate = useNavigate();
    const [balance, setBalance] = useState(0)

    const getBalance = async () => {
        const web3 = new Web3(Web3.givenProvider)
        const contract = new web3.eth.Contract(contractAbi, tokenAddress)
        
        contract.methods.balanceOf(await props.account).call().then(
            balance => setBalance(balance / 10000000000000000000)
        )    
    }

    useEffect(() => {
        getBalance();
    }, [])


  return (
    <section className='height-p'>
        <div>
            <CUNavBar account = { props.account } />
        </div>

        <div className='cvsdg'>
            <div className='text-white text-center mt-60 mb-32'>
                <h2 className='text-big font-bold'>Your Balance is {balance}</h2>
            </div>
            <div className='text-center'>
                <Link to="/exchange"><button className='button'>Exchange</button></Link>
            </div>
        </div>
    </section>
  )
}

export default ConnectWallet