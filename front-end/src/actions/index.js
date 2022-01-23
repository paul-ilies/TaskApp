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