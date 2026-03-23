import React from "react"

//in title we will display 2 texts and we will get those 2 texts using the props 
const Title = ({text1 , text2})=> {
   return (
     <>
      <div className="inline-flex gap-2 items-center mb-3">
         <p className="text-gray-500">{text1} <span className="text-gray-700 font-medium " >{text2}</span> </p>
         {/* // this is just a line */}
         <p className="w-8 sm:w-12 border-b-2 border-gray-700"  ></p>
      </div>
     </>
   )
}

export default Title