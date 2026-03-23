import React from "react"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
function Home() {
   return (
      <>
       {/* //we need to mount our hero component on this home page so whenever we open the home page it will display the hero component */}
        <Hero/> 
        {/* //mounted latestcollection component on home */}
        <LatestCollection/>  
      </>
   )
}
export default Home