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
import CoursesCreate from "./pages/Courses/Create";
import CoursesEdit from "./pages/Courses/Edit";
import CoursesDelete from "./pages/Courses/Delete";

//* Lecturer Pages
import LecturerIndex from "./pages/Lecturers/Index"
import LecturerShow from "./pages/Lecturers/Show"
import LecturerCreate from "./pages/Lecturers/Create"
import LecturerEdit from "./pages/Lecturers/Edit"
import LecturerDelete from "./pages/Lecturers/Delete"

//* Enrollment Pages
import EnrollmentIndex from "./pages/Enrollments/Index"
import EnrollmentShow from "./pages/Enrollments/Show"
import EnrollmentDelete from "./pages/Enrollments/Delete"
import EnrollmentEdit from "./pages/Enrollments/Edit"

import EnrollmentCreateC from "./pages/Enrollments/CreateC"
import EnrollmentCreateL from "./pages/Enrollments/CreateL"
import EnrollmentCreateA from "./pages/Enrollments/CreateA"

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
				<Route path="/logout" element={<Logout /> } />

				<Route path="/courses" element={<CoursesIndex />} />
				<Route path="/courses/:id" element={<CoursesShow />} />
				<Route path="/courses/create" element={<CoursesCreate />} />
				<Route path="/courses/edit/:id" element={<CoursesEdit />} />
				<Route path="/courses/delete/:id" element={<CoursesDelete />} />

				<Route path="/lecturers" element={<LecturerIndex />} />
				<Route path="/lecturers/:id" element={<LecturerShow />} />
				<Route path="/lecturers/create" element={<LecturerCreate />} />
				<Route path="/lecturers/edit/:id" element={<LecturerEdit />} />
				<Route path="/lecturers/delete/:id" element={<LecturerDelete />} />

				<Route path="/enrollments" element={<EnrollmentIndex />} />
				<Route path="/enrollments/:id" element={<EnrollmentShow />} />
				<Route path="/enrollments/edit/:id" element={<EnrollmentEdit />} />
				<Route path="/enrollments/delete/:id" element={<EnrollmentDelete />} />

				<Route path="/enrollments/create_c" element={<EnrollmentCreateC />} />
				<Route path="/enrollments/create_l/:id" element={<EnrollmentCreateL />} />
				<Route path="/enrollments/create_a/:id" element={<EnrollmentCreateA />} />
			</>
		);
	};

	return (
        <Router>
            <Navbar />
            <Routes>
				{safeRoutes()}
				{protectedRoutes()}
                {/* <Route path="/" element={<Home />} />

                {/* User Stuff */}
                {/* <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} /> */}

                {/* Course Stuff */}
                {/* <Route path="/courses" element={<CoursesIndex />} />
                <Route path="/courses/:id" element={<CoursesShow />} /> */}

                {/* Lecturer Stuff */}
                {/* <Route path="/lecturers/:id" element={<LecturerShow />} />  */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
