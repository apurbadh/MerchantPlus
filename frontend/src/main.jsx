import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import App from './App'
import './index.css'
import './css/nav/nav.css'
import './css/body/body.css'
import './css/shop/shop.css'
import './css/form/form.css'
import './css/admin/admin.css'
import './css/footer/footer.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
    <MantineProvider withGlobalStyles>
    <App />
    </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
)
