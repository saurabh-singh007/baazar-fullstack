import React, { useRef, useState } from "react";
import image__3 from "../../assets/images/image__4.png";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
// import { makeStyles, withStyles } from "@mui/styles";

const TopProducts = () => {
    
  const [active, setActive] = useState("All");
  
  return (
    <div className="w-full  mt-12">
      <div className="flex justify-between px-12 ">
        <h1 className="text-3xl font-Roboto font-bold">Popular Products</h1>
        <div className="flex">
          <ul className=" flex items-center gap-3">
            {[
              "All",
              "Fruits ",
              "Vegetables",
              "Kitchen Items",
              "Electronics",
              "Pet Foods",
            ].map((items, index) => (
              <li
                className={`text-sm font-semibold rounded-sm ${
                  active === items ? "text-fuchsia-500" : "text-gray-700"
                } p-2 transition-all hover:-translate-y-1 delay-150 hover:text-fuchsia-400 `}
                onClick={() => setActive(items)}
              >
                <a>{items}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="m-2 mt-8  px-8 flex gap-4 flex-wrap ">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <div className="w-60 h-[22rem]  flex flex-col border border-gray-200 hover:border-fuchsia-200 bg-white  rounded-lg rounded-tl-3xl hover:shadow-lg">
           <span className="absolute font-medium p-1 px-4 bg-green-400 text-white rounded-tl-2xl rounded-br-3xl">Hot</span>
            <div className="w-52 h-80 relative group  mx-auto flex flex-col items-center justify-center ">
              <Link className="">
                <img 
                  className=" relative w-48 h-48  mx-auto hover:transition-all delay-150 hover:scale-110 ease-in-out"
                  src={image__3}
                  alt="img"
                />
              </Link>
              
              <div className="absolute opacity-0  group-hover:opacity-100 flex top-20 bottom-0  w-36  h-10 bg-white border border-fuchsia-300 rounded-md  items-center   ">
                <ul className="flex  w-full h-full ">
                  <Tooltip
                    title="Add To Favourites"
                    placement="top"
                    arrow
                    PopperProps={{
                      sx: {
                        "& .MuiTooltip-tooltip": {
                          backgroundColor: "#e367f5",
                          color: "white",
                          fontSize: "12px",
                          padding:"8px"
                        },
                        "& .MuiTooltip-arrow": {
                          color: "#e367f5",
                        },
                      },
                    }}
                  >
                    <li className="border rounded-md text-fuchsia-400 hover:text-black border-fuchsia-200 w-full flex justify-center items-center">
                      <a>
                        <FavoriteBorderIcon />
                      </a>
                    </li>
                  </Tooltip>
                  <Tooltip title="compare" placement="top" arrow PopperProps={{
                      sx: {
                        "& .MuiTooltip-tooltip": {
                          backgroundColor: "#e367f5",
                          color: "white",
                          fontSize: "12px",
                          padding:"8px"
                        },
                        "& .MuiTooltip-arrow": {
                          color: "#e367f5",
                        },
                      },
                    }}>
                    <li className="border rounded-md text-fuchsia-400 hover:text-black border-fuchsia-200 w-full flex justify-center items-center">
                      <a>
                        <CompareArrowsOutlinedIcon />
                      </a>
                    </li>
                  </Tooltip>
                  <Tooltip title="Quick View" placement="top" arrow PopperProps={{
                      sx: {
                        "& .MuiTooltip-tooltip": {
                          backgroundColor: "#e367f5",
                          color: "white",
                          fontSize: "12px",
                          padding:"8px"
                        },
                        "& .MuiTooltip-arrow": {
                          color: "#e367f5",
                        },
                      },
                    }}>
                    <li className="border rounded-md text-fuchsia-400 hover:text-black border-fuchsia-200 w-full flex justify-center items-center">
                      <a>
                        <RemoveRedEyeOutlinedIcon />
                      </a>
                    </li>
                  </Tooltip>
                </ul>
              </div>
            </div>
            <div className="relative p-2  ml-2 ">
              <span className="relative text-xs top-1 px-1 text-gray-400">
                Snacks
              </span>
              <h3 className="font-bold text-gray-800 capitalize leading-5 text-md">
                Eating a wide variety of nutritious foods
              </h3>
              <Rating
                spacing={1}
                name="read-only"
                value={2}
                readOnly
                size="small"
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <h4 className="relative -top-1 text-sm text-gray-500">
                by<span className="text-green-500 text-xs"> haldiram</span>
              </h4>
              <div className="relative  flex justify-between  ">
                <div className="flex gap-4   items-center">
                  <span className="font-bold text-fuchsia-500">₹60</span>
                  <span className="text-gray-600 text-sm font-semibold line-through">
                    ₹100
                  </span>
                </div>
                <button className="relative p-1 rounded-sm px-2 bg-fuchsia-200 hover:bg-fuchsia-500 hover:text-white -top-1 mr-2 text-sm font-bold text-fuchsia-500  ">
                  <ShoppingCartOutlinedIcon
                    className="mr-1 "
                    fontSize="small"
                  />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
