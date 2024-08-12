import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../services/api';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await fetchProducts();
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default productsSlice.reducer;
