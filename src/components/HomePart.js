import React from "react";
import albania from "../assets/HomePart-img/Albania.jpg";
import MacedoniaChurch from "../assets/HomePart-img/MacedoniaChurch.jpg";
import AlbaniaRiver from "../assets/HomePart-img/AlbaniaRiver.jpg";

function HomePart() {
  return (
    <div>
      <div class="w-full my-16 z-50 sticky px-6 bg-gradient-to-b from-white via-slate-500 to-white">
        <div class="px-4 py-26 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div class="max-w-xl mb-6 ">
                <h2 class=" text-3xl font-bold tracking-tight lg:text-white md:text-slate-500 sm:text-slate-500 sm:text-4xl sm:leading-none max-w-lg mb-6">
                  Albania House
                </h2>
                <p class="lg:text-white  md:text-slate-500 text-base md:text-lg">
                  {" "}
                  Lorem Ipsum is so cool and awesome to act and so cool to
                  think. And very awesome to eat and talk.
                </p>
              </div>
              {/* <div class="flex items-center space-x-3">
                <a
                  href="/a"
                  class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white  border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-indigo-500 rounded-lg font-black"
                >
                  Get Started
                </a>
              </div> */}
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#3a5477] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6  group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#3a5477] group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  See More
                </span>
              </a>
            </div>
            <img class=" lg:w-112 h-96 rounded-lg " src={albania} alt="" />
          </div>
        </div>

        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <img
              class="logo lg:w-112 h-96 rounded-lg"
              src={MacedoniaChurch}
              alt=""
            />

            <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div class="max-w-xl mb-6">
                <h2 class="text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                  Macedonia Church
                </h2>
                <p class="text-white text-base md:text-lg">
                  Lorem Ipsum is so cool and awesome to act and so cool to
                  think. And very awesome to eat and talk.
                </p>
              </div>
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#3a5477] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6  group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#3a5477] group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  See More
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="px-4 py-26 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div class="max-w-xl mb-6 ">
                <h2 class=" text-3xl font-bold tracking-tight text-white  sm:text-4xl sm:leading-none max-w-lg mb-6">
                  Albania River
                </h2>
                <p class="text-white text-base md:text-lg">
                  {" "}
                  Lorem Ipsum is so cool and awesome to act and so cool to
                  think. And very awesome to eat and talk.
                </p>
              </div>
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#3a5477] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6  group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#3a5477] group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  See More
                </span>
              </a>
            </div>
            <img class=" lg:w-112 h-96 rounded-lg " src={AlbaniaRiver} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePart;
