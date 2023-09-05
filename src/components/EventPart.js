import React from "react";

const EventPart = (props) => {
  return (
    <div>
      <div className="pt-40 bg-slate-50">
        <section className="relative bg-white">
          <img
            className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-75 sm:opacity-75"
            src="https://www.worldtravelguide.net/wp-content/uploads/2018/09/shu-gen-Friends-having-fun-drinking-beer-636815086-1440x823.jpg"
            alt="hero"
          />

          <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-b sm:from-slate-50 sm:to-transparent"></div>

          <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
            <div className="max-w-xl text-center sm:text-left">
              <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-800">
                Best Culture and Food
                <strong className="font-extrabold text-rose-500 sm:block">
                  Festivals
                </strong>
              </h1>

              <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="flex flex-wrap gap-4 mt-8 text-center">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring"
                  href="#"
                >
                  Get Started
                </a>

                <a
                  className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring"
                  href="/about"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventPart;
