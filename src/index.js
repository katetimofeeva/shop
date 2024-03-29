import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import { UserProvider } from './context/userContext'
import { ProductProvider } from './context/productContext'
import { CartProvider } from './context/cartContext'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <ProductProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </ProductProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
)
