import { configureStore } from '@reduxjs/toolkit';
import catalogSlice from './catalogSlice';
import storeSlice from './storeSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    store: storeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
