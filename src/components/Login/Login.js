import React, { useContext } from 'react';
import loginImg from '../../img/login.jpg'
import google from '../../img/google.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import { GoogleAuthProvider } from "firebase/auth";
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const provider = new GoogleAuthProvider();
const Login = () => {
    const { googleSignIn, logIn, user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')
    const from = location.state?.from?.pathname || '/';
    console.log(user)
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Login Successfully')
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    const handleGoogle = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:w-1/2 lg:text-left">
                    <img className='w-full' src={loginImg} alt="" />
                </div>
                <form onSubmit={handleLogin} className='lg:w-1/2 mb-6'>
                    <h1 className="text-5xl py-7 font-bold">Login now!</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-active">Login</button>
                            </div>
                            <button onClick={handleGoogle} className="btn btn-outline "><img className='h-8 w-8' src={google} alt="" />   <span className='pl-2'>Sign In With Google</span></button>
                            <p className="text-md mt-2 text-center">Not Registered? <u><Link to='/register'>Create An Account</Link></u></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;