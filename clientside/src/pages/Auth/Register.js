import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const resp = await axios.post(`/api/v1/auth/register`, { name, email, password, phone, address, answer });
            if (resp.data.success) {
                toast.success(resp.data.message);
                navigate("/login")
            } else {
                toast.success(resp.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    }
    return (
        <Layout title={"Register - Kirana Store"}>
            <div className='registration'>
                <h1>Register Page</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter you name' value={name} required />
                    </div>
                    <div className="mb-3">
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter you email' value={email} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter you password' value={password} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter you phone' value={phone} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter you address' value={address} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='What is your best friend name' value={answer} required />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </Layout>
    )
}

export default Register