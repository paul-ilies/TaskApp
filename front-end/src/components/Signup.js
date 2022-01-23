import React, { useState, useEffect } from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { signUp } from "../actions/index";
import UserForm from './utils/UserForm';

let Signup = (props) => {
    const { handleSubmit } = props;
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.auth);
    const { userInfo, error } = userRegister

    useEffect(() => {
        if (error) {
            setErrorMessage(error.response.data.error)
            setTimeout(() => {
                setErrorMessage(null)
            }, 2000);
        }


    }, [error])


    const onSubmit = async ({ email, password }) => {
        dispatch(await signUp(email, password))

    }

    if (!userInfo) {
        return <>
            <UserForm
                onSubmit={handleSubmit(onSubmit)}
                title="Sign Up"
                buttonText="Sign Up"
                error={errorMessage}
            />
        </>;
    }

    else {
        navigate("/tasks")
    }


};

Signup = reduxForm({ form: "signup" })(Signup)

export default Signup;
