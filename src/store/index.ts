import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import menuSwitchSlice from "./slice/menuSwitch";
import productReducer from "./slice/productSlice";
import filterReducer from "./slice/filterSlice";
import cartReducer from "./slice/cartSlice";
import checkoutReducer from "./slice/checkoutSlice";
import orderReducer from "./slice/orderSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    menuSwitch: menuSwitchSlice,
    product: productReducer,
    filter: filterReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    orders: orderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
