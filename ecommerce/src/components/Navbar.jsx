import React from "react"
//sabse phele import kro apne object ko vahi se images ayengi
import {assets} from  "../assets/frontend_assets/assets"
//this navlink is used for navigation and active state detect krta hain kaunsa page currenlty open ha voh btao 
import {NavLink} from "react-router-dom"  
//navigating between pages WITHOUT reloading the website used for this 
//sirf navigation ke liye hota hain bas page change krdo by link tag
import {Link} from "react-router-dom" 
import {useState} from "react"
function Navbar() {

   const [visible , setVisible] = useState(false)

   return (
     <>
       {/* <div className="flex items-center justify-between px-4"> 
          <img className ="h-2 w-2" src="https://imgs.search.brave.com/UUTZxbPiqXwE7dguNc5I5jPO4uTajqa0lrHpCHZfeHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbG92ZS1mb3Jl/dmVyLWVsZWdhbnQt/dGV4dC1kcmF3aW5n/LXNpZ24taGFwcHktdmFsZW50aW5lLXMtZGF5LWNvbmdyYXRzLWNvbmNlcHQtaGFuZGhyYXdpbmctc3R5bGVfNjUzNTI4LTE1NTIuanBnP3NlbXQ9YWlzX2h5YnJpZCZ3PTc0MCZxPTgw"/>

          <div>
             <p>HOME</p>
             <p>COLLECTION</p>
             <p>ABOUT</p>
             <p>CONTACT</p>
          </div>

          <div>
             <img className="h-2 " src="https://imgs.search.brave.com/UUTZxbPiqXwE7dguNc5I5jPO4uTajqa0lrHpCHZfeHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbG92ZS1mb3Jl/dmVyLWVsZWdhbnQt/dGV4dC1kcmF3aW5n/LXNpZ24taGFwcHktdmFsZW50aW5lLXMtZGF5LWNvbmdyYXRzLWNvbmNlcHQtaGFuZGhyYXdpbmctc3R5bGVfNjUzNTI4LTE1NTIuanBnP3NlbXQ9YWlzX2h5YnJpZCZ3PTc0MCZxPTgw"/>
             <img className="h-2" src="https://imgs.search.brave.com/UUTZxbPiqXwE7dguNc5I5jPO4uTajqa0lrHpCHZfeHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbG92ZS1mb3Jl/dmVyLWVsZWdhbnQt/dGV4dC1kcmF3aW5n/LXNpZ24taGFwcHktdmFsZW50aW5lLXMtZGF5LWNvbmdyYXRzLWNvbmNlcHQtaGFuZGhyYXdpbmctc3R5bGVfNjUzNTI4LTE1NTIuanBnP3NlbXQ9YWlzX2h5YnJpZCZ3PTc0MCZxPTgw" />
             <img className="h-2" src="https://imgs.search.brave.com/UUTZxbPiqXwE7dguNc5I5jPO4uTajqa0lrHpCHZfeHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbG92ZS1mb3Jl/dmVyLWVsZWdhbnQt/dGV4dC1kcmF3aW5n/LXNpZ24taGFwcHktdmFsZW50aW5lLXMtZGF5LWNvbmdyYXRzLWNvbmNlcHQtaGFuZGhyYXdpbmctc3R5bGVfNjUzNTI4LTE1NTIuanBnP3NlbXQ9YWlzX2h5YnJpZCZ3PTc0MCZxPTgw" />
          </div>

       </div> */}
      <div className="flex items-center justify-between py-5 font-medium">
          <img src={assets.logo} className="w-36" />

          <div className="hidden sm:flex gap-5 text-sm text-gray-700">
            {/* //navlink react router dom se ata ha aur isme ek property hoti hai to using this property we can add the path name whenever we click on this navlink it will redirect us to '/' 
            // */}
         {/* //whenever we open any route so in that navlink in className it will automatically add active class in it  */}
             <NavLink to="/" className="flex flex-col items-center gap-1">
                  <p>HOME</p>
                 <div className="w-8  border-b-2 border-gray-800 hidden" ></div>
             </NavLink>
             <NavLink to="/collection" className="flex flex-col items-center gap-1" >
                  <p>COLLECTION</p>
                  <div className="w-8  border-b-2 border-gray-800 hidden" ></div>
             </NavLink>
             <NavLink to="/about" className="flex flex-col items-center gap-1" >
                  <p>ABOUT</p>
                  <div className="w-6 border-b-2 border-gray-800 hidden"></div>
             </NavLink>
             <NavLink to="/contact" className="flex flex-col items-center gap-1" >
                  <p>CONTACT</p>
                  <div className="w-7 border-b-2 border-gray-800 hidden"></div>
             </NavLink>
          </div>

         <div className="flex items-center gap-6">
              <img src={assets.search_icon} className="w-5 cursor-pointer"  />

{/* //group → parent banata hai  , group-hover → child ko control karta hai
//  so basically jabh hum profile pe hover krenge toh dropdownmenu khulega but agar me group hata du toh uss dropdown me hover nhi ho payega but group se udhar bhi hover hopayega uss dropdown menu wale div mein bas baki same concept relative and absolute ka hain cart icon jesa link tag me 

*/}
              <div className="group relative">
                     <img src={assets.profile_icon} className="w-5 cursor-pointer"/>
                     <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
                              <p className="cursor-pointer hover:text-black">My Profile</p>
                              <p className="cursor-pointer hover:text-black">Orders</p>
                              <p className="cursor-pointer hover:text-black">Logout</p>
                              </div>
                    </div>
             </div>
             {/* //relative-parent , absolute-child hume agar kisi ek element ko kisi ek element ke upar chipkana ha toh jispe chipkana hain voh banega relative aur joh chipkane wala hain voh banega absolute and baki positoning se position krdo absolute humesha apne nearest relative parent pe hi lagta hain agar relative nhi hoga toh absolute webpage ke hisab se apply hojayega */}
             <Link to="/cart" className="relative"> 
             {/* //Use min-w when: icons in flexbuttons in fleximportant elements shouldn’t shrink basically when screen size is small it dont shrink so we added this min width 
             // it is not needed if this image tag is already under 
             */}
             {/* //we use min only on cart image as it is absolute and dependent on link which is relative and parent for this image tag and absolute is child so if icon is so small then the notification badge will not be visible so its for that and safety purposes  we dont created for search icon as there only icon is there not other thing on image */}
              <img src={assets.cart_icon} className="w-5 min-w-5"/>
              {/* //aspect-square means height = width; */}
              {/* //leading-4 : line height (center text vertically) */}
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
             </Link>
             {/* //now we are making our site responsive as for mobile phones a side bar menu should be there so we are creating that  */}
             <img onClick={()=>setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden"  />
         </div>

         {/* //now we are creating sidebar menu for small screens */}

 {/* // here we will provide the dynamic class name it is that where we use the state variables and whenever the varibale changes then it will change the class name so to use dynamic class name we use first curly braces then back ticks/string interpolation and in this curly brackets with $ we use the ternary operator */}
 
 {/* //transition-all duration-300 : Matlab:width change instantly nahi hoga 300ms me smooth animation hoga 
  // overflow-hidden : means jabh tum w-0 kroge toh joh sidebar ke andar ka content lekin hide nhi hoga voh dikh jayega toh usse hide krne ke liye yeh use krna zaruri hain 
 */}
  <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all
 duration-300 ${visible ? "w-full" : "w-0"}`}>
                 {/* //in this div we will add multiple menu links and something to close that menu back at webpage like that */}
            <div className="flex flex-col text-gray-600">
            {/* //ki jabh tum iss div pe click kroge jisme merepe image aur para hain toh voh band hojana chaiye uske liye div pe onClick event use krliya  */}
                   <div onClick = {()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                      <img src={assets.dropdown_icon} className="h-4 rotate-180" />
                      <p>Back</p>
                   </div> 
                   {/* //hum jabh navlink pe click krenge toh side bar menu close hojana chaiye isliye sare navlinks pe onclick lagado */}
                   <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
                   <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/collection" >COLLECTION</NavLink>
                   <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
                   <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
            </div>                 
       </div>
       </div>
     </>
   )
}
export default Navbar