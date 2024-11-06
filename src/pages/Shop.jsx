import React, { useState, useContext, useEffect} from 'react'
import Container from '../components/Container'
import { FaPlus, FaMinus } from "react-icons/fa";
import Post from '../components/Post';
import { ApiData } from "../components/ContextApi";
import { Pagination } from 'antd';


const Shop = () => {
  let { info, loading } = useContext(ApiData);
  let [show, setShow] = useState(false)
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(6);
  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage;
  let allPage = info.slice(firstPage, lastPage);
  let [activeGrid, setActiveGrid] = useState("");
  let [category, setCategory] = useState([]);
  let [categoryFilter, setCategoryFilter] = useState([]);
  

  let pageNumber = [];
  for (let i = 0; i < Math.ceil(
    categoryFilter.length > 0 ? categoryFilter : info.length / perPage);
     i++) {
    pageNumber.push(i);
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

  let handleCategory = (citem) => {
    let filterItem = info.filter((item) => item.category == citem);
    setCategoryFilter(filterItem);
  };

  let handleChange = (e) => {
    setPerPage(e.target.value);
  };
  


  return (
    <section>
      <Container>
        <div className="flex">
          <div className="w-1/5">
            <div className="pr-6 pt-8">
              <div className="flex justify-between items-center" onClick={() => setShow(!show)}>
                <h2 className='font-sans text-[20px] text[#262626] font-bold'>Shop by Category</h2>
                {show ? <FaMinus /> : <FaPlus />}
              </div>
              {show && (

                <ul>
                  <li>Catagory</li>
                  <li>Catagory</li>
                  <li>Catagory</li>
                  <li>Catagory</li>
                  <li>Catagory</li>
                </ul>
              )}
            </div>
          </div>



          <div className="w-4/5">
            <div className="pt-8 flex justify-end items-center gap-x-6">
              <div className="">
                <label className='pr-3' htmlFor="">
                  Sort By :
                </label>
                <select className='w-[60px] h-[30px] border-[1px] border-[#262626] rounded' name="" id="">
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                </select>
              </div>
              <div className="">
                <label className='pr-3' htmlFor="">
                  Featured :
                </label>
                <select className='w-[60px] h-[30px] border-[1px] border-[#262626] rounded' name="" id="">
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                  <option value="">one</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between flex-wrap w-full">
              <Post allPage={allPage}  activeGrid={activeGrid} categoryFilter={categoryFilter}/>
              <Pagination pageNumber={pageNumber}  paginate={paginate}
              next={next}
              prev={prev}
              currentPage={currentPage}/>

        
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Shop