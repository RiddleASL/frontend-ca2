import * as r from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Delete = () => {
    const { id } = useParams();
    const API_URL = "https://college-api.vercel.app/api/enrolments";
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    r.useEffect(() => {
        if (token == null) {
            return navigate("/login");
        }

        axios
            .delete(`${API_URL}/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res.data);
                navigate("/enrollments");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
}

export default Delete;