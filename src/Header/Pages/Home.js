import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='bg-gradient-to-tr from-black to black h-[500px] w-full relative'>
                <img className='w-full h-full object-cover absolute mix-blend-overlay'
                    src="https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='p-24 flex flex-col items-end justify-end'>
                    <h1 className='text-white font-bold'>
                        Our courses are related to Aircraft Engineering. <br /> We have any professional teacher from all over the world <br /> from different countries.. Do explore our courses
                    </h1>

                    <div className='my-5'>
                        <Link to='login'><button className="btn btn-info w-[400px]">Login</button></Link>
                    </div>
                    <div className='h-15 w-10 flex gap-8 flex-row-reverse'>
                        <img src="https://thumbs.dreamstime.com/z/university-logo-design-182796359.jpg" alt="" />
                        <img src="https://image.shutterstock.com/image-photo/image-260nw-2065534736.jpg" alt="" />
                        <img src="https://cdn4.vectorstock.com/i/1000x1000/27/93/book-education-university-logo-vector-19952793.jpg" alt="" />
                        <img src="https://media.istockphoto.com/vectors/vector-vector-id876177980?k=20&m=876177980&s=612x612&w=0&h=M6rCqeywN5lqbvOWu0usmPfaHUv3wS_myRo_IBdF8hw=" alt="" />
                        <img src="https://thumbs.dreamstime.com/z/university-logo-design-182796359.jpg" alt="" />
                        <img src="https://img.freepik.com/premium-vector/luxury-university-logo-design_139869-120.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;