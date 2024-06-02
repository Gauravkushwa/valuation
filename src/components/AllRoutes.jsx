import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login"
import UserDetails from "../pages/UserDetails";
import Products from "../pages/Products";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/users/:user_id" element={<UserDetails />} />
    </Routes>
  );
}
