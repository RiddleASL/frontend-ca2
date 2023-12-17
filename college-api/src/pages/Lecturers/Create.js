import * as r from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const API_URL = "https://college-api.vercel.app/api/lecturers"

    //form states
    const [name, setName] = r.useState("")
    const [address, setAddress] = r.useState("")
    const [phone, setPhone] = r.useState("")
    const [email, setEmail] = r.useState("")
    const [errors, setErrors] = r.useState([])

    //handles
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            name: name,
            address: address,
            phone: phone,
            email: email
        }

        axios.post(API_URL, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data)
            navigate("/lecturers")
        }).catch((err) => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div className="bg-auto">
            <div className="container mx-auto">
                <div className="grid grid-cols-5 gap-5">
                    <div className="col-span-5">
                        <div className="card shadow-xl bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Create Lecturer</h2>
                                <form>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                            {errors.name && <span className="text-sm text-error">{errors.name[0]}</span>}
                                        </label>
                                        <input type="text" placeholder="Name" onChange={handleName} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                            {errors.address && <span className="text-sm text-error">{errors.address[0]}</span>}
                                        </label>
                                        <input type="text" placeholder="Address" onChange={handleAddress} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                            {errors.phone && <span className="text-sm text-error">{errors.phone[0]}</span>}
                                        </label>
                                        <input type="text" placeholder="Phone" onChange={handlePhone} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                            {errors.email && <span className="text-sm text-error">{errors.email[0]}</span>}
                                        </label>
                                        <input type="text" placeholder="Email" onChange={handleEmail} className="input input-bordered" />
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