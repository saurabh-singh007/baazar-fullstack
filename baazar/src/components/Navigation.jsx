import React, { useRef, useState,useEffect } from 'react'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Button from '@mui/material/Button'
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined'
import { Link } from 'react-router-dom'
import grocery from '../assets/images/grocery.png'

const Navigation = () => {

  
  const [menuState, setMenuState] = useState(false)

  return (
    <>
      <div className='fixed top-20 z-20 bg-white w-full h-12   px-10 shadow flex items-center '>
        {/* browse Categories */}
        <div className='relative flex bg-fuchsia-500 w-52  text-white p-2 justify-around font-bold  text-sm rounded'>
          <GridViewOutlinedIcon fontSize='small' />
          Browse All Categories
          <KeyboardArrowDownIcon fontSize='small' />
        </div>
        <div className='static w-[47%]  ml-24 flex'>
          <li className='  list-none group'>
            <Button
              className='text-gray-600 text-sm group-hover:text-fuchsia-400'
              variant='text'
              style={{
                color: '#625f5f',
                fontSize: 'small',
                fontWeight: 500,
                fontFamily: 'Roboto',
                margin: '0',
                textTransform: 'capitalize'
              }}
            >
              <Link to='/' className='group-hover:text-fuchsia-400'>
                home
              </Link>
              <KeyboardArrowDownIcon
                fontSize='small'
                className='text-gray-400 relative top-[2px] group-hover:text-fuchsia-400 '
              />
            </Button>
          </li>
          <li className='  list-none'>
            <Button
              className='text-gray-600 text-sm'
              variant='text'
              style={{
                color: '#625f5f',
                fontSize: 'small',
                fontWeight: 500,
                fontFamily: 'Roboto',
                margin: '0',
                textTransform: 'capitalize'
              }}
            >
              <Link to='/about-us' className='hover:text-fuchsia-400'>
                About
              </Link>
            </Button>
          </li>
          <li className='  list-none group'>
            <Button
              className='text-gray-600 text-sm'
              variant='text'
              style={{
                color: '#625f5f',
                fontSize: 'small',
                fontWeight: 500,
                margin: '0',
                fontFamily: 'Roboto',
                textTransform: 'capitalize'
              }}
            >
              <Link to='/' className='group-hover:text-fuchsia-400'>
                shop
              </Link>
              <KeyboardArrowDownIcon
                fontSize='small'
                className='text-gray-400 relative top-[2px] group-hover:text-fuchsia-400'
              />
            </Button>
          </li>
          <li className='  list-none group'>
            <Button
              className='text-gray-600 text-sm'
              variant='text'
              style={{
                color: '#625f5f',
                fontSize: 'small',
                margin: '0',
                fontWeight: 500,
                fontFamily: 'Roboto',
                textTransform: 'capitalize'
              }}
            >
              <Link to='/' className='group-hover:text-fuchsia-400'>
                vendors
              </Link>
              <KeyboardArrowDownIcon
                fontSize='small'
                className='text-gray-400 relative top-[2px] group-hover:text-fuchsia-400'
              />
            </Button>
          </li>
          <li
            className='static list-none group '
            onMouseEnter={() => setMenuState(true)}
            onMouseLeave={() => setMenuState(false)}
          >
            <Button
              className='text-gray-600 text-sm'
              variant='text'
              style={{
                color: '#625f5f',
                fontSize: 'small',
                fontWeight: 500,
                fontFamily: 'Roboto',
                margin: '0',
                textTransform: 'capitalize'
              }}

              // onMouseOver={() => setMenuState(!menuState)}
            >
              <Link to='/' className='group-hover:text-fuchsia-400'>
                mega menu
              </Link>
              <KeyboardArrowDownIcon
                fontSize='small'
                className='text-gray-400 relative top-[2px] group-hover:text-fuchsia-400'
              />
            </Button>
            {menuState && (
              <div
                className='absolute  left-8 right-0 top-[42px]  w-[95%] h-80 shadow-md rounded bg-white z-10 flex justify-between p-8 gap-4  '
                // style={{ transform: 'translate(-46.5%' }}
                onMouseEnter={() => setMenuState(true)}
                onMouseLeave={() => setMenuState(false)}
              >
                <div className=' w-1/5 flex flex-col p-4  shadow-sm'>
                  <span className='text-fuchsia-500 font-bold text-md'>
                    Fruits & Vegetable
                  </span>
                  <ul className='flex flex-col text-sm gap-2 mt-2 font-semibold text-gray-500'>
                    <li>Meat & Poultry</li>
                    <li>Fresh Vegetable</li>
                    <li>Herbs & Seasonings</li>
                    <li>Cuts & sprouts</li>
                    <li>Exotic Fruits & Vegies</li>
                    <li>Pacakged Produce</li>
                  </ul>
                </div>
                <div className=' w-1/5 flex flex-col p-4 shadow-sm'>
                  <span className='text-fuchsia-500 font-bold text-md'>
                    Breakfast & Dairy
                  </span>
                  <ul className='flex flex-col text-sm gap-2 mt-2 font-semibold text-gray-500 capitalize'>
                    <li>milk & flavored milk</li>
                    <li> butter and margarine</li>
                    <li>eggs substitute</li>
                    <li>marmalades</li>
                    <li>Sour Cream</li>
                    <li>cheese</li>
                  </ul>
                </div>
                <div className=' w-1/5 flex flex-col p-4 shadow-sm'>
                  <span className='text-fuchsia-500 font-bold text-md'>
                    Meats & Seafoods
                  </span>
                  <ul className='flex flex-col text-sm gap-2 mt-2 font-semibold text-gray-500 capitalize'>
                    <li>Breakfast sausages</li>
                    <li>dinner sausages </li>
                    <li>chicken</li>
                    <li>slices deli meat</li>
                    <li>wild caught fillets</li>
                    <li>crab and shellfish</li>
                  </ul>
                </div>

                <div className='bg-green-300 w-2/5 rounded-md shadow-sm'>
                  <img
                    src={grocery}
                    alt='grocery'
                    width={500}
                    height={500}
                    className='rounded-md'
                  />
                </div>
              </div>
            )}
          </li>
          <li className='  list-none group'>
            <Button
              className='text-gray-600 text-sm'
              variant='text'
              style={{
                color: '#625f5f',
                fontSize: 'small',
                fontWeight: 500,
                margin: '0',
                fontFamily: 'Roboto',
                textTransform: 'capitalize'
              }}
            >
              <Link to='/' className='group-hover:text-fuchsia-400'>
                blog
              </Link>
              <KeyboardArrowDownIcon
                fontSize='small'
                className='text-gray-400 relative top-[2px] group-hover:text-fuchsia-400'
              />
            </Button>
          </li>
          <li className='  list-none group'>
            <Button
              className='mb-0'
              variant='text'
              style={{
                color: '#625f5f',
                fontSize: 'small',
                fontWeight: 500,
                margin: '0',
                fontFamily: 'Roboto',
                textTransform: 'capitalize'
              }}
            >
              <Link to='/' className='group-hover:text-fuchsia-400'>
                Pages
              </Link>
              <KeyboardArrowDownIcon
                fontSize='small'
                className='text-gray-400 relative top-[2px] group-hover:text-fuchsia-400'
              />
            </Button>
          </li>
          <li className='  list-none hover:text-fuchsia-400'>
            <Button
              className='mb-0'
              variant='text'
              style={{
                color: '#625f5f',
                fontSize: 'small',
                fontWeight: 500,
                margin: '0',
                fontFamily: 'Roboto',
                textTransform: 'capitalize'
              }}
            >
              <Link to='/' className='hover:text-fuchsia-400'>
                Contact
              </Link>
            </Button>
          </li>
        </div>
        <div className='relative flex w-1/4 h-12  ml-12 items-center justify-end  p-2 gap-1  '>
          <HeadsetMicOutlinedIcon fontSize='small' />
          <div className='relative font-bold text-lg flex items-center flex-col h-10'>
            <h1 className='text-fuchsia-600 '>1800 - 1246</h1>
            <span className='text-[10px] text-gray-500 relative -top-3'>
              24/7 customer support
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
