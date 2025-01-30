import React from "react";

const Links = [
  ["About", "Careers", "Blog", "Press", "Lead", "Value"],
  ["Privacy", "Terms", "FAQs", "Security", "Mobile", "Contact"],
  ["Partner", "Franchise", "Seller", "Warehouse", "Deliver", "Resources"],
];
const categories = [
  [
    "Vegetables & Fruits",
    "Dairy & Breakfast",
    "Munchies",
    "Cold Drinks & Juices",
    "Instant & Frozen Food",
    "Tea, Coffee & Health Drinks",
    "Bakery & Biscuits",
    "Sweet Tooth",
    "Atta, Rice & Dal",
  ],
  [
    "Dry Fruits, Masala & Oil",
    "Sauces & Spreads",
    "Chicken, Meat & Fish",
    "Paan Corner",
    "Organic & Premium",
    "Baby Care",
    "Pharma & Wellness",
    "Cleaning Essentials",
    "Home & Office",
  ],
  [
    "Ice Creams & Frozen Desserts",
    "Personal Care",
    "Pet Care",
    "Beauty & Cosmetics",
    "Magazines",
    "Fashion & Accessories",
    "Electronics & Electricals",
    "Stationery Needs",
    "Books",
    "Toys & Games",
  ],
];

const Footer = () => {
  return (
    <div className="relative ">

    <div className="w-full bg-gray-50 flex px-12 py-5 gap-8  ">
      <div className="w-2/5  ">
        <h1 className="text-xl">Useful Links</h1>
        <div
          className="flex justify-start gap-28
         mt-1  text-gray-600 font-Lato font-light cursor-pointer "
        >
          <ul className="py-4">
            {Links[0].map((item,index) => (
              <li className="hover:text-pink-400" key={item+index}>{item}</li>
            ))}
          </ul>
          <ul className="py-4">
            {Links[1].map((item,index) => (
              <li className="hover:text-pink-400" key={item+index}>{item}</li>
            ))}
          </ul>
          <ul className="py-4">
            {Links[2].map((item,index) => (
              <li className="hover:text-pink-400" key={item+index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-3/5 ">
        <h2 className="text-xl">Categories</h2>
        <div className="flex gap-28 justify-start mt-1 font-light text-gray-600 font-Lato cursor-pointer">
          <ul className="py-4">
            {categories[0].map((item,index) => (
              <li className="hover:text-pink-400" key={item+index}>{item}</li>
            ))}
          </ul>
          <ul className="py-4">
            {categories[1].map((item,index) => (
              <li className="hover:text-pink-400" key={item+index}>{item}</li>
            ))}
          </ul>
          <ul className="py-4">
            {categories[2].map((item,index) => (
              <li className="hover:text-pink-400" key={item+index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="flex justify-center bg-gray-300 text-sm">© Baazar Commerce Private Limited, 2016-2024</div>
    </div>
  );
};

export default Footer;
