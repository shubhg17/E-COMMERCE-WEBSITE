import React from "react"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
function Home() {
   return (
      <>
       {/* //we need to mount our hero component on this home page so whenever we open the home page it will display the hero component also on the home page  */}
        <Hero/> 
        {/* //mounted latestcollection component on home so it also shows on home whenever we click on home */}
        <LatestCollection/>  
      </>
   )
}
export default Home