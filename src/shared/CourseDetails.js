import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaDownload, FaArrowLeft } from 'react-icons/fa';



const CourseDetails = () => {
    const courseDetails = useLoaderData();

    const { _id, name, university, rating, img, total_enroll, level, details } = courseDetails
    const { lecturer, country, enroll_date, thumbnail_url } = courseDetails.author

    // console.log(lecturer)
    return (
        <div className='w-[70%] mx-auto my-5 h-full'>

            <div className="card w-full bg-base-100 shadow-xl border-2 border-yellow-600">
                <div className='flex justify-between items-center p-3'>
                    <div>
                        <Link to='/courses'><FaArrowLeft></FaArrowLeft></Link>
                    </div>
                    <div className='d-flex'>
                        <button className="btn btn-outline btn-primary">Our Commitments</button>

                    </div>
                    <div className='d-flex'>
                        <h1 className='font-bold text'>Aero-Learn</h1>

                    </div>
                    <div>
                        <FaDownload className='w-14'></FaDownload>
                    </div>
                </div>
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

                        <Link to={`/checkout/${_id}`}><div className="badge badge-outline bg-warning cursor-pointer">Get Premium</div></Link>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default CourseDetails;