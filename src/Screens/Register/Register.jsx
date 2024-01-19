import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div className='mt-[30px] ml-[30%] mr-[30%] mb-[100px] border-[1px] border-solid border-black'>
        <h1 className='font-Lobster mt-[30px] text-[#5f6c76] text-center text-6xl'>Register </h1>
        <div>
          <form>
            <input className='w-[80%] h-[45px] mt-9 rounded-md ml-[9%] bg-gray-200 p-3' type="text" placeholder="Enter your name" required />

            <input className='w-[80%] h-[45px] mt-5 rounded-md ml-[9%] bg-gray-200 p-3' type="text" placeholder="Enter your NAME" required />

            <input className='w-[80%] h-[45px] mt-5 rounded-md ml-[9%] bg-gray-200 p-3' type="email" placeholder="Enter Your Email" required />

            <input className='w-[80%] h-[45px] mt-5 rounded-md ml-[9%] bg-gray-200 p-3' type="Password" placeholder="Enter your Password" required />

            <input type="password" className='w-[80%] h-[45px] mt-5 rounded-md ml-[9%] bg-gray-200 p-3' placeholder="Enter your confirm Password" required />

            <input type="file" className='ml-[50px]  rounded-md mt-3 bg-white' required /> <br />
            <button className='ml-[50px] px-[187px] mt-6 font-Lobster rounded-md py-2 bg-[#5f6c76] text-lg text-white ' type='submit'>Register</button>
          </form>
          <p className='ml-[140px] mb-10 mt-6 font-poppins text-sm'>Already have an account: <span><Link to={'/'}>Login</Link></span></p>
        </div>
      </div>
    </>
  )
}

export default Register