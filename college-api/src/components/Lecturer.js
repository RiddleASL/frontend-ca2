import { Link } from "react-router-dom";

const Lecturer = (props) => {
	return (
		<Link to={'/'}>
			<div className="card bg-base-100 shadow-xl hover:bg-slate-600">
				<div className="card-body">
					<h2 className="card-title mx-auto">{props.lecturer.name}</h2>
					<div className="avatar mx-auto">
						<div className="rounded-full">
							<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Lecturer;
