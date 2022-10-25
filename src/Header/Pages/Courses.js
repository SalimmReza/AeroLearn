import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import LeftCourse from './LeftCourse';



const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='bg-gray-100 '>
            <h1 className='text-xl font-semibold text-center my-10'>The courses that we offer</h1>
            <div className='w-[80%] mx-auto'>

                <div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-10 container  '>
                    <div className=''>
                        <h1 className='font-extrabold text-2xl'>All Courses</h1>
                        {
                            courses.map(lftCourse => <LeftCourse
                                key={lftCourse._id}
                                lftCourse={lftCourse}
                            ></LeftCourse>)
                        }
                    </div>
                    <div className=" sm:col-span-1 lg:col-span-3  gap-5 sm:grid grid-cols-1  lg:grid-cols-2 "
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