import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar';
import LeftCourse from '../Header/Pages/LeftCourse';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet>

            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;