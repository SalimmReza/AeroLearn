import { createBrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Blog from "../Header/Pages/Blog";
import Course from "../Header/Pages/Course";
import Courses from "../Header/Pages/Courses";
import Home from "../Header/Pages/Home";
import Login from "../Header/Pages/Login";
import Register from "../Header/Pages/Register";
import Main from "../layout/Main";
import CheckOut from "../shared/CheckOut";
import Congratulation from "../shared/Congratulation";
import CourseDetails from "../shared/CourseDetails";


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
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)

            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)

            },
            {
                path: '/congo',
                element: <Congratulation></Congratulation>,


            },
            {
                path: '/register',
                element: <Register></Register>


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