import { configureStore } from '@reduxjs/toolkit';
import tollReducer from './TollSlice';

const store = configureStore({
  reducer: {
    toll: tollReducer,
  },
});

export default store;
