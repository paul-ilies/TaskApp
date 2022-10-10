import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import "./css/taskScreen.css";
import requireAuth from "./utils/requireAuth";
import { fetchTask, deleteTask, editTask } from "../actions";
import history from "./utils/history";
import Loader from "./utils/Loader";
import Modal from "./utils/Modal";

const TaskScreen = ({ match }) => {
  const [showModal, setShowModal] = useState(null);
  const dispatch = useDispatch();

  const { userTasks, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTask(match.params.id));
  }, [dispatch, match.params.id]);

  const deleteHandler = (id) => {
    if (!id) {
      return;
    }
    dispatch(deleteTask(id));
    history.push("/tasks");
  };

  const onSubmitTask = (formValues) => {
    dispatch(editTask(match.params.id, formValues));
    history.push(`/tasks/${match.params.id}`);
  };

  const editTaskHandler = () => {
    setShowModal(
      <Modal
        title="Editing your task"
        link={`/tasks/${match.params.id}`}
        onSubmitTask={onSubmitTask}
        initialValues={_.pick(userTasks, "title", "description")}
      />
    );
  };

  if (error) {
    history.push("/tasks");
  }

  if (!userTasks) {
    return <Loader />;
  }

  if (userTasks._id !== match.params.id) {
    history.push("/tasks");
  }

  return (
    <div className="taskScreen-container">
      <div className="taskScreen-title">
        <h1>{userTasks.title}</h1>
      </div>
      <div className="taskScreen-description">
        <p>{userTasks.description}</p>
      </div>
      <div className="taskScreen-buttons">
        <button onClick={() => editTaskHandler()}>Edit</button>
        <button onClick={() => deleteHandler(match.params.id)}>Delete</button>
        <button onClick={() => history.push("/tasks")}>Go Back</button>
      </div>
      {showModal}
    </div>
  );
};

export default requireAuth(TaskScreen);
