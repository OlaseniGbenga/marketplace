import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NotFoundPage from "./pages/notfoundpage";
import FreshFlowers from "./pages/categories/freshFlowers";
import DryFlowers from "./pages/categories/dryFlower";
import LivePlants from "./pages/categories/livePlant";
import AromaCandles from "./pages/categories/aromaCandles";

// component
import Top from "./component/top";
import Footer from "./component/footer";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Signin from "./pages/signin";

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Top />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/freshflowers" element={<FreshFlowers />} />
          <Route exact path="/driedflowers" element={<DryFlowers/>} />
          <Route exact path="/liveplants" element={<LivePlants/>} />
          <Route exact path="/aromacandles" element={<AromaCandles/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
