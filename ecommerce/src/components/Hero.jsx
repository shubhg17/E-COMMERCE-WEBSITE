import React from "react"
import { assets } from "../assets/frontend_assets/assets"

function Hero() {
   return (
     <> 
         <div className="flex flex-col sm:flex-row items-center pl-40 border border-gray-500 justify-between ">
         {/* //hero left section */}
              <div className="text-[#414141]">
                <div className="flex items-center  gap-3">
                     <div className="w-10  h-1 bg-[#414141]"  ></div>
                     <p className="mb-4 text-sm font-medium md:text-base">OUR BESTSELLERS</p>
                </div>
                <p className="text-4xl sm:py-3 lg:text-5xl leading-relaxed mb-4 font-semibold">Latest Arrivals</p>
                <div className="flex items-center gap-3">
                   <p className="text-sm md:text-base" >SHOP NOW</p>
                   <div className="w-10 h-1 bg-[#414141]" ></div>
                </div>
             </div> 
 
  {/* // Hero Right Section */}
          <img className="w-full sm:w-1/2" src={assets.hero_img} />
        </div>
     </>
   )
}
export default Hero