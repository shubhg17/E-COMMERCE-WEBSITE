import React from "react"
//we need to import Route and Routes tag from reactrouterdom
import {Routes , Route} from "react-router-dom"
import Home from  "./pages/Home"
import Collection from "./pages/Collection.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Product from "./pages/Product.jsx"
import Cart from "./pages/Cart.jsx"
import Login from"./pages/Login.jsx"
import PlaceOrder from"./pages/PlaceOrder.jsx"
import Orders from "./pages/Orders.jsx"

function App() {

  return (
    <>
    {/* //see now we are doing routing like when we write /login in our url then it routes to login page and same for others so this div will be our root container   */}
    {/* // vw means viewport width and 5vw means 5 percent of screen width and same for others also vw flexible ha toh automatically responsible hain px pixels responsive nhi ha fixed hojayega 
    //  
     */}
       <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

{/* //in this routes we will create multiple routes */}
        <Routes>
        {/* //first create route for home
        //  isme 2 properties ayengi route me ek path aur ek element property path hoga / means jabh hum slash use krenge then voh home.jsx file ko open krega whenever we open the slash path it will mount the home page
         */}
        <Route path="/" element = {<Home/>} />
        <Route path="/collection" element = {<Collection/>}/>
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
  {/* // in our product page whenever we open any product then we need the product id using this we can get a particular product on this page  */}
        <Route path="/product/:productId" element = {<Product/>} />
        <Route path="/cart" element= {<Cart/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/place-order" element = {<PlaceOrder/>} />
        <Route path="/orders" element = {<Orders/>} />

        </Routes>

       </div>
    </>
  )
}

export default App
