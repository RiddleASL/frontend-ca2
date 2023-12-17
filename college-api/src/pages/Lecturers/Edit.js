import * as r from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const Edit = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const token = localStorage.getItem("token")
    const [lecturer, setLecturer] = r.useState({})
    const API_URL = "https://college-api.vercel.app/api/lecturers"

    r.useEffect(() => {
        if (token == null) {
            return navigate("/login")
        }

        axios.get(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                console.log(res.data.data)
                setLecturer(res.data.data)

                setName(res.data.data.name)
                setAddress(res.data.data.address)
                setPhone(res.data.data.phone)
                setEmail(res.data.data.email)
            }).catch(err =>{
                console.log(err)
            })
    }, [])

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

        axios.put(`${API_URL}/${id}`, data, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
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
                                <h2 className="card-title">Edit Lecturer</h2>
                                <form>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                            {errors.name && <span className="text-sm text-error">{errors.name[0]}</span>}
                                        </label>
                                        <input type="text" placeholder="Name" onChange={handleName} className="input input-bordered" value={name}/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                            {errors.address && <span className="text-sm text-error">{errors.address[0]}</span>}
                                        </label>
                                        <input type="text" placeholder="Address" onChange={handleAddress} className="input input-bordered" value={address} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                            {errors.phone && <span className="text-sm text-error">{errors.phone[0]}</span>}
                                        </label>
                                        <input type="text" placeholder="Phone" onChange={handlePhone} className="input input-bordered" value={phone} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                            {errors.email && <span className="text-sm text-error">{errors.email[0]}</span>}
                                        </label>
                                        <input type="text" placeholder="Email" onChange={handleEmail} className="input input-bordered" value={email}/>
                                    </div>
                                    
                                    <div className="form-control mt-6">
                                        <input type="submit" value="Confirm" onClick={handleSubmit} className="btn btn-warning" />
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

export default Edit;