import React from "react"
import {useContext} from "react"
import {ShopContext} from "../context/ShopContext"
//we will  display this data within this div in return 
function ProductItem({id,image,name,price}) {

 // first we will get currency value from the context which we created in our ShopContext
  const {currency} = useContext(ShopContext)

  //we will get currency details from shopcontext and id , image , name , price from props  

   return (
     <>
         <div>
            
         </div>
     </>
   )
}

export default ProductItem