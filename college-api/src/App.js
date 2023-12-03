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
//* Lecturer Pages
import LecturersIndex from "./pages/Lecturers/Index";
import LecturersShow from "./pages/Lecturers/Show";

//Component Imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	const safeRoutes = () => {
		return (
			<>
				<Route path="/" element={<Home />} />

				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</>
		);
	};

	const protectedRoutes = () => {
		return (
			<>
				<Route path="/logout" element={<Logout />} />

				<Route path="/courses" element={<CoursesIndex />} />
				<Route path="/courses/:id" element={<CoursesShow />} />

				<Route path="/lecturers" element={<LecturersIndex />} />
				<Route path="/lecturers/:id" element={<LecturersShow />} />
			</>
		);
	};

	return (
		<Router>
			<Navbar />
			<Routes>
				{safeRoutes()}
                
                {protectedRoutes()}
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
