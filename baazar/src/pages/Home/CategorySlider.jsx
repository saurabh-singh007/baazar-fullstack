import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import salad from "../../assets/images/salad.png";
import coffee from "../../assets/images/coffee.png";
import grocery from "../../assets/images/grocery.png";

// import { items } from "../../data/categoriesdata.js";
import "../../App.css";

const CategorySlider = () => {
  const [items,setItems]=useState([])

useEffect(() => {

  const fetchdata=async()=>{
    const data=await axios.get('http://localhost:5000/api/categories')
    // console.log(data)
    setItems(data.data)

  }
  fetchdata()
}, [])
// console.log(items)

 
  

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 10,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-[96%] m-auto mt-10">
      <h1 className="text-xl mb-4 px-6 font-bold">Featured Categories</h1>
      <Slider {...settings} className=" p-2">
        {items.map((item, index) => (
          <div key={index} className="   ">
            <div className=" rounded-md flex flex-col items-center justify-center shadow-md ">
              <Link to={`/categories/${item._id}`}>
              <img
                src={item.image}
                width={95}
                height={95}
                className=" mx-auto my-0 scale-125"
                alt={item.name}
              />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-4 flex gap-4 px-5">
        <Link to="categories/id_7431" className="bg-green-300 w-[33%] h-[80%]">
        <img
          src={grocery}
          alt="coffee"
          className=" shadow-md rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  "
        />
        </Link>
        <Link to="categories/id_3930" className="w-[33%] h-[80%]" >
        <img
          src={salad}
          alt="coffee"
          className=" shadow-md rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  "
        />
        </Link>
        <Link to="categories/id_9560" className="w-[33%] h-[80%]">
        <img
          src={coffee}
          alt="coffee"
          className=" shadow-md rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  "
        />
        </Link>
      </div>
    </div>
  );
};

export default CategorySlider;
