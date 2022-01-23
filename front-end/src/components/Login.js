import React from 'react';
import { reduxForm } from 'redux-form';

import UserForm from "./utils/UserForm";


let Login = () => {



    return <>
        <UserForm

            title="Sign In"
            buttonText="Sign In"
        />
    </>;

};
Login = reduxForm({ form: "signin" })(Login)

export default Login;
