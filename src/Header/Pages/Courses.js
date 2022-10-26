import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import LeftCourse from './LeftCourse';



const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='bg-gray-300  '>
            <h1 className='text-center sm:font-bold lg:font-extrabold text-3xl '>The courses that we offer</h1>
            <div className='w-[90%] lg:w-[80%]  mx-auto mt-5'>

                <div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-10 container  '>
                    <div className='w-[80%] lg:w-[100%]'>
                        <h1 className='font-extrabold text-2xl'>All Courses</h1>
                        {
                            courses.map(lftCourse => <LeftCourse
                                key={lftCourse._id}
                                lftCourse={lftCourse}
                            ></LeftCourse>)
                        }
                    </div>
                    <div className=" sm:col-span-1 lg:col-span-3  gap-5 sm:grid sm:grid-cols-1  lg:grid-cols-2 "
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




        </div >
    );
};

export default Courses;