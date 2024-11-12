import React, { useState, useContext, useEffect } from 'react'
import Container from '../components/Container'
import { FaPlus, FaMinus } from "react-icons/fa";
import Post from '../components/Post';
import { ApiData } from "../components/ContextApi";
import Pagination from '../components/Pagination';
import { FaListUl } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";



const Shop = () => {
  let { info, loading } = useContext(ApiData);
  let [show, setShow] = useState(false);
  let [catPrice, setCatPrice] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [activeGrid, setActiveGrid] = useState("");
  let [category, setCategory] = useState([]);
  let [categoryFilter, setCategoryFilter] = useState([]);
  let [low, setLow] = useState("");
  let [high, setHigh] = useState("");
  let [priceShow, setPriceShow] = useState([]);
  let [perPage, setPerPage] = useState(6);
  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage;
  let allPage = info.slice(firstPage, lastPage);

  let pageNumber = [];
  for (let i = 0; i < Math.ceil(categoryFilter.length > 0 ? categoryFilter : info.length / perPage); i++) {
    pageNumber.push(i)

  }
  let paginate = (paginate) => {
    setCurrentPage(paginate + 1);
  };
  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1);

    }
  };

  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }

  };

  let handleMulti = () => {
    setActiveGrid("active");
  };

  useEffect(() => {
    setCategory([...new Set(info.map((item) => item.category))]);
  }, [info]);
  console.log(category);


  let handleCategory = (citem) => {
    let filterItem = info.filter((item) => item.category == citem);
    setCategoryFilter(filterItem);
  };


  let handlechange = (e) => {
    setPerPage(e.target.value);
  };

  let handleAll = () => {
    setCategoryFilter("")
  };

  let handlePrice = (value) => {
    setLow(value.low);
    setHigh(value.high);
    let priceRange = info.filter((item) => item.price > value.low && item.price < value.high)
    if (priceRange.length > 0) {
      setCategoryFilter(priceRange);
    } else {
      setCategoryFilter("")
    }
  }







  return (
    <section>
      <Container>
        <div className="flex">
          <div className="w-1/5">
            <div className="pr-6 pt-8">
              <div className="flex justify-between items-center" onClick={() => setShow(!show)}>
                <h2 className='font-sans text-[20px] text[#262626] font-bold cursor-pointer'>Shop by Category</h2>
                {show ? <FaMinus /> : <FaPlus />}
              </div>
              {show && (

                <ul>
                  <li onClick={handleAll} className='capitalize text-[#262626] font-sans py-1 cursor-pointer'>
                    All Product
                  </li>
                  {category.map((item) => (

                    <li
                      onClick={() => handleCategory(item)}
                      className="capitalize text-[#262626] font-sans py-1 cursor-pointer"
                    >{item}</li>

                  ))}

                </ul>
              )}
            </div>
            <div className="pr-6 pt-8">
              <div onClick={() => setCatPrice(!catPrice)} className="flex justify-between items-center">
              <h2 className='font-sans text-[20px] text[#262626] font-bold cursor-pointer'>Shop by Price</h2>
              {show ? <FaMinus /> : <FaPlus />}
              </div>
              {catPrice && (
              <ul className='py-6'>
                <li onClick={() => handlePrice({ low: 0, high: 9 })} className="capitalize text-[#262626] font-sans py-1 cursor-pointer">$0 - $09</li>
                <li onClick={() => handlePrice({ low: 10, high: 19 })} className="capitalize text-[#262626] font-sans py-1 cursor-pointer">$10 - $19</li>
                <li onClick={() => handlePrice({ low: 20, high: 29 })} className="capitalize text-[#262626] font-sans py-1 cursor-pointer">$20 - $29</li>
                <li onClick={() => handlePrice({ low: 30, high: 39 })} className="capitalize text-[#262626] font-sans py-1 cursor-pointer">$30 - $39</li>
                <li onClick={() => handlePrice({ low: 40, high: 100 })} className="capitalize text-[#262626] font-sans py-1 cursor-pointer">$40 - $100</li>
              </ul>
              )}
            </div>
          </div>




          <div className="w-4/5 pt-8">
            <div className="">
              <div className="">
                <div className="flex items-center gap-x-4">
                  <div onClick={handleMulti} className={` p-3  hover:bg-[gray] text-[#222] ${activeGrid == "active" ? " bg-[gray]" : "  "}`}>

                    <FaListUl />
                  </div>
                  <div onClick={() => setActiveGrid("")} className={`p-3 hover:bg-[gray] text-[#222] ${activeGrid == "active" ? " " : "  bg-[gray] text-white"} `}>
                    <IoGrid />

                  </div>

                </div>

              </div>
              <div className="flex justify-end items-center gap-x-10">
                <div className="">
                  <label className="pr-3" htmlFor="">
                    Sort By :
                  </label>
                  <select onChange={handlechange}
                    className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                    name=""
                    id=""
                  >
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                  </select>
                </div>
                <div className="">
                  <label className="pr-3" htmlFor="">
                    Show:
                  </label>
                  <select
                    className="w-[60px] h-[30px] border-[1px] border-[#262626]"
                    name=""
                    id=""
                  >
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                    <option value="">one</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-between flex-wrap w-full">
              <Post allPage={allPage}
                activeGrid={activeGrid}
                categoryFilter={categoryFilter}
                priceShow={priceShow}
              />
              <div className='flex justify-center w-full py-10'>
                <Pagination pageNumber={pageNumber} paginate={paginate}
                  next={next}
                  prev={prev}
                  currentPage={currentPage}
                />
              </div>



            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Shop