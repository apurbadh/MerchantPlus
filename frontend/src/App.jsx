import {Routes, Route, useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react" 
import { AdminCard, AdminCardDetail, AdminDashboard, AdminLogin, AdminShop, AdminShopDetail, CardForm, ConnectWallet, Exchange, Home, Shop, ShopForm } from './components'
import ShopLogin from "./components/User/Shop/ShopLogin"


const App = () => {

    const [account, setAccount] = useState(null);
    const navigate = useNavigate()

    const connectToWallet = async () => {
      const { ethereum } = window

        const accounts = await ethereum.request({method: "eth_requestAccounts"})
        await setAccount(accounts[0])

        navigate("/connect")

    }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home connect={connectToWallet}/>} />
        {/* <Route path='*' element={<ErrorPage /> } /> */}
        <Route path='/connect' element={<ConnectWallet account={account}/>}  />
        <Route path='/exchange' element={<Exchange account={account}/>} />
        <Route path='/card/form' element={<CardForm account={account} />} />
        <Route path='/shop/form' element={<ShopForm account={account} />} />
        <Route path='/shop' element={<ShopLogin/>}/>
        <Route path='/shop/dashboard' element={<Shop />} />
        <Route path='/useradmin/login' element={<AdminLogin />} />
        <Route path='/useradmin/dashboard' element={<AdminDashboard />} />
        <Route path='/useradmin/shop' element={<AdminShop />}/>
        <Route path='/useradmin/card' element={<AdminCard />}/>
        <Route path='/useradmin/shop/:id' element={<AdminShopDetail />} />
        <Route path='/useradmin/card/id' element={<AdminCardDetail />} />
      </Routes>
    </div>
  )
}

export default App
