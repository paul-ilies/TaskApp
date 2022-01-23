import React, { useState, useEffect } from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from "../actions";
import UserForm from './utils/UserForm';
import { Navigate } from "react-router-dom";

let Signup = ({ handleSubmit }) => {
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.auth);
    const { userInfo, error } = userRegister;

    useEffect(() => {
        if (error) {
            const errorTimer = setTimeout(() => {
                setErrorMessage(error.response.data.error)
            }, 2000)
            // if error set the error as default from back-end
            // setErrorMessage(error.response.data.error)
            // setTimeout(() => {
            //     setErrorMessage("")
            // }, 2000)
            return () => {
                clearInterval(errorTimer)
            }
        }
    }, [error])

    const onSubmit = ({ email, password }) => {
        dispatch(signUp(email, password))

    }

    if (!userInfo) {
        return <>
            <UserForm
                onSubmit={handleSubmit(onSubmit)}
                title="Sign Up"
                buttonText="Sign Up"
                error={errorMessage}

            />
        </>
    } else {
        return <Navigate to="/" />
    }
}


Signup = reduxForm({ form: "signup" })(Signup)

export default Signup;
