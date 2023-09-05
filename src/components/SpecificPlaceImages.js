import React from 'react'

const SpecificPlaceImages = (props) => {
  return (
    <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 rounded-md' src={props.img4} alt="Syri i Kalter" />
        <img className='w-full h-full object-cover rounded-md' src={props.img1} alt="Syri i Kalter" />
        <img className='w-full h-full object-cover rounded-md' src={props.img2} alt="Syri i Kalter" />
        <img className='w-full h-full object-cover rounded-md' src={props.img3} alt="Syri i Kalter" />
        <img className='w-full h-full object-cover rounded-md' src={props.img5} alt="Syri i Kalter" />
    </div>
  )
}

export default SpecificPlaceImages