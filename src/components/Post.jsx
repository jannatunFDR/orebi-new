import React, { useContext, useEffect, useState } from 'react'
import ShopImg from "../assets/pro-one.jpg"
import { FaHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from 'react-icons/io5';
import { BsCartDashFill } from "react-icons/bs";
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';

const Post = ({allPage, activeGrid, categoryFilter, priceShow}) => {
    let {info , loading} = useContext(ApiData)
    let [filterShow, setFilterShow] = useState([]);
    let [count, setCount] = useState(true);
    
    console.log(priceShow);
    
    useEffect(() => {
        let fiveFilter = categoryFilter.slice(0, 5);
        setFilterShow(fiveFilter);
      }, [categoryFilter]);

      let handleSee = () => {
        setFilterShow(categoryFilter);
        setCount(false);
      };

      let handleSeeless = () => {
        let fiveFilter = categoryFilter.slice(0, 5);
        setFilterShow(fiveFilter);
        setCount(true);
      };
    
    
    
    
  return (
    <>
    {filterShow.length > 0 ? 
        <>
        <div className="flex flex-wrap">
            {filterShow.map((item) => (
            <div className="w-[32%]">
            <div className="">
                <div className="relative group overflow-hidden">
            <Link to={`/shop/${item.id}`}>
                    <img className="w-full" src={item.thumbnail} alt="" />
            </Link>
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
    
        ))}
        </div>
    
        <div className="">
            {count ? categoryFilter.length > 5 &&
            (
             <div  onClick={handleSee} className="">
                <button className="px-[20px] md:px-[40px] py-[12px]  md:py-[16px] text-[14px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300 "> See More</button>
             </div>
            )
            : categoryFilter.length > 5 &&
            (
             <div onClick={handleSeeless} className="">
                <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[14px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300"> See Less</button>
             </div>
            )}
            
            
        </div>
        </> 

    

    :
    
    
    filterShow.length > 0 ? 
    <>
    <div className="flex flex-wrap">
        {filterShow.map((item) => (
        <div className="w-[32%]">
        <div className="">
            <div className="relative group overflow-hidden">
        <Link to={`/shop/${item.id}`}>
                <img className="w-full" src={item.thumbnail} alt="" />
        </Link>
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

    ))}
    </div>

    <div className="">
        {count ? categoryFilter.length > 5 &&
        (
         <div  onClick={handleSee} className="">
            <button className="px-[20px] md:px-[40px] py-[12px]  md:py-[16px] text-[14px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300 "> See More</button>
         </div>
        )
        : categoryFilter.length > 5 &&
        (
         <div onClick={handleSeeless} className="">
            <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[14px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300"> See Less</button>
         </div>
        )}
        
        
    </div>
    </>
    :

    <div className={`${
            activeGrid == "active" ? "w-[100%]" : "flex flex-wrap"
          }`}>

    {allPage.map((item) => (
        <div className="w-[32%]">
        <div className="">
            <div className="relative group overflow-hidden">
        <Link to={`/shop/${item.id}`}>
                <img className="w-full" src={item.thumbnail} alt="" />
        </Link>
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

    ))}
    </div>
    }

    </>
  )
}

export default Post