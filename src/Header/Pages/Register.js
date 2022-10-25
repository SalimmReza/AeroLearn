import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {
    const [error, setError] = useState("")
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;

        const name = form.name.value;
        const photoUrL = form.photoUrL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                form.reset();
                setError('');
                handleUpdateUser(name, photoUrL);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });

        const handleUpdateUser = (name, photoUrL) => {
            const profile = {
                displayName: name,
                photoURL: photoUrL
            }

            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.log(error))
        }

    }
    return (
        <form onSubmit={handleRegister}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    name="name"
                                    placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"
                                    name="photoUrL"
                                    placeholder="photoUrL" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p>Already have Account <Link to='/login'
                                className='text-blue-700'
                            >Login!</Link> </p>
                            <p className='text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default Register;