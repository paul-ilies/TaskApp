import React from 'react';
import "./css/header.css";
import { Link } from 'react-router-dom';


const Header = () => {


    return <div className='header'>
        <ul>
            <li className='button-link'><Link to="/login">Sign In</Link></li>
        </ul>
    </div>;
};

export default Header;
