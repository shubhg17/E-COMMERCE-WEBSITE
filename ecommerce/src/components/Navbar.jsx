import React from "react"
//sabse phele import kro apne object ko vahi se images ayengi
import {assets} from  "../assets/frontend_assets/assets"
import {NavLink} from "react-router-dom"
function Navbar() {
   return (
     <>
       {/* <div className="flex items-center justify-between px-4"> 
          <img className ="h-2 w-2" src="https://imgs.search.brave.com/UUTZxbPiqXwE7dguNc5I5jPO4uTajqa0lrHpCHZfeHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbG92ZS1mb3Jl/dmVyLWVsZWdhbnQt/dGV4dC1kcmF3aW5n/LXNpZ24taGFwcHkt/dmFsZW50aW5lLXMt/ZGF5LWNvbmdyYXRz/LWNvbmNlcHQtaGFu/ZGRyYXdpbmctc3R5/bGVfNjUzNTI4LTE1/NTIuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"/>

          <div>
             <p>HOME</p>
             <p>COLLECTION</p>
             <p>ABOUT</p>
             <p>CONTACT</p>
          </div>

          <div>
             <img className="h-2 " src="https://imgs.search.brave.com/UUTZxbPiqXwE7dguNc5I5jPO4uTajqa0lrHpCHZfeHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbG92ZS1mb3Jl/dmVyLWVsZWdhbnQt/dGV4dC1kcmF3aW5n/LXNpZ24taGFwcHkt/dmFsZW50aW5lLXMt/ZGF5LWNvbmdyYXRz/LWNvbmNlcHQtaGFu/ZGRyYXdpbmctc3R5/bGVfNjUzNTI4LTE1/NTIuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"/>
             <img className="h-2" src="https://imgs.search.brave.com/UUTZxbPiqXwE7dguNc5I5jPO4uTajqa0lrHpCHZfeHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbG92ZS1mb3Jl/dmVyLWVsZWdhbnQt/dGV4dC1kcmF3aW5n/LXNpZ24taGFwcHkt/dmFsZW50aW5lLXMt/ZGF5LWNvbmdyYXRz/LWNvbmNlcHQtaGFu/ZGRyYXdpbmctc3R5/bGVfNjUzNTI4LTE1/NTIuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw" />
             <img className="h-2" src="https://imgs.search.brave.com/UUTZxbPiqXwE7dguNc5I5jPO4uTajqa0lrHpCHZfeHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbG92ZS1mb3Jl/dmVyLWVsZWdhbnQt/dGV4dC1kcmF3aW5n/LXNpZ24taGFwcHkt/dmFsZW50aW5lLXMt/ZGF5LWNvbmdyYXRz/LWNvbmNlcHQtaGFu/ZGRyYXdpbmctc3R5/bGVfNjUzNTI4LTE1/NTIuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw" />
          </div>

       </div> */}
       <div className="flex items-center justify-between py-5 font-medium">
          <img src={assets.logo} className="w-36" />

          <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            {/* //navlink react router dom se ata ha aur isme ek property hoti hai to using this property we can add the path name whenever we click on this navlink it will redirect us to '/' 
            // */}
             <NavLink to="/" className="flex flex-col items-center gap-1">
                  <p>HOME</p>
                  <hr className="w-2/4 border-none h-[1.5px] bg-gray-700"/>
             </NavLink>
             <NavLink to="/collection" className="flex flex-col items-center gap-1" >
                  <p>COLLECTION</p>
                  <div className="w-8  border-b-2 border-gray-800" ></div>
             </NavLink>
             <NavLink to="/about" className="flex flex-col items-center gap-1" >
                  <p>ABOUT</p>
                  <div className="w-6 border-b-2 border-gray-800"></div>
             </NavLink>
             <NavLink to="/contact" className="flex flex-col items-center gap-1" >
                  <p>CONTACT</p>
                  <div className="w-7 border-b-2 border-gray-800"></div>
             </NavLink>
          </ul>
       </div>

     </>
   )
}
export default Navbar