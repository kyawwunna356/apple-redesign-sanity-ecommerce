import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface Basket {
    items: Product[];
}

const initialState: Basket = {
    items: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state,action: PayloadAction<{product: Product}>) => {
            state.items.push(action.payload.product)
        },
        removeItemFromBasket: (state,action: PayloadAction<{product: Product}>) => {
          
           const removeItemindex = state.items.findIndex(el => el._id === action.payload.product._id)
           console.log(removeItemindex)
           state.items.splice(removeItemindex,1)

        }
    }
})

//selectors
export const selectItems = ( state : RootState) => state.basket.items
export const selectTotalAmount = (state: RootState) => state.basket.items.reduce((total,product) => total += Number(product.price), 0)

export default basketSlice.reducer

export const { addToBasket, removeItemFromBasket} = basketSlice.actions