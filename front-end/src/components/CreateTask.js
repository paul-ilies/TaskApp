import React from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../actions";
import Modal from "./utils/Modal";
import requireAuth from "./utils/requireAuth";
import { reset } from "redux-form";
import history from "./utils/history";

const CreateTask = () => {
  const dispatch = useDispatch();

  const onSubmitTask = (formValues) => {
    dispatch(createTask(formValues));
    dispatch(reset("task"));
    history.push("/tasks");
  };

  return (
    <div>
      <Modal
        title="Please add your task"
        link="/tasks"
        onSubmitTask={onSubmitTask}
      />
    </div>
  );
};

export default requireAuth(CreateTask);
