import * as r from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const Index = () => {
    const API_URL = "https://college-api.vercel.app/api/enrolments";
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const [enrollments, setEnrollments] = r.useState([]);
    const [search, setSearch] = r.useState('');
    const [filtered, setFiltered] = r.useState([]);

    r.useEffect(() => {
        if (token == null) {
			return navigate("/login");
		}

        axios.get(API_URL, {headers: {Authorization: `Bearer ${token}`}}).then((res) => {
            console.log(res.data.data);
            setFiltered(res.data.data);
            setEnrollments(res.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setFiltered(enrollments.filter((enrolment) => {
            return enrolment.course.title.toLowerCase().includes(search.toLowerCase()) || enrolment.lecturer.name.toLowerCase().includes(search.toLowerCase()) || enrolment.status.toLowerCase().includes(search.toLowerCase())
        }))
    }

    const enrolmentCards = filtered.map((enrolment, i) => {
        return(
            <Link to={`/enrollments/${enrolment.id}`} key={i} className='flex rlink-hover justify-between border-2 rounded p-2 mb-2'>
                <div className='text-4'>{enrolment.course.title}</div>
                <div className='text-4'>{enrolment.lecturer.name}</div>
                <div className='text-4'>{enrolment.status}</div>
            </Link>
        )
    })

    if(enrollments.length > 0){
        return(
            <div className="bg-auto">
                <div className="container mx-auto">
                <div className="gap-5 flex px-10 mx-10">
						<button
							className="btn btn-primary font-normal text-3 p-2 px-5 btn-primary-auto border-2 mb-5"
							onClick={() => navigate("/enrollments/create_c/")}
						>
							Create Enrolment
						</button>
						<input
							type="text"
							className="border-2 px-3 mx-10 rounded dark:border-text-light border-text-dark mb-5 w-full"
							placeholder="Search..."
							onChange={handleSearch}
						/>
					</div>
                    <h2 className='text-2'>Enrollments</h2>
                    <hr className='border-2 rounded mb-2'/>
    
                    <div className='grid grid-cols-2 gap-5'>
                        {enrolmentCards}    
                    </div>
                </div>
            </div>
        )
    } else {
        return <Loading />
    }
}

export default Index;