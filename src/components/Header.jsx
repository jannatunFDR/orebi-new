import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import LogoImg from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';



const Header = () => {
  let [show, setShow] = useState(false)
  return (
   <header className='lg:py-6 py-[20px]'>
    <Container>
      <Flex className="justify-between items-center">
        <div className="w-1/4">
           <img src={LogoImg} alt="" />
        </div>
        

        

        <div className="lg:hidden flex justify-end" onClick={ ()=> setShow(!show)}>
          {show? <RxCross2 className='cursor-pointer z-10'/> : <FaBars className='cursor-pointer z-10'/> }
        </div>


        <div className={`lg:w-3/4 absolute left-0 top-[30px] z-10 w-full lg:flex lg:static lg:bg-transparent duration-300 ease-in-out justify-center ${ show? 'block' : 'hidden'} lg:block`}>
        <ul className='flex flex-col lg:flex-row items-center lg:justify-end py-4 lg:py-0'>
          <li className="px-[20px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold flex-col lg:flex-row py-2 lg:py-0">
            <Link to="/">Home</Link>
          </li>
          <li className="px-[20px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold flex-col lg:flex-row py-2 lg:py-0">
          <Link to="/shop">Shop</Link>
          </li>
          <li className="px-[20px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold flex-col lg:flex-row py-2 lg:py-0">
            <Link to="/about">About</Link>
          </li>
          <li className="px-[20px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold flex-col lg:flex-row py-2 lg:py-0">
          <Link to="/contact">Contacts</Link>
          </li>
          <li className="px-[20px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold flex-col lg:flex-row py-2 lg:py-0">Journal</li>
        </ul>
        </div>


  



        
      </Flex>
    </Container>

   </header>
  )
}

export default Header