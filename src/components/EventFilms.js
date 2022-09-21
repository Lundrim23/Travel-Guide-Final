import React from "react";

const EventFilms = () => {
  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
          <div className="container">
            <div className="flex flex-wrap justify-between items-center -mx-4">
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex items-center -mx-3 sm:-mx-4">
                  <div className="w-full xl:w-1/2 px-3 sm:px-4">
                    <div className="py-3 sm:py-4">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BNDk4ZGIzYzgtODBlOS00Y2E5LTkwMWQtZjI3ODA0OTk4YmEyXkEyXkFqcGdeQXVyMjI3NDAyNg@@._V1_.jpg"
                        alt=""
                        className="rounded-2xl w-full"
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        src="https://m.media-amazon.com/images/I/61e3FpgB5zL._SY445_.jpg"
                        alt=""
                        className="rounded-2xl w-full"
                      />
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2 px-3 sm:px-4">
                    <div className="my-4 relative z-10">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BMTUwMjU5NDQyOV5BMl5BanBnXkFtZTgwNjIzNjg5NDE@._V1_.jpg"
                        alt=""
                        className="rounded-2xl w-full"
                      />
                      <span className="absolute -right-7 -bottom-7 z-[-1]">
                        <svg
                          width="134"
                          height="106"
                          viewBox="0 0 134 106"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        ></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div className="mt-10 lg:mt-0">
                  <span className="font-semibold text-lg text-gray-800 mb-2 block">
                    Movie Festivals
                  </span>
                  <h2 className="font-bold text-3xl sm:text-4xl text-gray-800 mb-8">
                    Art and Movie culture- not forgiven
                  </h2>
                  <p className="text-gray-800 text-body-color mb-8">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less.
                  </p>
                  <p className="text-gray-800 text-body-color mb-12">
                    A domain name is one of the first steps to establishing your
                    brand. Secure a consistent brand image with a domain name
                    that matches your business.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="py-4 px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-base bg-primary
                  hover:bg-opacity-90 font-normal rounded-lg "
                  >
                    {" "}
                    Get Started{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventFilms;
