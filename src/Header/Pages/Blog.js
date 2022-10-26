import React, { useContext } from 'react';
import ReactToPdf from 'react-to-pdf';
const ref = React.createRef();



const Blog = ({ }) => {


    return (
        <div>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div ref={ref} >
                <h1>jdfnjn</h1>
            </div>
        </div>
    );
};

export default Blog;