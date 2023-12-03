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
//* User Pages
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Logout from "./pages/User/Logout";
//* Course Pages
import CoursesIndex from "./pages/Courses/Index";
import CoursesShow from "./pages/Courses/Show";

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
                <Route path="/logout" element={<Logout />} />

                {/* Course Stuff */}
                <Route path="/courses" element={<CoursesIndex />} />
                <Route path="/courses/:id" element={<CoursesShow />} />

                {/* Lecturer Stuff */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
