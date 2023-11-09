import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

//components
import Navbar from "./components/Navbar";

//pages
import FestivalIndex from "./pages/festivals/Index"
import FestivalShow from "./pages/festivals/Show"
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all" element={<FestivalIndex />}></Route>
          <Route path="/show/:id" element={<FestivalShow />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
