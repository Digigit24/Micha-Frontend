import React from 'react'
import Nav from './Nav'
import Carousel from './Carousel'
import CategoryGrid from './CategoryGrid'
import FeaturedProduct from './FeaturedProduct'
const layout = () => {
  return (
    <div className='min-h-full min-w-full flex gap-5 justify-between flex-col'>
      <Nav />

      <div className='w-[90%] h-auto mx-auto self-center'>

        <Carousel />
        <CategoryGrid />
        <FeaturedProduct />
      </div>
    </div>
  )
}

export default layout