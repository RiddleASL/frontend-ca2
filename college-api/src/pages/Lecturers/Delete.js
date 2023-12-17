import axios from "axios";
import * as r from "react";
import { useNavigate, useParams } from "react-router-dom";

const Delete = () => {
	const { id } = useParams();
	const API_URL = "https://college-api.vercel.app/api/lecturers";
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

    const [lecturer, setLecturer] = r.useState({});

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
                    axios.delete(`https://college-api.vercel.app/api/enrolments/${enrolment.id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then((res) => {
                        console.log(res.data)
                    }).catch((err) => {
                        console.log(err)
                    })
                })
				setLecturer(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
    
            axios.delete(`${API_URL}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                console.log(res.data)
                navigate("/lecturers")
            }).catch((err) => {
                console.log(err)
            })
	}, []);

    r.useEffect(() => {

        
    }, [lecturer])
};

export default Delete;
