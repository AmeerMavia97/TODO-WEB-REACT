import React from 'react'
import Pic from '../assets/react.svg'


const Navbar = () => {
  return (
    <>
    <div>
        <nav className="flex bg-[#5f6c76] p-1 text-white justify-between">
            <div className="flex ml-[10%]  gap-3">
                <p className="text-blue-400 text-[30px]"></p>
                <h1 className="text-3xl mt-1 text-[#e6ebf0] font-Lobster">List Manager</h1>
            </div>

            <div className="flex gap-[30px] mt text-[14px] mr-[7%]">
                <p className="pl-[20px] pr-[20px] mt-[14px]  pt-[2px] pb-1 text-center mb-3  border-gray-300 border-[2px] border-solid rounded-[30px] text-xs text-[#e6ebf0]" >Ameer Mavia</p>
                <p type="button" className="font-poppins mt-4">Profile</p>
                <p type="button" className="font-poppins mt-4">About</p>
                <p type="button" className="font-poppins mt-4">Logout</p>
                <img className="w-10 h-10 mt-1 rounded-full" src={Pic} alt="" />
            </div>
        </nav>
    </div>
</>
  )
}

export default Navbar