import React, { useState } from 'react';
import { useForm,  } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from './SocialLogin';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import tuitor from '../../assets/9.png'
import student from '../../assets/10.png'
import loginImg from '../../assets/login2.png'
import Logo from '../../Components/Logo/Logo';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
      const [role, setRole] = useState("student");


    const handleRegistration = (data) => {

        const profileImg = data.photo[0];

        registerUser(data.email, data.password)
            .then(() => {

                // 1. store the image in form data
                const formData = new FormData();
                formData.append('image', profileImg);

                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`


                axios.post(image_API_URL, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;

                        // create user in the database
                        const userInfo = {
                            email: data.email,
                            displayName: data.name,
                            photoURL: photoURL,
                            role: role,
                        }
                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user created in the database');
                                }
                            })
                        // update user profile to firebase
                        const userProfile = {
                            displayName: data.name,
                            photoURL: photoURL
                        }
                        updateUserProfile(userProfile)
                            .then(() => {
                                // console.log('user profile updated done.')
                                navigate(location.state || '/');
                            })
                            .catch(error => console.log(error))
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    const password = watch("password");

    return (
         <div className='grid grid-cols-1 md:grid-cols-5 place-items-center min-h-screen'>
            <div className="col-span-2 p-10 animate-[float_3s_ease-in-out_infinite]">
                <img src={loginImg} alt="login img" />
            </div>
              <div className="card bg-base-100 w-full mx-auto shrink-0 shadow-2xl shadow-secondary col-span-3">
            <Logo className='mx-auto' ></Logo>         
            <p className='text-center'>Please Register</p>
            <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
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


               <div className='grid grid-cols-2 gap-3'>
                         {/* name field */}
                   <div className='flex flex-col'>
                     <label className="label text-black font-semibold">Name <span className='text-red-600'>*</span></label>
                    <input type="text"
                        {...register('name', { required: true })}
                        className="input"
                        placeholder="Your Name" />
                    {errors.name?.type === 'required' && <p className='text-red-500'>Name is required.</p>}
                   </div>

                    {/* photo image field */}
                   <div className='flex flex-col'>
                     <label className="label text-black font-semibold">Photo</label>

                    <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Your Photo" />

                    {errors.name?.type === 'required' && <p className='text-red-500'>Photo is required.</p>}
                   </div>

                    {/* email field */}
                   <div className='flex flex-col'>
                     <label className="label text-black font-semibold">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is required.</p>}
                   </div>

                       {/* Number field */}
                   <div className='flex flex-col'>
                     <label className="label text-black font-semibold">Phone</label>
                    <input type="number" {...register('phone', { required:'' })} className="input" placeholder="+8801*********" />
                    {errors.phone?.type === 'required' && <p className='text-red-500'>Phone is required.</p>}
                   </div>

                    {/* password */}
                   <div className='flex flex-col'>
                     <label className="label text-black font-semibold">Password</label>
                    <input type="password" {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                    })} className="input" placeholder="Password" />                 
                       {
                        errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>
                            Password must be 6 characters or longer
                        </p>
                    }
                    {
                        errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
                    }
                   </div>

                   {/* Re Passeord  */}
                    <div className='flex flex-col'>
                        <label className="label text-black font-semibold">Re-Password</label>
                    <input type="password" {...register('repassword', {
                        required: "Please re-enter password",
                        validate: (value) => value === password || "Passwords do not match",
                    })} className="input" placeholder="Re Enter Password" />
                      {
                        errors.password? <p className='text-red-500'>Password dont match.</p> :''
                    }
                  
                    
                    </div>

               </div>

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <p>Already have an account <Link
                    state={location.state}
                    className='text-blue-400 underline'
                    to="/login">Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
        </div>
    );
};

export default Register;






// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useLocation, useNavigate } from 'react-router';
// import SocialLogin from './SocialLogin';
// import axios from 'axios';
// import useAuth from '../../Hooks/useAuth';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import tuitor from '../../assets/9.png'
// import student from '../../assets/10.png'
// import loginImg from '../../assets/login2.png'
// 
// const Register = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const { registerUser, updateUserProfile } = useAuth();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const axiosSecure = useAxiosSecure();
//       const [role, setRole] = useState("student");
// 
// 
//     const handleRegistration = (data) => {
// 
//         const profileImg = data.photo[0];
// 
//         registerUser(data.email, data.password)
//             .then(() => {
// 
//                 // 1. store the image in form data
//                 const formData = new FormData();
//                 formData.append('image', profileImg);
// 
//                 const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`
// 
// 
//                 axios.post(image_API_URL, formData)
//                     .then(res => {
//                         const photoURL = res.data.data.url;
// 
//                         // create user in the database
//                         const userInfo = {
//                             email: data.email,
//                             displayName: data.name,
//                             photoURL: photoURL
//                         }
//                         axiosSecure.post('/users', userInfo)
//                             .then(res => {
//                                 if (res.data.insertedId) {
//                                     console.log('user created in the database');
//                                 }
//                             })
//                         // update user profile to firebase
//                         const userProfile = {
//                             displayName: data.name,
//                             photoURL: photoURL
//                         }
//                         updateUserProfile(userProfile)
//                             .then(() => {
//                                 // console.log('user profile updated done.')
//                                 navigate(location.state || '/');
//                             })
//                             .catch(error => console.log(error))
//                     })
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }
// 
//     return (
//          <div className='grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen'>
//             <div className="col-span-1 p-10 animate-[float_3s_ease-in-out_infinite]">
//                 <img src={loginImg} alt="login img" />
//             </div>
//               <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2x shadow-secondary">
//             <h3 className="text-3xl text-center">Welcome to E-TuitionBD</h3>
//             <p className='text-center'>Please Register</p>
//             <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
//                  <div className='flex justify-around font-bold'>
//                     <div className='flex gap-2 place-items-center'>
//                         <img className='h-13 w-13 rounded-full' src={tuitor} alt="" />
//                         <input 
//                         type="checkbox" 
//                         checked={role === "tutor"}
//                         onChange={() => setRole("tutor")}
//                         className="checkbox checkbox-primary" 
//                         />
//                         <p>Tutor</p>
//                     </div>
//     
//                     <div className='flex gap-2 place-items-center'>
//                         <img className='h-13 w-13 rounded-full' src={student} alt="" />
//                         <input 
//                         type="checkbox"
//                         checked={role === "student"}
//                         onChange={() => setRole("student")}
//                         className="checkbox checkbox-primary" 
//                         />
//                         <p>Student</p>
//                     </div>
//                     </div>
//                 <fieldset className="fieldset">
//                     {/* name field */}
//                     <label className="label">Name</label>
//                     <input type="text"
//                         {...register('name', { required: true })}
//                         className="input"
//                         placeholder="Your Name" />
//                     {errors.name?.type === 'required' && <p className='text-red-500'>Name is required.</p>}
// 
//                     {/* photo image field */}
//                     <label className="label">Photo</label>
// 
//                     <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Your Photo" />
// 
//                     {errors.name?.type === 'required' && <p className='text-red-500'>Photo is required.</p>}
// 
//                     {/* email field */}
//                     <label className="label">Email</label>
//                     <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
//                     {errors.email?.type === 'required' && <p className='text-red-500'>Email is required.</p>}
// 
//                     {/* password */}
//                     <label className="label">Password</label>
//                     <input type="password" {...register('password', {
//                         required: true,
//                         minLength: 6,
//                         pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
//                     })} className="input" placeholder="Password" />
//                     {
//                         errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>
//                     }
//                     {
//                         errors.password?.type === 'minLength' && <p className='text-red-500'>
//                             Password must be 6 characters or longer
//                         </p>
//                     }
//                     {
//                         errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
//                     }
// 
//                     <div><a className="link link-hover">Forgot password?</a></div>
//                     <button className="btn btn-neutral mt-4">Register</button>
//                 </fieldset>
//                 <p>Already have an account <Link
//                     state={location.state}
//                     className='text-blue-400 underline'
//                     to="/login">Login</Link></p>
//             </form>
//             <SocialLogin></SocialLogin>
//         </div>
//         </div>
//     );
// };
// 
// export default Register;