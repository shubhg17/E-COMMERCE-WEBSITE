import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//we import this and wrapped our app component in this  so in whole project we get the support of reactrouterdom 
import {BrowserRouter} from "react-router-dom"
import ShopContextProvider from "./context/ShopContext"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* //after this we will get the support of contextapi in our project and we can use context values in any component  */}
   <ShopContextProvider>
      <App />
   </ShopContextProvider>
  </BrowserRouter>
)
