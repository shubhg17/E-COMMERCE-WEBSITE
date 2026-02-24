import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//we import this and wrapped our app component with this  so in whole project we get the support of reactrouterdom 
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
