import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import CandidateSearch from "./components/CandidateSearch";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<CandidateSearch />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
