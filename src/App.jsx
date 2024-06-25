import React from "react";
import toast, { Toaster } from "react-hot-toast";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Course from "./components/Course";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Buy from "./components/Buy";
import Auth from "./context/Auth";
export default function App() {
  return (
    <>
      <Auth>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/" element={<Buy />} /> */}
          </Routes>
        </BrowserRouter>
        <Toaster />
        <Footer />
      </Auth>
    </>
  );
}
