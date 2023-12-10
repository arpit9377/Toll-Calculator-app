
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

const tollSlice = createSlice({
  name: 'toll',
  initialState,
  reducers: {
  },
});

export const { actions } = tollSlice;
export default tollSlice.reducer;
