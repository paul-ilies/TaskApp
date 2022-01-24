import React from 'react';
import { Link } from "react-router-dom";
import "./css/homepage.css"

const Homepage = () => {




    return <div className='homepage'>
        <div className="homepageHeader">
            <h1>Task App Application</h1>
        </div>
        <div className="homepage--btn ">
            <ul><li className='button-link'><Link to="/signup" >Sign Up</Link> </li></ul>

        </div>
    </div>;
};

export default Homepage;
