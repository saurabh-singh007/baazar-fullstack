import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../data/categoriesdata";
import Card from "../components/Card";
import axios from "axios";

const Categories = () => {
  // const data = useParams();
  const { id: param_id } = useParams();
  // console.log(param_id)

  const [product, setProduct] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await axios.get(
        `http://localhost:5000/api/categories/${param_id}`
      );
      console.log(data)
      setProduct(data?.data);
      setActiveItem(product?.subcategories[0]);
    };
    // const data = items.find((item) => item.id === param_id);
    fetchProducts(param_id);
  }, []);

  useEffect(() => {
    const savedSubcategory=localStorage.getItem("activeSubcategory")
    if (product?.subcategories?.length > 0) {
      const IsthisInSubcategory=product?.subcategories.find((item)=>item._id===savedSubcategory);
      if(savedSubcategory && IsthisInSubcategory){
        setActiveItem(IsthisInSubcategory)
      }else{

        setActiveItem(product.subcategories[0]); // Set the first subcategory as active
      }
    }
  }, [product]);

  useEffect(() => {
    if (activeItem?._id) {
      localStorage.setItem("activeSubcategory", activeItem._id);
    }
  }, [activeItem]);

  const activeProduct = product?.subcategories?.find(
    (item) => item._id === activeItem?._id
  );
  // console.log(activeItem?._id)

  return (
    <div className=" flex relative px-10  mt-32    ">
      <div className="w-1/5 mt-2 z-0  h-screen  flex-grow overflow-y-auto transparent-scrollbar ">
        <ul className="">
          {product &&
            product.subcategories.map((item) => (
              <div
                key={item._id}
                className={`h-16 flex border  cursor-pointer gap-4 hover:bg-fuchsia-200 ${
                  activeItem?._id === item._id
                    ? "border-l-4 border-l-fuchsia-400 bg-fuchsia-200"
                    : ""
                }`}
                onClick={() => setActiveItem(item)}
              >
                <div className="w-12 relative  rounded-md h-12 ml-4 bg-gray-100 flex my-auto justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt="product_image"
                    className="h-full object-contain scale-150 mt-2  w-full"
                  />
                </div>
                <li className="text-base capitalize font-medium flex justify-center align-middle my-auto">
                  {item.name}
                </li>
              </div>
            ))}
        </ul>
      </div>
      <div className="w-4/5 border   bg-gray-200 h-screen   flex-grow overflow-y-auto ">
        <div className="h-14 bg-white flex flex-wrap items-center pl-5 text-lg font-semibold">
          {" "}
          Buy {activeProduct?.name} Online
        </div>
        <div className="flex flex-wrap gap-2 mt-2 justify-center ">
          {activeProduct?.products.length>0?activeProduct?.products?.map((item) => (
            <Card
              card_values={item}
              category_id={param_id}
              sub_id={activeItem._id}
              product_id={item._id}
            />
          )):<div className="p-10 bg-white flex text-2xl text-bold justify-center items-center rounded-md w-4/5 mx-auto">Coming Soon...</div>}
        </div>
      </div>
    </div>
  );
};

export default Categories;
