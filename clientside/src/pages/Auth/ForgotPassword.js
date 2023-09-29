import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [newPassword, setPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const resp = await axios.post(`/api/v1/auth/forgot-password`, { email, newPassword, answer });
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
        <Layout title={"Reset Password Kirana Store"}>
            <div className='registration'>
                <h1>Reset Password</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter you email' value={email} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter you best friend name' value={answer} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter you password' value={newPassword} required />
                    </div>

                    <button type="submit" className="btn btn-primary">Reset</button>
                </form>
            </div>
        </Layout>
    )
}

export default ForgotPassword