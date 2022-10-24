import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import RightCourse from './RightCourse';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses)
    return (
        <div className='bg-gray-100'>
            <h1 className='text-xl font-semibold text-center my-10'>The courses that we offer</h1>

            <div className='flex'>
                <div>
                    <RightCourse></RightCourse>
                </div>
                <div>
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