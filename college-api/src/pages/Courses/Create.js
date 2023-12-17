import * as r from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const API_URL = "https://college-api.vercel.app/api/courses"

    r.useEffect(() => {
        if (token == null) {
            return navigate("/login")
        }
    }, [])

    //form states
    const [title, setTitle] = r.useState("")
    const [code, setCode] = r.useState("")
    const [level, setLevel] = r.useState("")
    const [points, setPoints] = r.useState("")
    const [description, setDescription] = r.useState("")
    const [errors, setErrors] = r.useState([])

    //handles
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleCode = (e) => {
        setCode(e.target.value)
    }
    const handleLevel = (e) => {
        setLevel(e.target.value)
    }
    const handlePoints = (e) => {
        setPoints(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            title: title,
            code: code,
            level: level,
            points: points,
            description: description
        }

        axios.post(API_URL, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data)
            navigate("/courses")
        }).catch((err) => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div className="bg-auto">
            <div className="container mx-auto">
                <div className="grid grid-cols-5 gap-5">
                    <div className="col-span-5">
                        <div className="card shadow-xl bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Create Course</h2>
                                <form>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Title</span>
                                            {errors.title && <span className="text-sm text-error">{errors.title[0]}</span>}
                                        </label>
                                        <input type="text" placeholder="Title" onChange={handleTitle} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Code</span>
                                            {errors.code && <span className="text-sm text-error">{errors.code[0]}</span>}
                                        </label>
                                        <input type="text" placeholder="Code" onChange={handleCode} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Level</span>
                                            {errors.level && <span className="text-sm text-error">{errors.level[0]}</span>}
                                        </label>
                                        <input type="text" placeholder="Level" onChange={handleLevel} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Points</span>
                                            {errors.points && <span className="text-sm text-error">{errors.points[0]}</span>}
                                        </label>
                                        <input type="text" placeholder="Points" onChange={handlePoints} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                            {errors.description && <span className="text-sm text-error">{errors.description[0]}</span>}
                                        </label>
                                        <textarea placeholder="Description" onChange={handleDescription} className="textarea h-24 textarea-bordered"></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input type="submit" value="Create" onClick={handleSubmit} className="btn btn-primary" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create