import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div  className='mt-[60px] ml-[30%] mr-[35%] mb-[100px] border-[1px] border-solid border-black'>
                <h1 className='font-Lobster mt-[30px] text-[#5f6c76] text-center text-6xl'>Login</h1>
                <div>
                    <form >
                        <input className='w-[80%] h-[45px] mt-10 rounded-md ml-[9%] bg-gray-200 p-3' type="email" placeholder="Enter Your Email"  />

                        <input className='w-[80%] mt-5 h-[45px]  ml-[9%] rounded-md bg-gray-200 p-3' type="Password" placeholder="Enter Your Password" />

                        <input type="password" className='mt-5 w-[80%] h-[45px] rounded-md ml-[9%] p-3 bg-gray-200' placeholder="Enter Your Confirm Password" /> <br />

                        <button className='ml-[45px] px-[173px] mt-5 font-Lobster rounded-md text-lg py-[10px] bg-[#5f6c76] text-white ' type='submit'>Login</button>
                    </form>
                    <p className='ml-[120px] mb-12 mt-7 text-sm font-poppins'>Dont have an account?<Link to={'/Register'}>sign up</Link>  </p>
                </div>
            </div>
    </>
  )
}

export default Login