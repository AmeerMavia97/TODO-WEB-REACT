import React from 'react'
import Navbar from './Navbar'

const Card = () => {
    return (
        <>
           <body className='bg-gray-100 pt-3 pb-[90px]'>
           <div className='bg-gray-100 '>
                <div className='ml-[30%] p-1 mr-[30%] rounded mt-9 flex justify-between'>
                    <p className='text-xl font-bold text-[#585858]' >items</p>
                    <div className=''>
                        <button className='text-white  mr-6'><i class=" text-[#7e7d7d] fa-solid fa-trash"></i></button>
                        <button className='text-white mr-3'><i class="text-[#7e7d7d] mr-3 fa-solid fa-pen-to-square"></i></button>
                    </div>
                </div>
                <span  ><hr className='  ml-[27%] w-[43%] '  /><hr className='  ml-[27%] w-[43%] '  /> <hr className='  ml-[27%] w-[43%] '  /> <hr className='  ml-[27%] w-[43%] '  /></span>
            </div>
            
           </body>
            
        </>


    )
}

export default Card