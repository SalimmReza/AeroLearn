import React, { createContext, useContext, useState } from 'react';
import { Form, Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

const NavBar = () => {
    const [theme, setTheme] = useState("dark");
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


    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (
        <div className='shadow-2xl '>
            <div className="navbar bg-gray-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <NavLink className='mr-7 hover:text-blue-700 text-lg font-semibold' to='/courses'>Courses</NavLink>
                            <Link className='mr-7 hover:text-blue-700 text-lg font-semibold' to=''>FAQ</Link>
                            <NavLink className='mr-7 hover:text-blue-700 text-lg font-semibold' to='/blog'>Blog</NavLink>
                            <NavLink className='mr-7 hover:text-blue-700 text-lg font-semibold' to='/login'>Login</NavLink>

                            <div className=''>
                                <ThemeContext.Provider value={{ theme, toggleTheme }}>
                                    <div className="App" id={theme}>
                                        <div className="switch flex mr-1">
                                            <label className='mr-1'> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                                            <ReactSwitch className='' onChange={toggleTheme} checked={theme === "dark"} />
                                        </div>

                                    </div>

                                </ThemeContext.Provider>
                            </div>


                        </ul>
                    </div>
                    <div className="w-[30px] rounded-xl hidden md:block">
                        <img src="https://cdn-icons-png.flaticon.com/512/1358/1358770.png" alt=''></img>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Aero-Learn</Link>
                </div>
                <div className="navbar-center hidden lg:flex" >
                    <div className="navbar-end">

                        <NavLink className='mr-7 hover:text-blue-700 text-lg font-semibold' to='/courses'>Courses</NavLink>
                        <NavLink className='mr-7 hover:text-blue-700 text-lg font-semibold' to='/faq'>FAQ</NavLink>
                        <NavLink className='mr-7 hover:text-blue-700 text-lg font-semibold' to='/blog'>Blog</NavLink>
                        <NavLink className='mr-7 hover:text-blue-700 text-lg font-semibold' to='/login'>Login</NavLink>

                        {/* jfbjfgbfjgb */}


                    </div>

                </div>
                <div className="navbar-end ">

                    <div className='hidden lg:block'>
                        <ThemeContext.Provider value={{ theme, toggleTheme }}>
                            <div className="App" id={theme}>
                                <div className="switch flex mr-1">
                                    <label className='mr-1'> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                                    <ReactSwitch className='' onChange={toggleTheme} checked={theme === "dark"} />
                                </div>

                            </div>

                        </ThemeContext.Provider>
                    </div>
                    {
                        user?.photoURL ?
                            <div className="wrapper">
                                <div className="icon facebook">
                                    <div className="tooltip">
                                        {user.displayName}
                                    </div>
                                    <span><img src={user.photoURL} alt="" /></span>
                                </div>
                            </div>
                            :
                            <div>
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>

                            </div>


                    }

                    {
                        user?.uid ?
                            <>

                                <button className='btn btn-ghost normal-case text-sm'
                                    onClick={handleLogOut}
                                >Logout</button>
                            </>
                            :
                            <>

                            </>
                    }
                </div>
            </div >
        </div >
    );
};

export default NavBar;