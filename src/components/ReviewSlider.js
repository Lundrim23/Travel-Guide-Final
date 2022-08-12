import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./reviewslider.css";
import { Pagination, Navigation } from "swiper";

const ReviewSlider = ({reviews}) => {
  return (
    <div className='bg-white text-sm text-black pt-7 pl-7 pr-7'>
      <Swiper 
          className= "w-4/5 h-96"
          slidesPerView={1}
          spaceBetween={30}
          navigation = {true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
              640: {
                  slidesPerView: 2,
              },
              1024: {
                  slidesPerView: 3,
                },
            }}
      >
        {reviews.map( user => (
          <SwiperSlide key={user.id} className= "w-72 bg-white text-center text-lg bg-white rounded-lg border border-gray-200 shadow-md">
            <div className='h-full flex flex-col items-center p-1'>
              <div className='w-20 h-20 flex justify-center items-center mt-8 mb-8 shadow-lg rounded-full'>
                <img src={user.img} alt='user' className='w-20 rounded-full'></img>
              </div>
                <h5>{user.username}</h5>
                <p className='mt-10 mb-12 text-lg text-gray-500'>
                  <i>" {user.review} "</i>
                </p>
              </div>
            </SwiperSlide>
            ))}
        </Swiper>
      </div>
  )
}

export default ReviewSlider