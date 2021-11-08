import { configureStore } from '@reduxjs/toolkit';
import photoReducer from 'features/Photo/photoSlice'

export const store = configureStore({
  reducer: {
    photos: photoReducer,
  },
});
