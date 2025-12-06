import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';
import useAuth from '../../Hooks/useAuth';
import loginImg from '../../assets/login1.png'
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import tuitor from '../../assets/9.png'
import student from '../../assets/10.png'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [role, setRole] = useState("student");



    const handleLogin = (data) => {
        // console.log("Selected Role:", role);
        console.log('form data', data);
        signInUser(data.email, data.password, data.role)
            .then(result => {
                console.log(result.user)
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen'>
        <div className="col-span-1 p-10 animate-[float_3s_ease-in-out_infinite]">
            <img src={loginImg} alt="login img" />
        </div>
          <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl shadow-secondary">
            <h3 className="text-3xl text-center font-extrabold pt-2">Welcome back</h3>
            <p className='text-center'>Please Login</p>
            <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
              <div className='flex justify-around font-bold'>
                <div className='flex gap-2 place-items-center'>
                    <img className='h-13 w-13 rounded-full' src={tuitor} alt="" />
                    <input 
                    type="checkbox" 
                    checked={role === "tutor"}
                    onChange={() => setRole("tutor")}
                    className="checkbox checkbox-primary" 
                    />
                    <p>Tutor</p>
                </div>

                <div className='flex gap-2 place-items-center'>
                    <img className='h-13 w-13 rounded-full' src={student} alt="" />
                    <input 
                    type="checkbox"
                    checked={role === "student"}
                    onChange={() => setRole("student")}
                    className="checkbox checkbox-primary" 
                    />
                    <p>Student</p>
                </div>
                </div>

                <fieldset className="fieldset">
                    {/* email field */}
                    <label className="label font-bold text-black ">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {
                        errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
                    }
                     <label className="label font-bold text-black ">Password</label>
                    <div className='relative'>
                        <input type={show ? "text" : "password"} {...register('password', { required: true, minLength: 6 })}  
                        className={`input input-bordered w-full ${errors.password ? "border-red-500" : ""}`} placeholder="Password" />
                        <span onClick={() => setShow(!show)} className='absolute text-lg right-8 top-[11px] cursor-pointer z-20'>
                            {show ? <FaEye /> : <IoEyeOff />}
                        </span>
                    </div>
                    {/* =============== */}


                    <div><a className="link link-hover hover:text-blue-600">Forgot password?</a></div>
                    <button className="btn btn-primary hover:btn-secondary mt-4"> Login as a {role === "tutor" ? "Tutor" : "Student"}</button>
                </fieldset>
                <p>New to E-TuitoinBD <Link
                    state={location.state}
                    className='text-blue-600 underline'
                    to="/register">Register</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
      </div>
    );
};

export default Login;