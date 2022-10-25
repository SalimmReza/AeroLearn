import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CourseDetails = () => {
    const courseDetails = useLoaderData();

    const { _id, name, university, rating, img, total_enroll, level, details } = courseDetails
    const { lecturer, country, enroll_date, thumbnail_url } = courseDetails.author

    // console.log(lecturer)
    return (
        <div className='w-[60%] mx-auto my-5 h-full'>
            <div className="card w-full bg-base-100 shadow-xl border-2 border-yellow-600">
                <figure>
                    <img className='w-full h-[300px] bg-cover bg-center'
                        src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary ">{rating}<FaStar className='ml-1' ></FaStar> </div>
                    </h2>
                    <p>{details}</p>
                    <h4 className='font-semibold'>University: {university}</h4>
                    <div className='flex items-center gap-3'>
                        <div className="avatar">
                            <div className="w-14 rounded bg-cover">
                                <img src={thumbnail_url} />
                            </div>
                        </div>
                        <div className='font-normal'>
                            <h3>{lecturer}</h3>
                            <h3>From: {country}</h3>
                            <h3>Starting date: {enroll_date}</h3>
                        </div>


                    </div>

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Course Level: {level}</div>
                        <div className="badge badge-outline">Students: {total_enroll}</div>
                        <div className="badge badge-outline bg-warning cursor-pointer">Get Premium</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;