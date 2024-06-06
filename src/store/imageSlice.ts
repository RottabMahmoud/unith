import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface ImageState {
  data: any[];
  loading: boolean;
  error: string | null;
  activeIndex: number | null;
}

const initialState: ImageState = {
  data: [],
  loading: false,
  error: null,
  activeIndex: null,
};

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const response = await axios.get('http://54.73.73.228:4369/api/images');
  return response.data;
});

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.data = Object.values(action.payload); // Ensure it's an array
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch images';
      });
  },
});

export const { setActiveIndex } = imageSlice.actions;
export default imageSlice.reducer;
