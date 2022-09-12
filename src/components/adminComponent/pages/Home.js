import React from 'react'
import Chart from './Chart'
import FeaturedInfo from './FeaturedInfo'

function Home() {
  return (

    // home
    <div className='flex-auto w-10/12'>
      <FeaturedInfo />
      <Chart />
    </div>
  )
}

export default Home
