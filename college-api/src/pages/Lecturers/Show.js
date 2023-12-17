import axios from "axios";
import * as r from "react";
import { useParams } from "react-router-dom";

const Show = () => {
	const { id } = useParams();
	const API = "https://college-api.vercel.app/api/lecturers";
	const token = localStorage.getItem("token");

    const [data, setData] = r.useState({})

	r.useEffect(() => {
		axios
			.get(`${API}/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				console.log(response.data);
                setData(response.data.data)
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
        <div className="dark:bg-bg-dark-alt bg-bg-light-alt dark:text-white">
            <div className="container mx-auto py-5">
                <div className="flex">
                    <h2 className="text-2">{data.name}</h2>
                </div>
                <hr className="border-2 rounded my-3"/>
            </div>
        </div>
    );
};

export default Show;
