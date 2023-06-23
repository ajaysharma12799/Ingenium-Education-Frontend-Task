import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails/PostDetails";
import Navbar from "./components/Navbar";
import Fav from "./pages/Fav";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/fav" element={<Fav />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
