import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import React from "react";
import Home from "../Pages/Home";
import CreateList from "../Pages/CreateList";
import MyCollections from "../Pages/MyCollections";
import Analytics from "../Pages/Analytics";
import Profile from "../Pages/Profile";
import About from "../Pages/About";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import { BrowserRouter } from "react-router-dom";

const Views = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/newList" element={<CreateList />} />
          <Route path="/myCollections" element={<MyCollections />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
