import {
  AUTH_USER,
  AUTH_ERROR,
  CREATE_TASK,
  CREATE_TASK_ERROR,
  FETCH_TASKS,
  FETCH_TASKS_ERROR,
  FETCH_TASK,
  FETCH_TASK_ERROR,
  DELETE_TASK,
  DELETE_TASK_ERROR,
  EDIT_TASK,
  EDIT_TASK_ERROR,
} from "./types";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const signUp = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post("/signup", { email, password }, config);

    dispatch({
      type: AUTH_USER,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error,
    });
  }
};

export const signIn =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post("/login", { email, password }, config);
      dispatch({
        type: AUTH_USER,
        payload: data,
      });
      localStorage.setItem("token", data.token);
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error,
      });
    }
  };

export const signout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: AUTH_USER,
    payload: "",
  });
};

export const fetchTasks = () => async (dispatch, useState) => {
  try {
    const { userInfo } = useState().auth;
    const configUser = {
      headers: {
        Authorization: `Bearer ${userInfo}`,
      },
    };

    const { data } = await axios.get("/tasks/v1", configUser);

    dispatch({
      type: FETCH_TASKS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_TASKS_ERROR,
      payload: error,
    });
  }
};

export const createTask = (formValues) => async (dispatch, useState) => {
  try {
    const { userInfo } = useState().auth;
    const configUser = {
      headers: {
        Authorization: `Bearer ${userInfo}`,
      },
    };
    const { data } = await axios.post(
      "/task/v1",
      { ...formValues },
      configUser
    );

    dispatch({
      type: CREATE_TASK,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_TASK_ERROR,
      payload: error,
    });
  }
};

export const fetchTask = (id) => async (dispatch, useState) => {
  try {
    const { userInfo } = useState().auth;
    const configUser = {
      headers: {
        Authorization: `Bearer ${userInfo}`,
      },
    };

    const { data } = await axios.get(`/tasks/${id}/v1`, configUser);
    dispatch({
      type: FETCH_TASK,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_TASK_ERROR,
      payload: error,
    });
  }
};
export const deleteTask = (id) => async (dispatch, useState) => {
  try {
    const { userInfo } = useState().auth;
    const configUser = {
      headers: {
        Authorization: `Bearer ${userInfo}`,
      },
    };

    const { data } = await axios.delete(`/tasks/${id}/v1`, configUser);
    dispatch({
      type: DELETE_TASK,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TASK_ERROR,
      payload: error,
    });
  }
};
export const editTask = (id, formValues) => async (dispatch, useState) => {
  try {
    const { userInfo } = useState().auth;
    const configUser = {
      headers: {
        Authorization: `Bearer ${userInfo}`,
      },
    };

    const { data } = await axios.patch(
      `/tasks/${id}/v1`,
      { ...formValues },
      configUser
    );
    dispatch({
      type: EDIT_TASK,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_TASK_ERROR,
      payload: error,
    });
  }
};
