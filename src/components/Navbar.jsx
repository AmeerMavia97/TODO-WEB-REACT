import React, { useContext, useEffect, useState } from 'react'
import { signOut } from "firebase/auth";
import { auth , } from '../Config/Firebase/config'
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';


const Navbar = () => {
  const [Loading , setLoading] = useState(false)
  
  //CONTEXT
    const Data = useContext(UserContext)

  // NAVIGATE
    const navigate = useNavigate()


  //LOGOUT FUNCTION 
    function LogoutUser(){
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
            console.log(error);
          });          

    }
  return (
    <>
    <div>
        <nav className="flex bg-[#5f6c76] p-1 text-white justify-between">
            <div className="flex ml-[10%]  gap-3">
                <p className="text-blue-400 text-[30px]"></p>
                <h1 className="text-3xl mt-1 text-[#e6ebf0] font-Lobster">List Manager</h1>
            </div>

            <div className="flex gap-[30px] mt text-[14px] mr-[7%]">
                <p className="pl-[20px] pr-[20px] mt-[14px]  pt-[2px] pb-1 text-center mb-3  border-gray-300 border-[2px] border-solid rounded-[30px] text-xs text-[#e6ebf0]" >{Loading ? <span className="mt-2 loading loading-infinity loading-md"></span>:  Data[0]}</p>
                <p type="button" className="font-poppins mt-4">Profile</p>
                <p type="button" className="font-poppins mt-4">About</p>
                <p type="button" className="cursor-pointer font-poppins mt-4" onClick={LogoutUser}>Logout</p>
                <img className="w-10 h-10 mt-1 rounded-full" src={Data[1]} alt="" />
            </div>
        </nav>
    </div>
</>
  )
}

export default Navbar