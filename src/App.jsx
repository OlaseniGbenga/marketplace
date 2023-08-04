import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NotFoundPage from "./pages/notfoundpage";


// component
import Top from "./component/top";
import Footer from "./component/footer";



function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Top/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
