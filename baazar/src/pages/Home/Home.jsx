import React from 'react'
import BannerSlider from './BannerSlider'
import CategorySlider from './CategorySlider'
import TopProducts from './TopProducts'

const Home = () => {
  return (
    <div className=' relative mt-32  '>
      <BannerSlider />
      <CategorySlider />
      <TopProducts/>
      
    </div>
  )
}

export default Home
