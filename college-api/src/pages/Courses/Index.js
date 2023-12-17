import * as r from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard";

//bootstrap icons
import * as bi from "react-bootstrap-icons";

const Index = () => {
	const API_URL = "https://college-api.vercel.app/api/courses";
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	const [courses, setCourses] = r.useState([]);
	const [filtered, setFiltered] = r.useState([]);
	const [search, setSearch] = r.useState("");

	r.useEffect(() => {
		if (token == null) {
			return navigate("/login");
		}

		axios
			.get(API_URL, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				console.log(res.data.data);
				setCourses(res.data.data);
				setFiltered(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleSearch = (e) => {
		setSearch(e.target.value);
		const filtered = courses.filter((course) => {
			console.log(course);
			return course.title.toLowerCase().includes(e.target.value.toLowerCase());
		});
		setFiltered(filtered);
	};

	const displayCourses = filtered.map((course) => {
		return (
			<CourseCard key={course.id} course={course} />
		);
	});

	
	return (
		<>
			<div className="dark:bg-bg-dark-alt bg-bg-light-alt pt-5 dark:text-text-light text-text-dark flex gap-10 pb-5">
				<div className="container mx-auto">
					<div className="gap-5 flex px-10 mx-10">
						<button
							className="btn btn-primary font-normal text-3 p-2 px-5 btn-primary-auto border-2 mb-5"
							onClick={() => navigate("/courses/create")}
						>
							Create Course
						</button>
						<input
							type="text"
							className="border-2 px-3 mx-10 rounded dark:border-text-light border-text-dark mb-5 w-full"
							placeholder="Search..."
							onChange={handleSearch}
						/>
					</div>
					<div className="gap-5 flex-col flex">{displayCourses.length == 0 ? <span class="loading loading-spinner w-20 my-10 mx-auto "></span> : displayCourses}</div>
				</div>
			</div>
		</>
	);
};

export default Index;
