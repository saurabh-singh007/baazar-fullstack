import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0,
    cartItem:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const existingItem=state.cartItem?.find((item)=>item._id===action.payload._id)

            if(existingItem){
                existingItem.Totalprice +=parseInt(action.payload.price)
                existingItem.Totalquantity +=1
            }else{
                state.cartItem.push({
                    ...action.payload,
                    Totalprice :parseInt(action.payload.price),
                    Totalquantity:1

                })
            }
            state.count+=1

        },
        removeFromCart:(state,action)=>{
            const existingItem=state.cartItem?.find((item)=>item._id===action.payload._id)

            if(existingItem.Totalquantity >1){
                existingItem.Totalprice -=parseInt(action.payload.price)
                existingItem.Totalquantity -=1
                state.count -=1
            }else{
               const filteredItem= state.cartItem.filter((item)=>item._id !==action.payload._id)
                state.cartItem=filteredItem
                state.count -=1
            }
        }
      

    }
})

export const {addToCart,removeFromCart}=cartSlice.actions

export default cartSlice.reducer 