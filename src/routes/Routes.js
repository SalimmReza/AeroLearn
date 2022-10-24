import { createBrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Blog from "../Header/Pages/Blog";
import Course from "../Header/Pages/Course";
import Courses from "../Header/Pages/Courses";
import Home from "../Header/Pages/Home";
import Login from "../Header/Pages/Login";
import Main from "../layout/Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]

    },

    {
        path: '/footer',
        element: <Footer></Footer>
    }


])