import * as r from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

//components
import Lecturer from "../../components/Lecturer";
import Loading from "../../components/Loading";

const Show = () => {
	const { id } = useParams();
	const token = localStorage.getItem("token");
	const [data, setData] = r.useState({});
	const [enrolments, setEnrolments] = r.useState([]);
	const [lecturers, setLecturers] = r.useState([]);
	const navigate = useNavigate();

	r.useEffect(() => {
		if (token == null) {
			return navigate("/login");
		}

		axios
			.get(`https://college-api.vercel.app/api/courses/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				console.log(response.data);
				setData(response.data.data);
				if (response.data.data.enrolments) {
					setEnrolments(response.data.data.enrolments);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const lecturerCards = enrolments.map((enrolment, i) => {
		return <Lecturer key={i} lecturer={enrolment.lecturer} />;
	});

	const handleConfirm = () => {
		navigate(`/courses/delete/${id}`)
	}

	const handleEnroll = () => {
		navigate(`/enrollments/create_l/${id}`)
	}

	if (Object.keys(data).length > 0) {
		return (
			<div className="bg-auto">
				<div className="container mx-auto pb-5 text-4">
					<div className="flex gap-10 pb-5">
						<button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-outline btn-error"> Delete </button>
						<Link as="button" to={`/courses/edit/${id}`} className="btn btn-outline btn-warning"> Edit </Link>
					</div>
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
					<div className="flex items-center gap-5">
						<h1 className="text-2">Lecturers</h1>
						<button className="btn btn-outline btn-primary" onClick={handleEnroll}>Enroll Lecturer</button>
					</div>
					<div className="grid grid-cols-4 gap-5 pb-10">{lecturerCards.length > 0 ? lecturerCards : "No lecturers enrolled"}</div>
				</div>
				
				<dialog id="my_modal_3" className="modal">
					<div className="modal-box">
						<h3 className="font-bold text-lg">You are about to delete "{data.title}"</h3>
						<p className="py-4">{data.enrolments.length > 0 ? `There are ${data.enrolments.length} enrollments.` : ""} Are you sure?</p>
						<form method="dialog">
							<div className="flex gap-10">
								<button className="btn btn-outline btn-success" onClick={handleConfirm}>Yes</button>
								<button className="btn btn-outline btn-error">no</button>
							</div>
						</form>
					</div>
				</dialog>
			</div>
		);
	} else {
		return (
			<Loading />
		);
	}
};

export default Show;
