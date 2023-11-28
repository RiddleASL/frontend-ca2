import * as r from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

//bootstrap icons
import * as bi from "react-bootstrap-icons";

const Index = () => {
	const API_URL = "https://college-api.vercel.app/api/courses";
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	const [courses, setCourses] = r.useState([]);
	const [search, setSearch] = r.useState("");

	r.useEffect(() => {
		if (token == null) {
			return navigate("/login");
		}

		axios
			.get(API_URL, {
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
			})
			.then((res) => {
				console.log(res.data.data);
				setCourses(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const displayCourses = courses.map((course) => {
		return (
			<div className="card bg-base-100 shadow-xl" key={course.id}>
				<div className="card-body">
					<Link to={`/courses/${course.id}`} className="card-title text-2 mb-5">
						{course.title}
					</Link>
					<div className="flex justify-around text-3">
						<div>
							<p className="text-sm">{course.description}</p>
						</div>
						<div className="border-2 mx-5" />
						<div className="w-1/2">
							<ul>
								<li>
									<p className="text-sm">Code: {course.code}</p>
								</li>
								<li>
									<p className="text-sm">Level: {course.level}</p>
								</li>
								<li>
									<p className="text-sm">Points: {course.points}</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<>
			<div className="mx-auto dark:bg-bg-dark-alt bg-bg-light-alt pt-5 dark:text-text-light text-text-dark flex gap-10">
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
