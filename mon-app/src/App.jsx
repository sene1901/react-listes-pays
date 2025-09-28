import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./Pages/Accueil";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/informations" element={<h2 className='text-center my-5'>📘 Page Informations</h2>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
