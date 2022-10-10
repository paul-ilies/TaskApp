import React, { useState, useEffect } from "react";
import { reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../actions";
import UserForm from "./utils/UserForm";
import history from "./utils/history";

let Login = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const userLogin = useSelector((state) => state.auth);
  const { userInfo, error } = userLogin;

  useEffect(() => {
    if (error) {
      setErrorMessage(error.response.data.error);
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  }, [error]);

  const onSubmit = (email, password) => {
    dispatch(signIn(email, password));
  };

  if (userInfo) {
    history.push("/tasks");
  }

  return (
    <UserForm
      onSubmit={handleSubmit(onSubmit)}
      title="Sign In"
      buttonText="Sign In"
      error={errorMessage}
    />
  );
};
Login = reduxForm({ form: "signin" })(Login);

export default Login;
