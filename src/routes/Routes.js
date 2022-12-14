import { createBrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Blog from "../Header/Pages/Blog";
import Course from "../Header/Pages/Course";
import Courses from "../Header/Pages/Courses";
import Faq from "../Header/Pages/Faq";
import Home from "../Header/Pages/Home";
import Login from "../Header/Pages/Login";
import Register from "../Header/Pages/Register";
import Main from "../layout/Main";
import CheckOut from "../shared/CheckOut";
import Congratulation from "../shared/Congratulation";
import CourseDetails from "../shared/CourseDetails";
import Errorpage from "../shared/Errorpage";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://assignment10-server-blue.vercel.app/course'),
            },
            {
                path: '/course',
                element: <Course></Course>,


            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://assignment10-server-blue.vercel.app/course/${params.id}`)

            },




            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment10-server-blue.vercel.app/course/${params.id}`)

            },

            {
                path: '/congo',
                element: <PrivateRoute><Congratulation></Congratulation></PrivateRoute>,


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
            {
                path: '/faq',
                element: <Faq></Faq>
            },
        ]

    },

    {
        path: '/footer',
        element: <Footer></Footer>
    }


])