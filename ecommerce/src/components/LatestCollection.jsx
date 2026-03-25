import React from "react"
import {useContext , useState , useEffect} from "react"
import { ShopContext } from "../context/ShopContext"
// import {ShopContext} from "./context/ShopContext"
//we need to mount this component on our home page 
import Title from "./Title"
function LatestCollection() {

 //before this return statement we will get the products data using the contextapi  
    const {products} = useContext(ShopContext)
    
    const [latestProducts , setlatestProducts] = useState([])

    //after that whenever this component will be loaded then from this products data we have to load the 10 products in this latestProducts state so for that we will use the useEffect hook 

    useEffect(()=>{
      //with this in our latestProducts state we will get 10 products 
       setlatestProducts(products.slice(0,10))
    } , [])
    //here dependencyarray  for this useEffect hook would be an empty array so that this function will be executed once when the component gets loaded 

    //to check if we are getting data of all the products so we can check like this 
   //  console.log(products)

   return (
      <>
        <div className="my-10">
            <div className="text-center py-8 text-3xl" >
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
              <p className="text-gray-600 w-3/4 m-auto text-sm md:text-xl" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tenetur non tempore maxime  </p>
            </div>

           {/* // after this div here we will be adding our logic so that in this latestcollection section we can display the recently added 10 products for that first we need to get  the 10 products from products data for that we will store the 10 products from this product array in one state variable  */}

           {/* //now we will display our productlist so to do that first we create productitem and then we will map that using our array so we will create another component named productitem.jsx */}

        </div>


      </>
   )
}

export default LatestCollection