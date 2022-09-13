import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import google from '../../../src/assets/icons/social/google.png'
import Loading from '../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    let signInErrorMessage;
    if (error || googleError || updateProfileError) {
        signInErrorMessage = <p className='pb-4 text-lg text-red-500'>{error?.message || googleError?.message || updateProfileError?.message}</p>
    }


    if (loading || googleLoading || updating) {
        return <Loading></Loading>;
    }

    // if (googleUser) {
    //     console.log(googleUser);
        
    // }

    const onSubmit = async (data) => {
        
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name});
        console.log('update done');
        navigate('/Appointment');
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input type="text"
                                placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'

                                    }

                                })}

                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}



                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input type="email"
                                placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'

                                    },
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Please Provide a valid Email'
                                    }
                                })}

                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input type="password"
                                placeholder="Password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'

                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Password Must be at least 8 characters' // JS only: <p>error message</p> TS only support string
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: 'Password Must be between 8-20 characters' // JS only: <p>error message</p> TS only support string
                                    },
                                    pattern: {
                                        value: /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{8,20}$/,
                                        message: 'Please Provide a valid Password'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'maxLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                            {/* <button className='btn-sm text-[10px] text-left  mt-[-20px]'>Forgot Password?</button> */}
                        </div>
                        <input />
                        {
                            signInErrorMessage
                        }
                        <input className="btn btn-accent w-full max-w-xs text-white" value="Sign Up" type="submit" />
                    </form>

                    <p className='text-xs text-center' >Already Have an Account? <Link className='text-secondary ' to='/login'>Please Login</Link> </p>

                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline hover:text-white hover:btn-accent">
                        <img className='w-8 mr-3  ' src={google} alt="" />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;