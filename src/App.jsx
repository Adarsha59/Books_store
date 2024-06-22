// import React from "react";
// import Navbar from "./components/Navbar";
// import HeroBanner from "./components/HeroBanner";
// import Footer from "./components/Footer";
// import FreeCard from "./components/FreeCard";
// import Home from "./components/Home";

// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Course from "./components/Course";
// import Contact from "./components/Contact";
// import About from "./components/About";
// import Login from "./components/Login";
// import Signup from "./components/Signup";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Home />} />
//       <Route path="/course" element={<Course />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       {/* Add a catch-all route for unmatched paths */}
//       <Route
//         path="*"
//         element={
//           <div>
//             <h1>404 Not Found</h1>
//           </div>
//         }
//       />
//     </>
//   )
// );

// function App() {
//   return (
//     <>
//       <Navbar />

//       <RouterProvider router={router} />
//       <Footer />
//     </>
//   );
// }

// const root = createRoot(document.getElementById("root"));
// root.render(<App />);

// export default App;

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
export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
