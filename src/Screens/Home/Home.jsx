import React from 'react'
import Navbar from '../../Components/Navbar'
import Card from '../../Components/Card'
import Fotter from '../../Components/Fotter'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='bg-gray-100 '>
        <form className='text-center'>
          <input type="text" className='text-white bg-gray-300 px-3 mt-[80px]  w-[39%] rounded-md mr-10 h-10  ' placeholder='ENTER YOUR TODO' /> <br />
          <button type='submit' className='px-[250px] pb-[6px] mr-10 pt-[8px] mt-3 bg-[#5f6c76] rounded-md text-white font-poppins '>Add</button>
        </form>
      </div>
      <Card></Card>
      <Fotter></Fotter>
    </>

  )
}

export default Home