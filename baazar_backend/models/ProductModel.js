import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: false },
    subcategories: [
        {
            name: { type: String, required: true },
            image: { type: String, required: false },
            products: [
                {
                    name: { type: String, required: false },
                    image: { type: String, required: false },
                    price: { type: String, required: false },
                    quantity: { type: String, required: false }
                }
            ]
        }
    ]
});

const Item = mongoose.model('Item', categorySchema);

export default Item;

// export const createItems=async()=>{
//     const createItem =new Item();

//     await createItem.save()

//     const newitem= await Item.find()
//     if(newitem.length >=1){
//         console.log("one item inserted")
//     }
// }
// createItems()

