import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from 'react-icons/io5';
import { BsCartDashFill } from "react-icons/bs";


const ArrivalComponents = ({item}) => {
    
    
  return (
    <div className="!w-[97%] mx-2">
        <div className="">
        <div className="">
            <div className="relative group overflow-hidden">
                <img className="w-full" src={item.thumbnail} alt="" />
                <ul className='bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4'>
                    <li>Add to Wish List <FaHeart className='inline-block'/></li>
                    <li>Compare<IoGitCompareOutline className='inline-block'/></li>
                    <li>Add to Cart <BsCartDashFill className='inline-block'/></li>
                </ul>
            </div>
             
            
        </div>
        <div className="">
        <div className="flex justify-between">
                <div className="">
                    <h2 className='font-bold font-sans text-[20px] text-[#262626]'>{item.title}</h2>
                    <h3 className='font-sans text-[16px] text-[#767676]'>{item.brand}</h3>
                </div>
                <h2 className=' font-sans text-[16px] text-[#767676]'>${item.price}</h2>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ArrivalComponents