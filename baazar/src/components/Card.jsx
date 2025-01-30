import React from "react";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../utils/cartRedux";
import Button from '@mui/material/Button'
import { useDispatch } from "react-redux";

const Card = ({ card_values, category_id,sub_id, product_id }) => {
  const dispatch=useDispatch()
  // console.log(card_values?.image)
  return (
    <div className="bg-white w-48 h-68 px-2 rounded-md">
      <Link to={`/categories/${category_id}/${sub_id}/products/${product_id}`}>
        <img
        src={card_values?.image}
          alt="image"
          width={150}
          height={150}
          className="mx-auto"
        />
        <div className="px-2 py-1 ">
          <h2 className="text-[15px]  h-10 ">{card_values?.name.length>35?card_values?.name?.substring(0,30):card_values?.name}...</h2>
          <p className="text-sm font-light mb-2">{card_values?.quantity}</p>
        </div>
      </Link>
          <div className="flex justify-between">
            <h4>₹{card_values?.price}</h4>
            <Button style={{color:"white",backgroundColor:"#16a34a"}} variant="outlined" className="border border-green-700 text-green-600 font-bold bg-green-50 px-4 p-1 rounded" onClick={()=>dispatch(addToCart(card_values))}>
              Add
            </Button>
          </div>
    </div>
  );
};

export default Card;
