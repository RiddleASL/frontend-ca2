import * as r from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"

const Show = () =>{
    const API_URL = 'https://festivals-api.vercel.app/api/festivals'
    const {id} = useParams();
    const [festival, setFestival] = r.useState(null);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhcm9uQGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6ImFhcm9uIiwiX2lkIjoiNjU0Y2QwYWEwYTM2NmEwMDA3N2NkYjNlIiwiaWF0IjoxNjk5NTMzMDAyfQ.tBkKDybQS5xcTYiWPIhh0wpWTYlGGCbRlZM5JxRp7tY"

    r.useEffect(()=>{
        axios.get(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            console.log(response);
            setFestival(response.data)
        })
    },[])

    if(!festival) return <h2>Festival Not Found</h2>;

    return(
        <>
            <h1>Show</h1>
            <hr/>
            <p><b>Title : </b>{festival.title}</p>
            <p><b>Description : </b> {festival.description}</p>
            <p><b>City : </b> {festival.city}</p>
            <hr/>
        </>
    )
}

export default Show