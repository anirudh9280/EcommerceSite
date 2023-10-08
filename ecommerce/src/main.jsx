import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductProvider from './contexts/ProductContext.jsx'
import './index.css'
import SidebarProvider from "./contexts/SidebarContext"
import CartProvider from "./contexts/CartContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
)
