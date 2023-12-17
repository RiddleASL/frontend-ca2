import * as r from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Loading from '../../components/Loading';

const Show = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const API = "https://college-api.vercel.app/api/enrolments";

    const [data, setData] = r.useState({});

    r.useEffect(() => {
        if (token == null) {
            return navigate('/login');
        }

        axios.get(`${API}/${id}`, {headers: {Authorization: `Bearer ${token}`}})
        .then(res => {
            console.log(res.data.data);
            setData(res.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    const handleConfirm = () => {
        navigate(`/enrollments/delete/${id}`)
    }

    if(Object.keys(data).length > 0) {
        return(
            <div className="bg-auto">
                <div className="container mx-auto">
                    <div className="flex gap-10 pb-5">
						<button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-outline btn-error"> Delete </button>
                        <Link as="button" to={`/enrollments/edit/${id}`} className="btn btn-outline btn-warning"> Edit </Link>
					</div>
                    <div className='flex gap-2 text-2 pb-2'>
                        <h2>Enrollment: {data.id}</h2>
                        <div className='border-2 rounded mx-3'/>
                        <h2>{data.date} , {data.time}</h2>
                    </div>
                    <hr className='border-2 rounded mb-2'/>
                    <ul className='text-4'>
                        <li><Link to={`/courses/${data.course.id}`}>Course : {data.course.title}</Link></li>
                        <li><Link to={`/lecturers/${data.lecturer.id}`}>Lecturer : {data.lecturer.name}</Link></li>
                        <li>Status : {data.status}</li>
                    </ul>
                </div>

                <dialog id="my_modal_3" className="modal">
					<div className="modal-box">
						<h3 className="font-bold text-lg">You are about to delete Enrollment {data.id}</h3>
						<p className="py-4">Are you sure?</p>
						<form method="dialog">
							<div className="flex gap-10">
								<button className="btn btn-outline btn-success" onClick={handleConfirm}>Yes</button>
								<button className="btn btn-outline btn-error">no</button>
							</div>
						</form>
					</div>
				</dialog>
            </div>
        )
    } else {
        return(
            <Loading />
        )
    }
}

export default Show;