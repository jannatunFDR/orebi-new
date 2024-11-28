import React from 'react'
import Container from './../components/Container';
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Cart = () => {
  return (
    <section className="py-[55px]">
    <Container>
      <div className="">
        <h3 className="font-sans text-[49px] font-bold text-[#262626] ">
          Cart
        </h3>
        <div className="flex items-center py-4">
          <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
            <Link to="/">Home</Link>
          </h2>
          <IoIosArrowForward />
          <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
            <Link to="/shop">Shop</Link>
          </h2>
          <IoIosArrowForward />
          <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
            <Link to="/myaccount">Cart</Link>
          </h2>
        </div>
      </div>
      <div className="flex items-center bg-[#F5F5F3] py-[32px] pl-3 border">
        <div className="w-1/4">
          <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
            Product
          </h4>
        </div>
        <div className="w-1/4">
          <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
            Price
          </h4>
        </div>
        <div className="w-1/4">
          <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
            Quantity
          </h4>
        </div>
        <div className="w-1/4">
          <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
            Total
          </h4>
        </div>
      </div>

      
      </Container>
      </section>
  )
}

export default Cart