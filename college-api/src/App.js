//Element Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Style Import
import "./assets/style.css";

//Page Imports
import Home from "./pages/Home";

//Component Imports



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
