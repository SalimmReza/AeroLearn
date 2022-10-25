import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courseDetails = useLoaderData();
    const { name, university, img, } = courseDetails
    return (
        <div className='w-[50%] mx-auto mt-10 mb-10'>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{university}</p>
                    <div className="card-actions">
                        <Link to='/congo'> <button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;