import { asyncThunkCreator, createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)
        if(findProduct !== -1){
          state.cartItem[findProduct].qun + 1
          localStorage.setItem("cart", JSON.stringify(state.cartItem))
        }else{
          state.cartItem = [...state.cartItem, action.payload]
          localStorage.setItem("cart", JSON.stringify(state.cartItem))

        }
        
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = productSlice.actions

export default productSlice.reducer