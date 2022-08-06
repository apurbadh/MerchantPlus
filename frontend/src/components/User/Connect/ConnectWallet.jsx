import React, { useEffect } from 'react'
import CUNavBar from '../NavBar/CUNavBar'
import { Link, useNavigate } from 'react-router-dom'
import Token from "../../../abis/Token.json"

const ConnectWallet = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (! props.account)
        {
            navigate('/')
        }
    }, [])


  return (
    <section className='height-p'>
        <div>
            <CUNavBar account = { props.account } />
        </div>

        <div className='cvsdg'>
            <div className='text-white text-center mt-60 mb-32'>
                <h2 className='text-big font-bold'>Your Balance is ...</h2>
            </div>
            <div className='text-center'>
                <Link to="/exchange"><button className='button'>Exchange</button></Link>
            </div>
        </div>
    </section>
  )
}

export default ConnectWallet