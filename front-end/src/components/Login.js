import React, { useState, useEffect } from 'react';
import { reduxForm } from 'redux-form';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import UserForm from "./utils/UserForm";
import { login } from "../actions/index";

let Login = (props) => {
    const { handleSubmit } = props;
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.auth)
    const { userInfo, error } = userLogin;

    useEffect(() => {
        if (error) {
            setErrorMessage(error.response.data.error);
            setTimeout(() => {
                setErrorMessage(null)
            }, 2000)
        }


    }, [error])


    const onSubmit = async (email, password) => {
        dispatch(await login(email, password))
    }

    if (userInfo) {
        navigate("/tasks")
    }

    return <>
        <UserForm
            onSubmit={handleSubmit(onSubmit)}
            error={errorMessage}
            title="Sign In"
            buttonText="Sign In"
        />
    </>;
};
Login = reduxForm({ form: "signin" })(Login)

export default Login;
