import Item from "../models/ProductModel.js";
import mongoose from "mongoose";

const newProducts = [
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de5c8f6f-d320-4543-ae7c-08437c2e91e6.jpg?ts=1717747398",
    name: "Kurkure Masala Munch Crisps - Pack of 3",
    quantity: "",
    price: "54",
  },

  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/70c9bfb0-e903-45b1-8cf6-8812422f4aa4.jpg?ts=1716873741",
    name: "Kurkure Puffcorn Yummy Cheese Puffs - Pack of 3",
    quantity: "",
    price: "54",
  },

  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/482828a.jpg?ts=1688628430",
    name: "Haldiram's Takatak Chatpata Masala Stick",
    quantity: "105 g",
    price: "22",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f0c878cc-6772-41b1-89d4-da70b9f1dcc2.jpg?ts=1716873800",
    name: "Kurkure Chilli Chatka Crisps - Pack of 3",
    quantity: "",
    price: "54",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/534449a.jpg",
    name: "Uncle Chipps Plain Salted Potato Chips",
    quantity: "",
    price: "40",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1e6bd63b-47c5-4ee8-b56e-5f8434112873.jpg?ts=1728051084",
    name: "Bingo Mad Angles Achaari Masti Crisps - Pack of 3",
    quantity: "",
    price: "55",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3cbf03cb-6173-4a6b-8ff2-e97f16587f53.jpg?ts=1727430265",
    name: "Wingreens Farms Garlic Dip + Kurkure Masala Munch Crisps Combo",
    quantity: "150 g + 75 g",
    price: "209",
  },

  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7f1144e0-a4c2-426e-9a19-ab322800cd0f.jpg?ts=1717504872",
    name: "Lay's American Style Cream & Onion Potato Chips + Wingreens Farms Peri Peri Hummus Dip Combo",
    quantity: "48 g + 150 g",
    price: "200",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/662ebc1c-f54f-4006-a519-b2d6dc982e8f.jpg?ts=1715061317",
    name: "Lay's Classic Salted Flavor Potato Chips + Wingreens Farms Peri Peri Hummus Dip Combo",
    quantity: "82 g + 150 g",
    price: "200",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/53df8b2b-1236-4d94-8c5a-09cb41a1dd11.jpg?ts=1713516054",
    name: "Cheetos Masala Balls Crisps",
    quantity: "",
    price: "40",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_524102.jpg?ts=1710350803",
    name: "Kurkure Green Chutney Crisps - Pack of 3",
    quantity: "",
    price: "54",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f7b3b2fa-b54d-40c5-849f-18e2c90babf3.jpg?ts=1712753393",
    name: "Chheda's Yellow Banana Chips",
    quantity: "170 g",
    price: "89",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/94eaf0e4-f627-41a9-8421-6f0d072cf6b6.jpg?ts=1716900846",
    name: "Lay's Sizzling Hot Potato Chips - Pack of 3",
    quantity: "",
    price: "54",
  },

  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e6022710-b1e5-4e23-809f-b7d1ff20f561.jpg",
    name: "Haldiram's Classic Salted Potato Chips",
    quantity: "",
    price: "36",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/380bb779-55e4-487e-b40e-f5695bd869a7.jpg?ts=1707134601",
    name: "Let's Try Potato Wafers / Aloo Chips",
    quantity: "60 g",
    price: "37",
  },

  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b6afe411-ada5-4971-939d-5d00b90b0bc2.jpg?ts=1731401394",
    name: "Beyond Snack Kerala Banana Chips Puspha 2 Fire Edition",
    quantity: "",
    price: "71",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bdb3efdb-5abf-4a2a-a3ba-7eeaf56666a5.jpg?ts=1733134334",
    name: "Crax Fritts Peri Peri Corn & Potato Sticks",
    quantity: "82 g",
    price: "40",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/507b8257-359e-4a35-9ff0-2e3ac59725dc.jpg?ts=1717762408",
    name: "Bingo Tedhe Medhe Masala Tadka Crisps - Pack of 3",
    quantity: "",
    price: "40",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7506a781-c6bb-43cb-a7c7-a31afb9e00d7.jpg?ts=1715061021",
    name: "Lay's India's Magic Masala Potato Chips (90 g) - Pack of 2",
    quantity: "",
    price: "80",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4e6af6b6-0632-451a-81fc-f0085fa01f10.jpg?ts=1723527559",
    name: "Beyond Snack Kerala Original Style Banana Chips - Pack of 2",
    quantity: "",
    price: "106",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4078c690-a520-4252-962a-187934bdf172.jpg?ts=1717749119",
    name: "Bingo Mad Angles Tomato Madness Crisps - Pack of 3",
    quantity: "",
    price: "57",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9852aee6-9cae-4830-9ddc-15d0f86d5d1f.jpg",
    name: "Haldiram's Pudina Treat Potato Chips",
    quantity: "",
    price: "36",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f0360e46-69a6-4bee-83b3-03994c241aff.jpg?ts=1732866491",
    name: "Orion Choco Pie +  K Snack Kimchi Onion Rings Combo",
    quantity: "336 g (12 pieces) + 70 g",
    price: "166",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/00a2c89c-d5ff-45f0-a66b-09d9d5cbc50d.jpg?ts=1732866490",
    name: "Orion Choco Pie +  K Snack Ring Puffs 3X Spicy Combo",
    quantity: "336 g (12 pieces) + 70 g",
    price: "166",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6f10f0f4-2c68-4f6a-b3cc-3978142ad71f.jpg?ts=1732874059",
    name: "Orion K Snack Kimchi Onion Rings - Buy 2 Get 1 Free",
    quantity: "2 x 70 g + 1 x 70 g",
    price: "120",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/524a1ebd-b6b3-4fc6-9658-49fb8d67ec8f.jpg",
    name: "Orion K Snack Ring Puffs 3X Spicy",
    quantity: "",
    price: "50",
  },

  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ca55e8e1-98b2-45a7-8938-00ce8a8f8ce8.jpg?ts=1724745905",
    name: "Lay's Wafer Style - Sundried Chilli Potato Chips - Pack of 3",
    quantity: "",
    price: "54",
  },

  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/26f0f0ca-1e4d-4f69-b7c4-e99472ecf993.jpg?ts=1728051400",
    name: "Bingo Original Style Chilli Potato Chips - Pack of 4",
    quantity: "",
    price: "72",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/540666a.jpg?ts=1704359696",
    name: "Uncle Chipps Spicy Treat Potato Chips - Pack of 2",
    quantity: "",
    price: "75",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/314fb60c-bf7c-4ba2-ab74-d70455d16717.jpg?ts=1718212722",
    name: "Natkhat Classic Wheat Puffs - Pack of 2",
    quantity: "",
    price: "74",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/538700a.jpg",
    name: "Pringles Sour Cream & Onion Potato Chips (40 g)",
    quantity: "40 g",
    price: "56",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7d66bc0f-9dac-4729-b38f-42dc7d430f1a.jpg?ts=1717749108",
    name: "Bingo Mad Angles Masala Madness Crisps - Pack of 3",
    quantity: "",
    price: "56",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7cb7a596-2412-4604-8fcc-882dce793e31.jpg?ts=1724314095",
    name: "Gulab Aloo Chips",
    quantity: "150 g",
    price: "72",
  },

  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/07869837-7f46-4003-9121-87cfd9427113.jpg?ts=1723305418",
    name: "Lay's Wafer Style - Salt with Pepper Potato Chips - Pack of 3",
    quantity: "",
    price: "54",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2a206d5d-e0e1-484f-9edd-3a747e5c4f63.jpg?ts=1718214681",
    name: "Crax Curls Chatpata Masala Puffs - Pack of 3",
    quantity: "",
    price: "108",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e630ed4b-2f87-4366-91d5-3f3a1ab40410.jpg",
    name: "Fun Flips Baked & Crunchy Masala Puffs",
    quantity: "100 g",
    price: "34",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5316e4df-ec50-4473-a13c-808bae7f6c2a.jpg",
    name: "Fun Flips Baked & Crunchy Mocktail Curly Puffs",
    quantity: "100 g",
    price: "34",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_518849.jpg?ts=1710349379",
    name: "Kurkure Playz Puffcorn Yummy Cheese Puffs - Pack of 2",
    quantity: "",
    price: "75",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/80393334-436d-4090-b7b0-bcbeb2ce54e6.jpg?ts=1726837541",
    name: "Chheda's Long Masala Banana Chips",
    quantity: "170 g",
    price: "88",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/446730a.jpg?ts=1688634540",
    name: "Haldiram's Snac Lite Fun Wheels Spicy Masala Namkeen",
    quantity: "85 g",
    price: "22",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e741969a-1896-439a-841a-24818f8014fa.jpg",
    name: "Crax Crunchy Pipes Puffs",
    quantity: "",
    price: "41",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de7e56fa-15cf-44b6-a097-8ec2a37771b6.jpg?ts=1716894700",
    name: "Crax Masala Punch Potato Chips - Pack of 3",
    quantity: "",
    price: "90",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/06519185-ed85-4a85-a15a-607d0756d27b.jpg?ts=1732168297",
    name: "Too Yumm Smoking Hot Bhoot Potato Chips (Bhut Jolokia Chillies)",
    quantity: "",
    price: "53",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/538698a.jpg",
    name: "Pringles Original Potato Chips (40 g)",
    quantity: "40 g",
    price: "56",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/13718407-e373-4a82-9ad1-c30704c1c718.jpg?ts=1714825389",
    name: "Lay's West Indies Hot 'n' Sweet Chilli Potato Chips",
    quantity: "82 g",
    price: "45",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4a768bcf-9a44-4dbc-93de-e2b7cb4685a8.jpg",
    name: "Bingo Tedhe Medhe Chatpata Twist Crisps",
    quantity: "",
    price: "18",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/318777a.jpg?ts=1687243864",
    name: "Chheda's Salt-n-Pepper Banana Chips - 170 g",
    quantity: "170 g",
    price: "79",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ff1ec762-88a8-4d7d-a528-e7479f9d4478.jpg?ts=1715061022",
    name: "Lay's Classic Salted Flavor Potato Chips - Pack of 2",
    quantity: "",
    price: "80",
  },

  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5b39ec03-6350-4f80-9fbc-befd90622b21.jpg?ts=1720421153",
    name: "Lay's India's Magic Masala Potato Chips (143 g)",
    quantity: "",
    price: "67",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1b7095fc-9baa-4bd0-9eb1-7d506ea39814.jpg?ts=1716873853",
    name: "Beyond Snack Kerala Peri Peri Banana Chips - Pack of 2",
    quantity: "",
    price: "106",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1222df13-27fc-42f9-9dbb-c34d2fdb6f09.jpg?ts=1715061019",
    name: "Lay's American Style Cream & Onion Flavour Potato Chips - Pack of 2",
    quantity: "",
    price: "80",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f8a44fc5-3636-4b7b-8e48-eac1e7bacfb5.jpg?ts=1723798980",
    name: "Crax Biggies Swiss Cheese Puffs",
    quantity: "",
    price: "41",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_485527.jpg?ts=1710347398",
    name: "Peppy Cheese Balls - Pack of 4",
    quantity: "",
    price: "120",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ff23ece-4334-40c6-954e-c26e3c41de01.jpg?ts=1712061850",
    name: "Chheda's Golden Aloo Chips (Rock Salt)",
    quantity: "170 g",
    price: "82",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_485528.jpg?ts=1710347398",
    name: "Peppy Tomato Discs Crisps - Pack of 4",
    quantity: "",
    price: "120",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/117c4ae0-6ac5-4643-bb21-ac34eb0f5bae.jpg?ts=1733991580",
    name: "Pringles Pizza Flavoured Potato Chips - Pack of 2",
    quantity: "",
    price: "204",
  },

  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f9263057-7e88-4015-9eb0-9fd0fae5bc57.jpg?ts=1718212711",
    name: "Crax Cheese Balls Puffs - Pack of 2",
    quantity: "",
    price: "74",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e950b154-cabd-46c8-b7bb-36abefdc3d1e.jpg?ts=1728051182",
    name: "Bingo Original Style Chilli Sprinkled Potato Chips - Pack of 3",
    quantity: "",
    price: "100",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/830266fc-06c6-4af4-9605-d0c34b9aedba.jpg?ts=1729666882",
    name: "Beyond Snack Kerala Original Style Banana Chips +  Desi Masala Kerala Banana Chips Combo",
    quantity: "75 g + 75 g",
    price: "106",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3e5191ae-3820-4e9a-9bf7-7791cf7a4d3e.jpg",
    name: "Bingo Hashtags Hot & Spicy Korean Style Chips",
    quantity: "",
    price: "27",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a190dc1f-16ab-466a-95a0-efcddd7de0b2.jpg?ts=1729666884",
    name: "Beyond Snack Kerala Original Style Banana Chips +  Hot and Sweet Chilli Kerala Banana Chips Combo",
    quantity: "75 g + 75 g",
    price: "106",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ed26764a-7d0f-4d65-a305-30034c6e772c.jpg?ts=1729666878",
    name: "Beyond Snack Banana Chips (Rock Salt) +  Kerala Peri Peri Banana Chips Combo",
    quantity: "85 g + 75 g",
    price: "119",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c1cbd3e5-99b7-4328-b423-e1703f4877e6.jpg?ts=1729666885",
    name: "Beyond Snack Banana Chips (Rock Salt) +  Kerala Sour Cream, Onion & Parsley Banana Chips Combo",
    quantity: "85 g + 75 g",
    price: "119",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9bd0a156-0f1d-4b72-88df-8a6bfc9ddd47.jpg?ts=1730310295",
    name: "Too Yumm Puffs Savage Masala +  XoXo Chips Bold Tomato +  Baked Tomato Thunder Rings Crisps Combo",
    quantity: "75 g + 70 g + 70 g",
    price: "121",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8256ac09-92fc-45ae-8cd0-767d3cc25f1f.jpg?ts=1729666879",
    name: "Beyond Snack Salt & Black Pepper Kerala Banana Chips +  Kerala Original Style Banana Chips Combo",
    quantity: "125 g + 75 g",
    price: "136",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5fa08419-891e-4f70-90f6-8a732794e30b.jpg?ts=1729666881",
    name: "Beyond Snack Salt & Black Pepper Kerala Banana Chips +  Kerala Peri Peri Banana Chips Combo",
    quantity: "125 g + 75 g",
    price: "136",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0adfd5f7-cde5-4d8a-b4bf-9d4ca59b0edb.jpg?ts=1733215923",
    name: "Too Yumm Smoking Hot Bhoot Potato Chips (Bhut Jolokia Chillies) +  K-Bomb Mi Goreng Instant Noodles Combo",
    quantity: "82 g + 80 g",
    price: "84",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ba0dcb6b-3614-4568-ad09-7a7b48d25e37.jpg?ts=1722935189",
    name: "Beyond Snack Banana Chips (Rock Salt) - Pack of 2",
    quantity: "",
    price: "132",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ecf6f46f-458e-4552-b26a-b7b2fd42dc2e.jpg?ts=1728848491",
    name: "Let's Try Vrat Mota Chips / Aloo Chips",
    quantity: "",
    price: "32",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/396312a.jpg?ts=1677060573",
    name: "Hully Gully Magic Masala Corn Puffs (Golden Pack)",
    quantity: "",
    price: "70",
  },
];
// const newSubcategory=[
//   {
//     "image": "https://cdn.grofers.com/app/images/category/cms_images/icon/940_1643445382163.png",
//     "name": "Chips & Crisps"
//   },
//   {
//     "image": "https://cdn.grofers.com/app/images/category/cms_images/icon/107_1643445091063.png",
//     "name": "Rusks & Wafers"
//   },
//   {
//     "image": "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1700735371138-2",
//     "name": "Energy Bars"
//   },
//   {
//     "image": "https://cdn.grofers.com/app/images/category/cms_images/icon/316_1643445356931.png",
//     "name": "Nachos"
//   },
//   {
//     "image": "https://cdn.grofers.com/app/images/category/cms_images/icon/1178_1643445391732.png",
//     "name": "Bhujia & Mixtures"
//   },
//   {
//     "image": "https://cdn.grofers.com/app/images/category/cms_images/icon/156_1643445347481.png",
//     "name": "Popcorn"
//   },
//   {
//     "image": "https://cdn.grofers.com/app/images/category/cms_images/icon/29_1647516811054.png",
//     "name": "Namkeen Snacks"
//   },
//   {
//     "image": "https://cdn.grofers.com/app/images/category/cms_images/icon/816_1643616595725.png",
//     "name": "Makhana & More"
//   },
//   {
//     "image": "https://cdn.grofers.com/app/images/category/cms_images/icon/80_1643446014772.png",
//     "name": "Papad & Fryums"
//   },
//   {
//     "image": "https://cdn.grofers.com/app/images/category/cms_images/icon/2362_1696422767861.png",
//     "name": "Imported Snacks"
//   },
//   {
//     "image": "https://cdn.grofers.com/app/images/category/cms_images/icon/613_1680251590747.png",
//     "name": "Granola"
//   },
//   {
//     "image": "https://cdn.grofers.com/a10dccab-6301-4e0c-b49e-a221b0edb0d5.png",
//     "name": "Munchies Gift Packs"
//   }
// ]

export const findCategories = async (req, res) => {
  try {
    const categories = await Item.find();

    res.status(200).json(categories);
  } catch (error) {
    res
      .status(200)
      .json({ message: "error fetching data", error: error.message });
  }
};
export const findSubCategories = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  const objectId = new mongoose.Types.ObjectId(id);
  try {
    const subCategories = await Item.findById(objectId);
    // console.log(subCategories)

    res.status(200).json(subCategories);
  } catch (error) {
    res
      .status(200)
      .json({ message: "error fetching data", error: error.message });
  }
};

export const addSubcategory = async (categoryid, newSubcategory) => {
  // const objectId = new mongoose.Types.ObjectId(categoryid);
  const updatedCategory = await Item.findByIdAndUpdate(
    categoryid,
    {
      $push: {
        subcategories: newSubcategory,
      },
    },
    { new: true }
  );
};

export const addProduct = async (categoryid, subcategoryid, newProducts) => {
  const objectId = new mongoose.Types.ObjectId(categoryid);
  const category = await Item.findById(objectId);
  // console.log(category)
  const subcategory = category.subcategories.id(subcategoryid);
  // console.log(subcategory)

  subcategory.products.push(...newProducts);
  category.save();
};
addProduct("675e639dbb8177614731f5ef", "676118b2ad4cf38188014c38", newProducts);
// addSubcategory("675e639dbb8177614731f5ef", newSubcategory);

export const addUser=async()=>{
  
}