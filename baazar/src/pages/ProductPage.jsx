import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { items } from "../data/categoriesdata";
import axios from "axios";

const ProductPage = () => {
  const { categoryId, subcategoryId, productId } = useParams();
  // const data = useParams();
  // console.log(categoryId, productId, subcategoryId);
  // console.log(data)
  const [newProduct, setNewProduct] = useState();
  const [productCategory, setProductCategory] = useState();
  // const [subcate,setSubcate]=useState()

  useEffect(() => {
    const findItem=async(categoryId,subcategoryId)=>{
      const data=await axios.get(`http://localhost:5000/api/categories/${categoryId}`)
      const categoryData = data.data.subcategories
      const subcategory = categoryData?.find(
        (item) => item._id === subcategoryId
      );
      // console.log(subcategory)
      setProductCategory(subcategory);
      const productData = categoryData?.flatMap(
        (item) => item.products
      );
  
      const product = productData?.find((item) => item._id === productId);
      setNewProduct(product);
    }
    
    // console.log(subcategory);

   
findItem(categoryId,subcategoryId)
    // console.log(productCategory);
  }, []);

  return (
    <div className="h-screen flex w-full mt-32">
      <div className="w-3/5 flex justify-center items-start px-12">
        {" "}
        <img src={newProduct?.image} alt="image"  className="flex justify-center w-3/5 scale-125 h-auto rounded-lg object-cover" />
      </div>
      <div className="w-2/5 border p-10 h-screen ">
        <div className=" border-b ">
          <div className="flex py-2 ">
            <Link
              to="/"
              className="hover:text-fuchsia-500 text-sm text-gray-500 font-semibold"
            >
              Home
            </Link>
            /
            <Link
              to={`/categories/${categoryId}`}
              className="hover:text-fuchsia-500 text-sm font-semibold text-gray-500"
            >
              {productCategory?.name}
            </Link>
            /<h2 className=" text-sm text-gray-400">{newProduct?.name}</h2>
          </div>
          <h1 className=" text-2xl font-semibold font-Roboto">
            {newProduct?.name}
          </h1>
        </div>
        <p className="text-sm font-light mb-2">{newProduct?.quantity}</p>
        <div className="flex justify-between">
          <h4>₹{newProduct?.price}</h4>
          <button className="border border-green-700 text-green-600 font-bold bg-green-50 px-4 p-1 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
