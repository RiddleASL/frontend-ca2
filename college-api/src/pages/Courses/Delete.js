import axios from "axios";
import * as r from "react";
import { useNavigate, useParams } from "react-router-dom";

const Delete = () => {
	const { id } = useParams();
	const API_URL = "https://college-api.vercel.app/api/courses";
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	r.useEffect(() => {
		if (token == null) {
			return navigate("/login");
		}

		axios
			.get(`${API_URL}/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				console.log(res.data.data);
				res.data.data.enrolments.forEach((enrolment) => {
					console.log(enrolment.id);
					axios
						.delete(`https://college-api.vercel.app/api/enrolments/${enrolment.id}`, {
							headers: { Authorization: `Bearer ${token}` },
						})
						.catch((error) => {
							console.log(error);
						});
				});
			})
			.catch((err) => {
				console.log(err);
			});

			// delete course
			axios
				.delete(`${API_URL}/${id}`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((res) => {
					console.log(res.data);
					navigate("/courses");
				})
				.catch((error) => {
					console.log(error);
				});
	}, []);
};

export default Delete;
