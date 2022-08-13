import React from "react";
import { data } from "../Data/MockData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function LogoScroll() {
  const slideleft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 250;
  };

  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 250;
  };

  return (
    <>
      <p className="bg-[#1F2937] text-white pt-10 text-center">A mature support from hundreds of brands</p>
      <div className="relative flex items-center justify-center bg-[#1F2937] py-10">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 text-white"
          onClick={slideleft}
          size={40}
        ></MdChevronLeft>

        <div
          id="slider"
          className="w-[70%] h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <img
              className="w-[120px]  inline-block p-2 cursor-pointer hover:scale-125 ease-in-out duration-300"
              src={item.img}
              alt="/"
            ></img>
          ))}
        </div>

        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 text-white"
          onClick={sliderRight}
          size={40}
        ></MdChevronRight>
      </div>
    </>
  );
}
