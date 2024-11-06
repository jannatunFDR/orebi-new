import React from 'react'
import Container from './Container'
import Flex from './Flex'
import ImgOne from "../assets/p-one.jpg"
import ImgTwo from "../assets/p-two.png"
import ImgThree from "../assets/p-three.png"

const ImageNew = () => {
  return (
    <section className='py-[75px]'>
        <Container>
        <Flex className="justify-between">
            <div className="w-[49%]">
                <div className="">
                    <img src={ImgOne} alt="" />
                </div>
            </div>
                <div className="w-[49%]">
                    <div className="">
                        <img src={ImgTwo} alt="" />
                    </div>
                    <div className="mt-[30px]">
                        <img src={ImgThree} alt="" />
                    </div>
                </div>
            
        </Flex>
    </Container>
    </section>
  )
}

export default ImageNew