import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from './src/features/dictionary/dictionarySlice';
export const store = configureStore({
  reducer: {
    // Reducers will be added here
    dictionary: dictionaryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

