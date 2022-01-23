import React from 'react';
import "../css/userForm.css";
import { Field } from "redux-form";

const UserForm = ({ title, error, buttonText, onSubmit }) => {
    return <div className='form-container'>
        <form onSubmit={onSubmit} className='form'>
            <div className='form-header'><h1>{title}</h1></div>
            <div className='form-inputs'>
                <Field
                    className="input-email"
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                    placeholder="Email"
                />
                <Field
                    className="input-password"
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                    placeholder="Password"
                />
            </div>
            <div className='form-error'><p>{error}</p></div>
            <div className='form-button '><button className='button-link'>{buttonText}</button></div>
        </form>
    </div>
};

export default UserForm;
