import React from 'react';
import './Congratulation.css'

const Congratulation = () => {
    return (
        <div>
            <div className='di flex flex-col-reverse lg:flex-row'>
                <div className='mr-10'>
                    <h1 className='text-white font-extrabold text-3xl text-center' >Congratulations For Being With Us!</h1>
                    <br />
                    <h1 className='text-white font-extrabold text-2xl text-center'  >Our Support is Fully With You!</h1>
                </div>



                <ul class="list-disc mt-16">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            </div>
        </div>
    );
};

export default Congratulation;