import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import slider1 from '../../assets/images/slider1.png'
import slider4 from '../../assets/images/slider4.png'
import slider3 from '../../assets/images/slider3.png'
import Button from '@mui/material/Button'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../App.css'

const BannerSlider = () => {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className='relative w-[96%] m-auto mt-5  h-96 rounded-md  '>
      <Slider {...settings} className=' '>
        <Link to={`/categories/675e607803659daa0d42470b`} className='relative w-full h-96 z-20'>
          <img
            src={slider3}
            alt='slider1'
            className='relative w-full h-full rounded-md'
          />
          <div className='absolute  w-[40%] top-12 left-10 flex flex-col gap-4 p-4 px-12 '>
            <h1 className='text-5xl font-bold'>
              Get fresh & Juicy <span className='text-[#fdbc00]'> fruits</span>{' '}
              in minutes
            </h1>
            <p className='text-xl text-gray-800'>
              Sign up for daily newsletter
            </p>
          </div>
        </Link>
        <Link to={`/categories/675e607803659daa0d42470b`}  className='relative w-full h-96 z-20'>
          <img
            src={slider1}
            alt='slider1'
            className='relative w-full h-96 rounded-md '
          />
          <div className='absolute  w-[40%] top-12 left-10 flex flex-col gap-4 p-4 px-12 '>
            <h1 className='text-5xl font-bold text-white'>
              Don't miss amazing grocery{' '}
              <span className='text-[#3b7a1b]'> deals</span>
            </h1>
            <p className='text-xl text-gray-800'>
              Sign up for daily newsletter
            </p>
          </div>
        </Link>
        <Link to={`/categories/675e6400f0847ec81b2e3499`}  className='relative w-full h-96 z-20'>
          <img
            src={slider4}
            alt='slider1'
            className='relative w-full h-full rounded-md'
          />
          <div className='absolute  w-[40%] top-12 left-10 flex flex-col gap-4 p-4 px-8 '>
            <h1 className='text-5xl font-bold '>
              Order fast & get best deals,{' '}
              <span className='text-[#830a10]'> Hurry up!</span>
            </h1>
            <p className='text-xl text-gray-800'>
              Sign up for daily newsletter
            </p>
          </div>
        </Link>
      </Slider>
      <div className=' absolute  left-16 bottom-24 h-20 w-[30%] p-4 flex z-10'>
        <input
          type='text'
          placeholder='enter your email...'
          className='h-full w-full rounded-full p-2 flex items-center shadow-2xl outline-none'
        />
        <Button
          variant='contained'
          style={{
            color: 'white',
            marginLeft: '-6.2rem',
            textTransform: 'capitalize',
            borderRadius: '9999px',
            background: '#d946ef'
          }}
        >
          Subscribe
        </Button>
      </div>
    </div>
  )
}

export default BannerSlider
