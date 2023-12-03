import * as r from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Show = () => {
    const { id } = useParams()
    const API = "https://college-api.vercel.app/api/lecturers"

    r.useEffect(() => {
        axios.get(`${API}/${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return(
        <>
        </>
    )
}

export default Show