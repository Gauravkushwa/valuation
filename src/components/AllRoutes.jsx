import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login"
import UserDetails from "../pages/UserDetails";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users/:user_id" element={<UserDetails />} />
    </Routes>
  );
}
