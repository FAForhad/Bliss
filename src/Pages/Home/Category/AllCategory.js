import React from "react";
import "./Men.css"
import model1 from "../../../assets/categoryimg/model12.jpg"
import model2 from "../../../assets/categoryimg/model2.jpg"
import { Link } from "react-router-dom";

const AllCategory = () => {
  return (
    <div className="md:h-screen h-full bg-[#1b1b1b]">
      <div className="flex items-center justify-center gap-4 md:p-0 p-4 md:gap-10 h-full">
        <Link to="/shopmen" className="group relative block overflow-hidden w-full h-[90%] md:ml-8 ml-0" >
          <div  class="absolute inset-0 flex justify-center items-center content-end z-10">
            <div class="custom-font3  text-[#a6adbb] text-3xl md:text-6xl">MEN</div>
        </div>
        <img
          src={model2}
          alt=""
          className="h-96 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-full"
        />
      </Link>
      <Link to="/shopwomen" className="group relative block overflow-hidden w-full h-[90%] md:mr-8 mr-0">
        <div class="absolute inset-0 flex justify-center items-center content-end z-10">
          <div class="custom-font3 text-[#a6adbb]  text-3xl md:text-6xl">WOMEN</div>
        </div>
        <img
          src={model1}
          alt=""
          className="h-96 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-full"
        />
      </Link>
    </div>
    </div >
  );
};

export default AllCategory;
