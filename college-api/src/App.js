//Element Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Style Import
import "./assets/style.css";

//Page Imports
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Component Imports



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
