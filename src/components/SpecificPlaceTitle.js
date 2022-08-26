import React from 'react'

const SpecificPlaceTitle = (props) => {
  return (
    <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-800 mb-2'>{props.title}</h1>
        <p className='text-2xl font-light text-gray-400 mb-8'>{props.subtitle}</p>        
    </div>
  )
}

export default SpecificPlaceTitle