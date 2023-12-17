import * as r from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../components/Loading'

const Show = () => {
    const { id } = useParams()
    const API = "https://college-api.vercel.app/api/lecturers"
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const [data, setData] = r.useState({})
    const [enrolments, setEnrolments] = r.useState([])

    r.useEffect(() => {
        if (token == null) {
            return navigate('/login')
        }

        axios.get(`${API}/${id}`, {headers: {Authorization: `Bearer ${token}`}})
        .then(res => {
            console.log(res.data.data)
            setData(res.data.data)
            if (res.data.data.enrolments) {
                setEnrolments(res.data.data.enrolments)
            }
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const handleConfirm = (e) => {
        navigate(`/lecturers/delete/${id}`)
    }

    const handleEnroll = (e) => {
        navigate(`/enrollments/create_a/${id}`)
    }

    const enrolmentCards = enrolments.map((enrolment, i) => {
        return(
            <Link to={`/courses/${enrolment.course.id}`} key={i} className='flex justify-between border-2 border-auto rounded p-2 mb-2 rlink-hover'>
                <div className='text-4'>{enrolment.course.title}</div>
                <div className='text-4'>{enrolment.date} | {enrolment.time}</div>
                <div className='text-4'>{enrolment.status}</div>
            </Link>
        )
        
    })

    
    if (Object.keys(data).length > 0) {
    return(
        <>
            <div className='bg-auto'>
                <div className='container mx-auto'>
                    <div className="flex gap-10 pb-5">
						<button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-outline btn-error"> Delete </button>
						<Link as="button" to={`/lecturers/edit/${id}`} className="btn btn-outline btn-warning"> Edit </Link>
					</div>
                    <h2 className=' text-2'>{data.name}</h2>
                    <hr className='border-2 rounded mb-2'/>
                    <ul>
                        <li className='text-4'>Email: {data.email}</li>
                        <li className='text-4'>Phone: {data.phone}</li>
                        <li className='text-4'>Address: {data.address}</li>
                    </ul>

                    {/* Enrollments */}
                    <div className=' border-b-2 border-rounded border-auto w-fit pe-10 mb-5 flex gap-10 items-center'>
                        <div className='pt-5 mt-3 text-2'>Enrollments</div>
                        <div className='flex gap-10 pt-5 mt-3'>
                            <button onClick={handleEnroll} className='btn btn-outline btn-primary'>Enroll in Course</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        {enrolments.length > 0 ? enrolmentCards : <div className='text-4'>No Enrollments</div>}
                    </div>
                </div>

                <dialog id="my_modal_3" className="modal">
					<div className="modal-box">
						<h3 className="font-bold text-lg">You are about to delete "{data.name}"</h3>
						<p className="py-4">{data.enrolments.length > 0 ? `${data.name} is enrolled in ${data.enrolments.length} courses. ` : ""}Are you sure?</p>
						<form method="dialog">
							<div className="flex gap-10">
								<button className="btn btn-outline btn-success" onClick={handleConfirm}>Yes</button>
								<button className="btn btn-outline btn-error">no</button>
							</div>
						</form>
					</div>
				</dialog>
            </div>
        </>
    )} else {
        return <Loading />
    }
}

export default Show
