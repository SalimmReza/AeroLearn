import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.init';
const auth = getAuth(app);

const Login = () => {
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { loginIn, googleSignIn } = useContext(AuthContext);

    const provider = new GoogleAuthProvider();
    const GitHubprovider = new GithubAuthProvider();

    const from = location.state?.from?.pathname || '/';



    const handleGoogleClick = () => {
        googleSignIn(provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setError('');
                navigate(from, { replace: true });

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setError(errorMessage);

            });
    }

    const handleGitSignIn = () => {
        signInWithPopup(auth, GitHubprovider)
            .then(result => {
                const user = result.user;
                setError('');
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GithubAuthProvider.credentialFromError(error);
                setError(errorMessage);

            });

    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        loginIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset();
                setError('');
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);

            });



    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>

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
                            <p>Don't have Account <Link to='/register'
                                className='text-blue-700'
                            >Register!</Link> </p>
                            <p className='text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login Now</button>
                            </div>
                            <div className="form-control mt-1">
                                <button
                                    onClick={handleGoogleClick}
                                    className="btn btn-primary gap-4"> <FaGoogle></FaGoogle>Google Login </button>
                            </div>
                            <div className="form-control mt-1">
                                <button onClick={handleGitSignIn}
                                    className="btn btn-primary gap-4"> <FaGithub></FaGithub>Github Login </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;