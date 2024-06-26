import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import modalReducer from './modal';
import uiReducer from './ui';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    modal: modalReducer
  }
});

export default store;


