import React from 'react';
import { Link } from 'react-router-dom';


const Course = ({ course }) => {
    const { _id, name, university, rating, img, total_enroll } = course
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{university}</p>
                    <p>Students: {total_enroll}</p>
                    <p>Rating: {rating}</p>
                </div>
                <div className="card w-full h-[250px] bg-base-100 shadow-sm image-full">
                    <figure><img className='' src={img} alt="Shoes" /></figure>
                    <div className="card-body flex mt-[80px] ml-[30px]">
                        <Link to={`/course/${_id}`}> <button className="btn btn-outline btn-warning w-80">Details</button></Link>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default Course;