import {Routes, Route} from 'react-router-dom'
import { AdminCard, AdminCardDetail, AdminDashboard, AdminLogin, AdminShop, AdminShopDetail, CardForm, ConnectWallet, Exchange, Home, Shop, ShopForm } from './components'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='*' element={<ErrorPage /> } /> */}
        <Route path='/connect' element={<ConnectWallet />} />
        <Route path='/exchange' element={<Exchange />} />
        <Route path='/card/form' element={<CardForm />} />
        <Route path='/shop/form' element={<ShopForm />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/useradmin/login' element={<AdminLogin />} />
        <Route path='/useradmin/dashboard' element={<AdminDashboard />} />
        <Route path='/useradmin/shop' element={<AdminShop />}/>
        <Route path='/useradmin/card' element={<AdminCard />}/>
        <Route path='/useradmin/shop/id' element={<AdminShopDetail />} />
        <Route path='/useradmin/card/id' element={<AdminCardDetail />} />
      </Routes>
    </div>
  )
}

export default App
