import * as r from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const CreateA = () => {
	const API_URL = "https://college-api.vercel.app/api/enrolments";
	const API_URL2 = "https://college-api.vercel.app/api/lecturers";
	const API_URL3 = "https://college-api.vercel.app/api/courses";
	const navigate = useNavigate();
	const { id } = useParams();
	const token = localStorage.getItem("token");

	const [lecturers, setLecturers] = r.useState([]);
	const [courses, setCourses] = r.useState([]);
	const [errors, setErrors] = r.useState([]);

	const [date, setDate] = r.useState("");
	const [time, setTime] = r.useState("");
	const [lecturer, setLecturer] = r.useState();
	const [course, setCourse] = r.useState();
	const [status, setStatus] = r.useState("");

	const statuses = ["interested", "assigned", "associate", "career_break"];

	r.useEffect(() => {
		if (token == null) {
			return navigate("/login");
		}

		//Courses
		axios
			.get(API_URL3, { headers: { Authorization: `Bearer ${token}` } })
			.then((res) => {
				console.log(res.data.data);
				setCourses(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});

		//Lecturer
		axios
			.get(`${API_URL2}/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				console.log(res.data.data);
				setLecturer(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			date: date,
			time: time,
			lecturer_id: lecturer.id,
			course_id: course,
			status: status,
		};

		axios
			.post(API_URL, data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log(res.data);
				navigate("/enrollments");
			})
			.catch((err) => {
				console.log(err.response.data.errors);
				setErrors(err.response.data.errors);
			});
	};

    if(lecturer != null) {
	return (
		<div className="bg-auto">
			<div className="container mx-auto">
				<div className="grid grid-cols-5 gap-5">
					<div className="col-span-5">
						<div className="card shadow-xl bg-base-100">
							<div className="card-body">
								<h2 className="card-title">Create Enrollment</h2>
								<form>
									<div className="form-control">
										<label className="label">
											<span className="label-text">Date</span>
											{errors.date && (
												<span className="text-sm text-error">
													{errors.date[0]}
												</span>
											)}
										</label>
										<input
											type="date"
											placeholder="Date"
											className="input input-bordered"
											onChange={(e) => setDate(e.target.value)}
										/>
									</div>

									<div className="form-control">
										<label className="label">
											<span className="label-text">Time</span>
											{errors.time && (
												<span className="text-sm text-error">
													{errors.time[0]}
												</span>
											)}
										</label>
										<input
											type="time"
											placeholder="Time"
											className="input input-bordered"
											onChange={(e) => setTime(e.target.value)}
										/>
									</div>

									<div className="form-control">
										<label className="label">
											<span className="label-text">Lecturer</span>
											{errors.lecturer_id && (
												<span className="text-sm text-error">
													{errors.lecturer_id[0]}
												</span>
											)}
										</label>
										<input type="text" className="input input-bordered" value={lecturer.name} readOnly />
									</div>

									<div className="form-control">
										<label className="label">
											<span className="label-text">Course</span>
											{errors.course_id && (
												<span className="text-sm text-error">
													{errors.course_id[0]}
												</span>
											)}
										</label>
										<select
											className="select select-bordered w-full"
											onChange={(e) => setCourse(e.target.value)}
										>
											<option disabled selected>
												Select Course
											</option>
											{courses.map((course, i) => {
												return (
													<option key={i} value={course.id}>
														{course.title}
													</option>
												);
											})}
										</select>
									</div>

									<div className="form-control">
										<label className="label">
											<span className="label-text">Status</span>
											{errors.status && (
												<span className="text-sm text-error">
													{errors.status[0]}
												</span>
											)}
										</label>
										<select
											className="select select-bordered w-full"
											onChange={(e) => setStatus(e.target.value)}
										>
											<option disabled selected>
												Select Status
											</option>
											{statuses.map((status, i) => {
												return (
													<option key={i} value={status}>
														{status}
													</option>
												);
											})}
										</select>
									</div>

									<div className="form-control mt-5">
										<button className="btn btn-primary" onClick={handleSubmit}>
											Create
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);} else {
        return <Loading />
    }
};

export default CreateA;
