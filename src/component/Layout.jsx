import React from 'react'
import Nav from './Nav'
import Carousel from './Carousel'
import CategoryGrid from './CategoryGrid'
const layout = () => {
    return (
        <div className='min-h-full min-w-full flex gap-5 justify-between flex-col'>
            <Nav />
            
              <Carousel />
          <div className='w-[90%] h-auto mx-auto self-center'>
            <CategoryGrid />
          </div>
            
        </div>
    )
}

export default layout