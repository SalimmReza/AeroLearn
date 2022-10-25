import React from 'react';
import { Link } from 'react-router-dom';

const LeftCourse = ({ lftCourse }) => {
    console.log(lftCourse)
    return (
        <div className='bg-yellow-300 rounded'>
            <div className='bg-white m-3 p-2'>
                <Link to={`/course/${lftCourse._id}`}><h3>{lftCourse.name}</h3></Link>
            </div>


        </div>
    );
};

export default LeftCourse;