import React from "react";
import "./Men.css"
import { Link } from "react-router-dom";

const Women = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#1b1b1b]">
      <div class="w-layout-grid2 grid-about mx-8"> 
        <div id="w-node-_84eee4ab-9953-32e5-d74d-c583e5d6189c-e8183773" class="about-content">
          <h4 class="heading-h2 custom-font3">Embrace your boldness with Bliss</h4>
          <div class="divider"></div>
          <p class="about-description-wrap uppercase block  md:text-sm text-xs text-white font-medium ">A collection of bad ideas come to fruition as real products for you to
            experience
            
            </p>
            <div class="md:mt-8 lg:mt-8 mt-2 flex flex-wrap justify-end">
              <Link to='/shopwomen'
                href="#"
                class="uppercase block lg:w-auto md:w-full w-40 mb-4 rounded-l-full lg:px-8 md:px-8 px-4 text-center button-discover lg:py-3 md:py-3 py-2 md:text-sm text-xs text-white border font-medium sm:w-auto"
              >
              Discover the Collection
              </Link>
            </div>
          </div>
        <div  class="about-image-wrap mb-8">
          <img src="https://assets.website-files.com/6391586f7ac2b543ed183772/639d6b1d38e93f6f76de0110_Untitled-3.jpg" loading="eager" alt=""  class="about-image"/>

        </div>
      </div>
    </div>
  );
};

export default Women;
