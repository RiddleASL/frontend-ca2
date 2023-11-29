import * as r from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//components
import Lecturer from "../../components/Lecturer";

const Show = () => {
	const { id } = useParams();
	const token = localStorage.getItem("token");
	const [data, setData] = r.useState({});
	const [enrolments, setEnrolments] = r.useState([]);
	const [lecturers, setLecturers] = r.useState([]);

	r.useEffect(() => {
		axios
			.get(`https://college-api.vercel.app/api/courses/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				console.log(response.data);
				setData(response.data.data);
				setEnrolments(response.data.data.enrolments);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const lecturerCards = enrolments.map((enrolment, i) => {
		return <Lecturer key={i} lecturer={enrolment.lecturer} />;
	});

	if (enrolments.length > 0) {
		return (
			<div className="dark:bg-bg-dark-alt bg-bg-light-alt text-white">
				<div className="container mx-auto pt-10 pb-5 text-4">
					<h1 className="text-2">{data.title}</h1>
					<p>{data.description}</p>
					<div className="flex gap-5 pt-5">
						<p className="text-sm">Code: {data.code}</p>
						<p className="text-sm">Level: {data.level}</p>
						<p className="text-sm">Points: {data.points}</p>
					</div>
					<hr className="border-2 rounded mt-5" />
				</div>
				<div className="container mx-auto text-4">
					<h1 className="text-2">Lecturers</h1>
					<div className="grid grid-cols-4 gap-5 pb-10">{lecturerCards}</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="dark:bg-bg-dark-alt bg-bg-light-alt text-white">
				<div className="container mx-auto pt-10 pb-5 text-4">
					<h1 className="text-2 mx-auto flex items-center justify-center">
						<span class="loading loading-spinner w-20 my-10 gap-2"></span>
						Loading...
					</h1>
				</div>
			</div>
		);
	}
};

export default Show;
