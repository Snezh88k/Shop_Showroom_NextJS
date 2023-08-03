import { createSlice } from "@reduxjs/toolkit";

type FavoriteItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: string;
  typeSize: string;
  brend: string;
  count: number;
};

interface FavoriteSliceState {
  items: FavoriteItem[];
}

const initialState: FavoriteSliceState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, action) {
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

      localStorage.setItem("favorite", JSON.stringify(state.items));
    },
    removeFavorite(state, action) {
      const indexProduct = state.items.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size
      );

      state.items = state.items.filter((obj, index) => {
        return index !== indexProduct;
      });

      localStorage.setItem("favorite", JSON.stringify(state.items));
    },

    fillFavoriteStore(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, fillFavoriteStore } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
