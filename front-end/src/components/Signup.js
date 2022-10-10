import React, { useState, useEffect } from "react";
import { reduxForm } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../actions";
import UserForm from "./utils/UserForm";
import history from "./utils/history";

let Signup = ({ handleSubmit }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const { userInfo, error } = useSelector((state) => state.auth);
  useEffect(() => {
    if (error) {
      setErrorMessage(error.response.data.error);
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  }, [error]);

  const onSubmit = ({ email, password }) => {
    dispatch(signUp(email, password));
  };

  if (!userInfo) {
    return (
      <>
        <UserForm
          onSubmit={handleSubmit(onSubmit)}
          title="Sign Up"
          buttonText="Register"
          error={errorMessage}
        />
      </>
    );
  } else {
    history.push("/");
  }
};

Signup = reduxForm({ form: "signup" })(Signup);

export default Signup;
