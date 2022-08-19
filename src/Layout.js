import React from "react";
import { Route, Routes } from "react-router-dom";
import Chats from "./pages/Chat";
import Home from "./pages/Home";
import NotFounds from "./pages/NotFound";
import Profile from "./pages/Profile";



const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFounds />} />
    </Routes>
  );
};

export default Layout;