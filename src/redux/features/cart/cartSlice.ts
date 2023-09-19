import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<IProduct>) => {
      const existingProduct = state.products.find(
        (product) => product._id === actions.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity = existingProduct.quantity! + 1;
      } else {
        state.products.push({ ...actions.payload, quantity: 1 });
      }
      state.total += actions.payload.price;
    },
    removeFromCart: (state, actions: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== actions.payload._id
      );
      state.total -= actions.payload.price * actions.payload.quantity!;
    },
    removeOne: (state, actions: PayloadAction<IProduct>) => {
      const existingProduct = state.products.find(
        (product) => product._id === actions.payload._id
      );
      if (existingProduct && existingProduct.quantity! > 1) {
        existingProduct.quantity! -= 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== actions.payload._id
        );
      }
      state.total -= actions.payload.price;
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
