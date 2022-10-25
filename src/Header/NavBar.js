import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogOut = () => {
        logOut().then(() => {
            navigate(from, { replace: true });

        }).catch((error) => {

        });
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <div className="w-[30px] rounded-xl">
                    <img src="https://cdn-icons-png.flaticon.com/512/1358/1358770.png" alt=''></img>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/register'>Register</Link></li>
                    <li tabIndex={0}>
                        <a>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>{user?.displayName}</a></li>
                    <li><a>{user?.email}</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <Link to='/courses'>Courses</Link>
                <Link to=''>FAQ</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/login'>Login</Link>

                {
                    user?.photoURL ?
                        <div className='icon img'>
                            <div className='tooltip'>Salim</div>
                            <img src={user.photoURL} alt="" />
                        </div>
                        :
                        <div>
                            ""
                        </div>


                }

                {
                    user?.uid ?
                        <>

                            <button className='btn btn-ghost normal-case text-xl'
                                onClick={handleLogOut}
                            >Logout</button>
                        </>
                        :
                        <>

                        </>
                }
            </div>
        </div >
    );
};

export default NavBar;