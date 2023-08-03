import { createSlice } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: string;
  typeSize: string;
  brend: string;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
  allCount: number;
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
  allCount: 0,
};

const catrSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id && obj.size === action.payload.size
      );

      if (findItem) {
        // findItem.count += action.payload.count;
      } else {
        state.items.push({
          ...action.payload,
        });
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);

      state.allCount = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count -= 1;
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);

      state.allCount = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      const indexProduct = state.items.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size
      );

      state.items = state.items.filter((obj, index) => {
        return index !== indexProduct;
      });

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);

      state.allCount = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.allCount = 0;

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    fillStore(state, action) {
      state.items = action.payload;
      state.totalPrice = action.payload.reduce(
        (sum: number, product: any) => sum + product.price,
        0
      );
      state.allCount = action.payload.length;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem, fillStore } =
  catrSlice.actions;

export default catrSlice.reducer;
