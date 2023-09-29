import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { useAuth } from '../../context/auth';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const resp = await axios.post(`/api/v1/auth/login`, { email, password });
            if (resp.data.success) {
                toast.success(resp.data.message);
                setAuth({
                    ...auth,
                    user: resp.data.user,
                    token: resp.data.token
                })
                localStorage.setItem('auth', JSON.stringify(resp.data));
                navigate(location.state || "/")
            } else {
                toast.success(resp.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    }

    return (
        <Layout>
            <div className='registration'>
                <h1>Login Page</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter you email' value={email} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter you password' value={password} required />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <div className='mb-3'>
                        <button type="submit" onClick={() => { navigate('/forgot-password') }} className="btn btn-primary">Forgot Password</button>

                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </Layout>
    )
}

export default Login