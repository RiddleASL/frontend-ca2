import { Link } from "react-router-dom";

const CourseCard = (props) => {
	return (
		<Link to={`/courses/${props.course.id}`} className="card bg-base-100 shadow-xl">
			<div className="card-body">
				<div className="card-title text-2 mb-5">{props.course.title}</div>
				<div className="flex justify-around text-3">
					<div>
						<p className="text-sm">{props.course.description}</p>
					</div>
					<div className="border-2 mx-5" />
					<div className="w-1/2">
						<ul>
							<li>
								<p className="text-sm">Code: {props.course.code}</p>
							</li>
							<li>
								<p className="text-sm">Level: {props.course.level}</p>
							</li>
							<li>
								<p className="text-sm">Points: {props.course.points}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CourseCard;
