import React from "react";
import NavBar from "./components/NavBar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home.jsx";
import Profile from "./components/Profile/Profile.jsx";
// import Form from "./components/Form/Form.jsx";
// import Profile from "./components/Profile/Profile.jsx";
// import Footer from "./components/Footer.jsx";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App">
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App
