//now we will create context and with this we can store all the common and state variables at one place 

import {createContext} from "react"
import { products } from "../assets/frontend_assets/assets"
//export as we can use this context in other components also 
export const ShopContext = createContext()

const ShopContextProvider = (props)=> {
 
  //we are using this variable so to change the currency of entire webpage u can also other currency also which would be use for entire website for each product 
     const currency = "$"
     const delivery_fee = 10;
  // after this we will create a component named latestcollection and in that one we will display the latest added products 

    // whenever we add any variable state variable or function within this value object then we an access it within any component using our contextapi 
    //we will add every variable here in our value object as with the help of contextapi we can access each variable in any other component thats why 
    const value = {
       products , currency , delivery_fee
    }

    return (
       <ShopContext.Provider value={value}>
          {props.children}
       </ShopContext.Provider>
    )
}

export default ShopContextProvider