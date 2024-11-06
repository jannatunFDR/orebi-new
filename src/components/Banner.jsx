import React from 'react'
import BanImg from '../assets/banner.jpg'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Container from './Container';
import Flex from './Flex';
import { FaCarSide } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
        appendDots: dots => (
          <div
            style={{
              backgroundColor: "",
              borderRadius: "10px",
              padding: "10px",
              position: 'absolute',
              top: "50%",
              left: "50px",
              transform: "translateY(-50%)",
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "30px",
              color: "blue",
              borderRight: "4px #FFFFFF solid",
              padding: "10px 0px",
              color: "transparent",
            }}
          >
            0{i + 1}
          </div>
        )
      };
  return (
    <section>
        <div className="">
        <Slider {...settings}>
            <div className="">
                <Link to="/shop">
                <img src={BanImg} alt="" />
                </Link>
            </div>
            <div className="">
            <Link to="/shop">
                <img src={BanImg} alt="" />
                </Link>
            </div>
            <div className="">
            <Link to="/shop">
                <img src={BanImg} alt="" />
                </Link>
            </div>
            <div className="">
            <Link to="/shop">
                <img src={BanImg} alt="" />
                </Link>
            </div>
            </Slider>

            <Container>
                <Flex className="justify-between items-center pb-4 py-2">
                    <div className="">
                        <div className="flex items-center">
                            <span className='font-sans text-[#262626] font-bold text-[20px] pr-2'>2</span>
                            <span className='font-sans text-[#6D6D6D] font-normal text-[16px]'>Two years warranty</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <span className='font-sans text-[#262626] font-bold text-[20px] pr-2'><FaCarSide />
                            </span>
                            <span className='font-sans text-[#6D6D6D] font-normal text-[16px]'>Free shipping</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <span className='font-sans text-[#262626] font-bold text-[20px] pr-2'><IoReloadOutline />

                            </span>
                            <span className='font-sans text-[#6D6D6D] font-normal text-[16px]'>Return policy in 30 days</span>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    </section>
  )
}

export default Banner