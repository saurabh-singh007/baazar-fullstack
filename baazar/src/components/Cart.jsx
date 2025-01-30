import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import TimerIcon from "@mui/icons-material/Timer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MopedIcon from "@mui/icons-material/Moped";
import DescriptionIcon from "@mui/icons-material/Description";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { addToCart, removeFromCart } from "../utils/cartRedux";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
  const { cartItem, count } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const Total = cartItem.reduce(
    (Total, items) => (Total += items.Totalprice),
    0
  );
  const grandTotal = Total + 30;
  return (
    <div className="relative">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-40"
        onClick={() => setOpenCart(false)}
      ></div>

      <div className="fixed top-0 right-0 h-full w-[30%] bg-gray-100 shadow-lg z-50   ">
        <div className="flex justify-between bg-white items-center">
          <h2 className="p-4 text-xl font-bold ">My Cart</h2>
          <CloseIcon
            fontSize="medium"
            className=" mr-3"
            onClick={() => setOpenCart(false)}
          />
        </div>
        <div className="w-full">
          {cartItem.length > 0 ? (
            <div className=" w-full h-[396px] flex flex-col p-2 flex-grow  overflow-y-auto">
              <div className="w-full bg-white p-4 flex gap-3 rounded-md my-4 items-center">
                <TimerIcon className="text-green-600 " fontSize="large" />
                <div className="">
                  <h2 className="font-bold">Delivery in 12 minutes</h2>
                  <p className="text-sm text-gray-500 font-medium">
                    shipment of {count} items
                  </p>
                </div>
              </div>
              {/* <div className=""> */}
              {cartItem.map((items) => (
                <div
                  className="flex justify-between bg-white    p-1  items-center"
                  key={items.id}
                >
                  <div className="flex">
                    {" "}
                    <div className="w-20 h-20 flex  justify-center items-center">
                      <img
                        src={items.image}
                        className="rounded-md scale-125"
                        width={50}
                        height={50}
                        alt="image"
                      />
                    </div>
                    <div className=" w-32  ">
                      <h2 className="text-sm font-medium">{items.name}</h2>
                      <p className="text-xs  text-gray-700">{items.quantity}</p>
                      <h1 className="text-base">₹{items.price}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex w-20 h-10 justify-between items-center bg-green-600  rounded-md text-lg mr-2">
                      <RemoveIcon
                        onClick={() => dispatch(removeFromCart(items))}
                      />
                      <h1>{items.Totalquantity}</h1>
                      <AddIcon onClick={() => dispatch(addToCart(items))} />
                    </div>
                    <h1>₹{items.Totalprice}</h1>
                  </div>
                </div>
              ))}
              {/* billing */}
              <div className="w-full p-4 mt-4 rounded-md bg-white flex flex-col gap-1 ">
                <h1 className="text-base font-semibold">Bill Details</h1>
                <div className="flex justify-between">
                  <ul className="flex text-sm my-auto gap-1 text-gray-700">
                    <DescriptionIcon fontSize="small" />
                    <li>Items Total</li>
                  </ul>
                  <h1>₹{Total}</h1>
                </div>
                <div className="flex justify-between">
                  <ul className="flex text-sm my-auto gap-1 text-gray-700">
                    <MopedIcon fontSize="small" />
                    <li>Delivery Charges</li>
                  </ul>
                  <h1>₹25</h1>
                </div>
                <div className="flex justify-between">
                  <ul className="flex text-sm my-auto gap-1 text-gray-700">
                    <ShoppingBagIcon fontSize="small" />
                    <li>Handling Charges </li>
                  </ul>
                  <h1>₹5</h1>
                </div>
                <div className="flex justify-between font-bold">
                  <h1>Grand Total</h1>
                  <h1>₹{grandTotal}</h1>
                </div>
              </div>
            </div>
          ) : (
            // </div>
            <div className="bg-white w-full  p-4 mt-4">
              <h1 className="flex justify-center"> Cart is Empty!</h1>
            </div>
          )}
        </div>
        {/* payment ---------- */}
        {
          cartItem.length>0 &&
        <div className="fixed bottom-0 right-0 bg-white p-5 w-[30.5%] rounded-lg h-44 flex flex-col gap-3">
            <div className="border-b p-2 w-full flex items-center ">
                <LocationOnIcon />
                <div className="">
                <h1 className="font-semibold">Delivering to Home</h1>
                <p className="text-sm font-medium text-gray-700">khora dispencary,near gupta hospital,sector-62,noida.</p>

                </div>
            </div>
            <Link to="/checkout" className="bg-green-600 w-full p-2 rounded-md flex justify-between items-center">
                <div className="flex flex-col font-semibold text-white text-base">
                    <span>₹{grandTotal}</span>
                    <span className="font-medium" >Total</span>
                </div>
                <h1 className="text-lg text-white font-bold">Proceed To Pay <ArrowForwardIosIcon/></h1>
            </Link>
        </div>
        }
      </div>
    </div>  



  );
};

export default Cart;
