import axios from "axios";
import * as r from "react";
import { useNavigate, useParams } from "react-router-dom";

import Lecturer from "../../components/Lecturer";
import Loading from "../../components/Loading";

const Index = () => {
	const API_URL = "https://college-api.vercel.app/api/lecturers";
	const token = localStorage.getItem("token");
    const navigate = useNavigate();

	const [lecturers, setLecturers] = r.useState([]);
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
				setLecturers(res.data.data);
				setFiltered(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
		const filtered = lecturers.filter((lecturer) => {
			return lecturer.name.toLowerCase().includes(e.target.value.toLowerCase());
		})
		setFiltered(filtered);
    }

	const displayLecturers = filtered.map((lecturer) => {
		return <Lecturer key={lecturer.id} lecturer={lecturer} />;
	});

	if (lecturers.length > 0) {
		return (
			<div className="bg-auto pb-5">
				<div className="container mx-auto">
                    <div className="container mx-auto">
					<div className="gap-5 flex px-10 mx-10">
						<button
							className="btn btn-primary font-normal text-3 p-2 px-5 btn-primary-auto border-2 mb-5"
							onClick={() => navigate("/lecturers/create")}
						>
							Create Lecturer
						</button>
						<input
							type="text"
							className="border-2 px-3 mx-10 rounded dark:border-text-light border-text-dark mb-5 w-full"
							placeholder="Search..."
							onChange={handleSearch}
						/>
					</div>
                    </div>
					<div className="grid grid-cols-5 gap-5">{displayLecturers}</div>
				</div>
			</div>
		);
	} else {
        return <Loading />
    }
};

export default Index;
