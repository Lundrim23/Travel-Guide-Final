import React from 'react'
import { Link } from "react-router-dom";

function EventReview() {
  return (
    <div>
          <div className='bg-red-900 max-w-[1280px] py-16 text-white px-4 mx-auto rounded-lg mt-4 mb-40 '>
        <div className='max-w-[1280px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 pl-32 '>Want to share your experience?</h1>
                <p className='pl-32'>Add your review and rating based on your trip.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                
                    <Link to="/reviews" className='border-2 bg-gray-600 text-white rounded-md font-bold  w-[200px] ml-4 my-6 px-6 py-3'>
                        Add your Review </Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default EventReview