import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import baazar from "../assets/images/baazar.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import "../App.css";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";

const Header = () => {
  // const distpatch=useDispatch()
  const { count, cartItem } = useSelector((state) => state.cart);
  const [toggleCategories, setTogglecategories] = useState(false);
  const [active, setActive] = useState("All Categories");
  // const [location, setLocation] = useState("All Categories");
  const [openCart, setOpenCart] = useState(false);
  const [AccountBox, setAccountBox] = useState(false);

  useEffect(() => {
    if (openCart) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
    // Cleanup on unmount
    return () => (document.body.style.overflow = "auto");
  }, [openCart]);

  const handleActive = (item) => {
    setActive(item);
    setTogglecategories(!toggleCategories);
  };
  const handleClickAway = () => {
    setTogglecategories(false);
    setAccountBox(false);
  };
  // console.log(openCart)
  return (
    <><ClickAwayListener onClickAway={handleClickAway}>
      <div className="fixed flex flex-row items-center bg-white  w-full h-20 gap-4 p-4 shadow z-30 ">
        {/* logo */}
        <Link to="/" className="relative flex  items-center w-[10%] ">
          <img
            src={baazar}
            className="absolute w-[150px] h-[150px] rotate-180   "
          />
        </Link>
        {/* category list */}
        
          <div className="w-2/5 h-9 rounded-md m-2 border-fuchsia-300 border-[1px] flex p-1">
            <div
              className="w-5/12 ml-2 font-bold text-sm cursor-pointer flex justify-around p-1"
              onClick={() => {
                setTogglecategories(!toggleCategories);
              }}
            >
              {active}
              <KeyboardArrowDownIcon className="text-gray-600 font-thin relative " />
            </div>
            {toggleCategories && (
              <div className=" absolute bg-white  overflow-y-auto w-48 p-1  top-[3.6rem]  h-52 border-2 border-pink-200 shadow-md rounded-sm text-gray-700">
                {[
                  "All Categories",
                  "Electronics",
                  "Fashion",
                  "Food",
                  "Beverages",
                  "DIY and hardware",
                  "Furniture",
                  "Beauty",
                  "Toys ",
                ].map((item, idx) => (
                  <li
                    className={`relative  p-1 mx-1 rounded-sm cursor-pointer ${
                      active === item ? "bg-fuchsia-300" : ""
                    } text-sm  list-none text-gray-700 hover:bg-fuchsia-200 `}
                    onClick={() => handleActive(item)}
                  >
                    {item}
                  </li>
                ))}
              </div>
            )}
            <span className="text-gray-400 font-thin -ml-2">|</span>
            <input
              className="w-3/4 ml-2 outline-none font-[Roboto] "
              type="text"
              placeholder="search for item..."
            />
            <SearchIcon className="text-fuchsia-300" />
          </div>
       
        <div className=" w-1/2  flex items-center justify-around p-8  ">
          {/* location */}
          <div className="w-36 h-8  border-[1px] border-pink-200 shadow-md rounded-sm   flex items-center justify-around cursor-pointer">
            <LocationOnIcon className="text-fuchsia-300 " fontSize="small" />
            <span className="text-sm text-gray-500  "> your location</span>
            <KeyboardArrowDownIcon
              className="text-gray-600 font-thin relative "
              onClick={() => {}}
            />
          </div>
           
       
          {/* whishlist */}
          <div className="relative text-sm text-gray-400 cursor-pointer gap-2">
            <FavoriteBorderIcon className="text-gray-500" />
            <span className="relative top-[2px] -ml-1">Wishlist</span>
            <span className="absolute -top-1 left-3 w-4 h-4 p-2 text-xs text-white bg-fuchsia-500 rounded-xl flex justify-center items-center">
              2
            </span>
          </div>
          {/* Account */}
          {/* <ClickAwayListener onClickAway={handleClickAway}> */}
          <div
            className="text-sm text-gray-400 cursor-pointer"
            onClick={() => setAccountBox(!AccountBox)}
          >
            <PersonOutlineIcon className="text-gray-500" />
            <span className="relative top-[2px] -ml-1"> Account</span>
            {AccountBox && (
              <div className=" absolute bg-white  overflow-y-auto w-40   right-10 top-16 h-56 text-gray-700 border-2 border-pink-200 shadow-md rounded-sm">
                {[
                  { name: " My Account", symbol: <PersonOutlineIcon /> },
                  {
                    name: "Order Tracking ",
                    symbol: <DeliveryDiningOutlinedIcon />,
                  },
                  { name: "My Voucher", symbol: <LocalOfferSharpIcon /> },
                  { name: "My Wishlist ", symbol: <FavoriteBorderIcon /> },
                  { name: "Setting ", symbol: <TuneSharpIcon /> },
                  { name: "Sign Out ", symbol: <LogoutOutlinedIcon /> },
                ].map(({ name, symbol }, index) => (
                  <li
                    key={index}
                    className={`relative mt-1 p-1 mx-1  rounded-sm cursor-pointer hover:bg-fuchsia-200 
                        text-md list-none transition-all 
                        duration-300 transform  hover:scale-105`}
                    onClick={() => {}}
                  >
                    <span>{symbol}</span>
                    <span className="ml-1">{name}</span>
                  </li>
                ))}
              </div>
            )}
          </div>
          {/* </ClickAwayListener> */}
          {/* cart button */}
          <div
            className="relative  text-white cursor-pointer text-lg bg-fuchsia-600 rounded-md p-3 px-5"
            onClick={() => {
              setOpenCart(true);
            }}
          >
            <ShoppingCartOutlinedIcon className="text-white" />
            <span className="relative top-[2px] -ml-1"> Cart</span>
            <span className="absolute top-1  w-5 h-5 p-2 text-xs text-white bg-green-500 rounded-xl flex justify-center items-center">
              {count}
            </span>
          </div>
        </div>
      </div>
      </ClickAwayListener>
      {openCart && <Cart setOpenCart={setOpenCart} />}
    </>
  );
};

export default Header;
