import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';



const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='bg-gray-100'>
            <h1 className='text-xl font-semibold text-center my-10'>The courses that we offer</h1>

            <div className='flex w-[80%] mx-auto'>
                <div>
                    <div className="drawer">

                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">

                            <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Select Course</label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" className="drawer-overlay"></label>
                            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                                <h1 className='font-bold text-center my-5'>All Courses</h1>
                                {
                                    courses.map(course => <h3 className='font-semibold my-1'
                                        key={course._id}
                                    >{course.name}</h3>)
                                }
                                <label htmlFor="my-drawer" className=" my-10 btn btn-primary drawer-button">Close Catagories</label>


                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 ml-5'
                >
                    {
                        courses.map(course => <Course
                            key={course._id}
                            course={course}
                        ></Course>)
                    }


                </div>


            </div>




        </div>
    );
};

export default Courses;