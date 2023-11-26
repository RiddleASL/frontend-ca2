//Element Imports
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";


//Style Import
import "./assets/style.css";

//Page Imports
import Home from "./pages/Home";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";

//Component Imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />

                {/* User Stuff */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
