import React from 'react';
import "./css/header.css";
import { Link } from 'react-router-dom';
import { signout } from '../actions';
import { useDispatch, useSelector } from "react-redux";




const Header = () => {
    const dispatch = useDispatch()
    const userProfile = useSelector(state => state.auth);
    const { userInfo } = userProfile;


    const renderLinks = () => {
        if (userInfo) {
            return (
                <ul>
                    <li className='button-link'><Link to="/" onClick={() => dispatch(signout())} >Sign Out</Link></li>
                </ul>
            )

        }
        else {
            return (
                <ul>
                    <li className='button-link'><Link to="/login">Sign In</Link></li>
                    <li className='button-link'><Link to="/signup">Sign up</Link></li>
                </ul>
            )
        }
    }


    return <div className='header'>
        {renderLinks()}
    </div>;


};

export default Header;
