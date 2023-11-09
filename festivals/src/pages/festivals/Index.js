import * as r from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Index = () =>{
    const API_URL = "https://festivals-api.vercel.app/api/festivals"
    const [festivals, setFestivals] = r.useState([])

    r.useEffect(()=>{
        axios.get(API_URL).then((response)=>{
            console.log(response.data);
            setFestivals(response.data)
        })
    }, [])

    if(festivals.length === 0) return <h3>there are no festivals</h3>
    
    const festivalsList = festivals.map((festival, i) =>{
        return(
            <div key={i}>
                <p><b>Title : </b> <Link to={`/show/${festival._id}`}>{festival.title}</Link></p>
                <p><b>Description : </b> {festival.description}</p>
                <p><b>City : </b> {festival.city}</p>
                <hr/>
            </div>
        )
    })

    return(
        <>
            <h2>All Festivals</h2>
            <hr/>
            {festivalsList}
        </>
    )
}

export default Index