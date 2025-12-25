import React from 'react'
import Nav from './Nav'
import Carousel from './Carousel'
const layout = () => {
  return (
    <div className='min-h-full min-w-full flex justify-between flex-col'>
        <Nav/>
        <Carousel/>
    </div>
  )
}

export default layout