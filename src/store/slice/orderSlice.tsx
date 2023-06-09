import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IOrder } from "../../models/models";

interface initialStateProps {
  orderHistory: IOrder[],
  totalOrderAmount: number | null
}

const initialState: initialStateProps = {
  orderHistory: [],
  totalOrderAmount: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    STORE_ORDERS(state, action) {
      state.orderHistory = action.payload;
    },
    CALC_TOTAL_ORDER_AMOUNT(state, action) {
      const array: number[] = [];
      state.orderHistory.map((item) => {
        const { orderAmount } = item;
        return array.push(orderAmount);
      });
      const totalAmount = array.reduce((a, b) => {
        return a + b;
      }, 0);
      state.totalOrderAmount = totalAmount;
    },
  },
});

export const { STORE_ORDERS, CALC_TOTAL_ORDER_AMOUNT } = orderSlice.actions;

export const selectOrderHistory = (state: RootState) => state.orders.orderHistory;
export const selectTotalOrderAmount = (state: RootState) => state.orders.totalOrderAmount;

export default orderSlice.reducer;
