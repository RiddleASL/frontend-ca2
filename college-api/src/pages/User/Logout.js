import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as r from 'react'

const Logout = () => {
    const API_URL = "https://college-api.vercel.app/api/logout"
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    r.useEffect(() => {
        if(token == null){
            return navigate("/login");
        }

        axios.get(API_URL, {headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}).then((res) => {
            console.log(res);
            localStorage.removeItem("token");
            navigate("/");
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className='text-5xl text-text-dark dark:text-text-light'>
                    {(token == null) ? navigate('/') : "Logging out..." }
                </div>
            </div>
        </>
    );
};

export default Logout;