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
    EDIT_TASK_ERROR
} from "./types";
import axios from "axios";

const config = {
    headers: {
        "content-Type": "application/json"
    }
}

export const signUp = (email, password) => async dispatch => {
    try {
        const { data } = await axios.post("http://localhost:5000/signup", { email, password }, config)

        dispatch({
            type: AUTH_USER,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error
        })
    }
}

export const signIn = ({ email, password }) => async dispatch => {
    try {
        const { data } = await axios.post("http://localhost:5000/login", { email, password }, config)
        console.log(data)
        dispatch({
            type: AUTH_USER,
            payload: data
        })
        localStorage.setItem("token", data.token)

    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error
        })
    }
}

export const signout = () => async dispatch => {

    localStorage.removeItem("token")
    dispatch({
        type: AUTH_USER,
        payload: ""
    })
}

export const fetchTasks = () => async (dispatch, useState) => {
    try {
        const { userInfo } = useState().auth;
        const configUser = {
            headers: {
                Authorization: `Bearer ${userInfo}`
            }
        }
        const { data } = await axios.get("http://localhost:5000/tasks", configUser)

        dispatch({
            type: FETCH_TASKS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FETCH_TASKS_ERROR,
            payload: error
        })
    }

}

export const createTask = (formValues) => async (dispatch, useState) => {
    try {
        const { userInfo } = useState().auth;
        const configUser = {
            headers: {
                Authorization: `Bearer ${userInfo}`
            }
        }
        const { data } = await axios.post("http://localhost:5000/task", { ...formValues }, configUser)

        dispatch({
            type: CREATE_TASK,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_TASK_ERROR,
            payload: error
        })
    }
}