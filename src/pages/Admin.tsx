import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "../components/admin/navigate/LayoutAdmin";
import HomePage from "../components/admin/HomePage";
import AddProduct from "../components/admin/AddProduct/AddProduct";
import ViewProducts from "../components/admin/allProducts/ViewProducts";
import Orders from "../components/admin/Orders";
import UseList from "../components/admin/UseList";

const Admin = () => {
  return (
    <div>
      <Routes>
        <Route element={<LayoutAdmin />}>
          <Route index element={<HomePage />} />
          <Route path="add-product/:id" element={<AddProduct />} />
          <Route path="all-products" element={<ViewProducts />} />
          <Route path="orders" element={<Orders />} />
          <Route path="useList" element={<UseList />} />
          {/* <Route path="order-details/:id" element={<OrderDetails />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default Admin;
