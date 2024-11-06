import React, { useContext } from 'react'
import Container from './Container'
import ArrivalComponents from './ArrivalComponents'
import {ApiData} from "./ContextApi"
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

function SampleNextArrow(props) {
  const { onClick, className } = props;
  return (
    <div
      className="h-[40px] w-[40px] z-50 rounded-full absolute translate-y-[-50%] cursor-pointer left-0 top-[50%] bg-[gray] leading-[40px] text-center"
      onClick={onClick}
    >
      {" "}
      <GoArrowLeft className="inline-block" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div
      className="h-[40px] w-[40px] z-50 rounded-full absolute translate-y-[-50%] cursor-pointer right-0 top-[50%] bg-[gray] leading-[40px] text-center"
      onClick={onClick}
    >
      <GoArrowRight className="inline-block" />
    </div>
  );
}

const NewArrivals = () => {
  let {info,loading} = useContext(ApiData)
   

    const settings = {
      infinite: true,
      autoplay: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  return (
    <section>
        <Container>
            <h2 className='font-sans text-[39px] text[#262626] font-bold'>New Arrivals</h2>
           
            {loading ? (
          <h2>Loading.....</h2>
        ) : (
          <Slider {...settings}>
            {info.map((item) => (
              <Link to="/shop">
                <ArrivalComponents item={item} />
              </Link>
            ))}
          </Slider>
        )}
            
            
        </Container>
    </section>
  )
}

export default NewArrivals