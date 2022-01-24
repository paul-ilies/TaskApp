import {
    CREATE_TASK,
    CREATE_TASK_ERROR,
    FETCH_TASKS,
    FETCH_TASKS_ERROR,
    FETCH_TASK_ERROR,
    FETCH_TASK,
    DELETE_TASK,
    DELETE_TASK_ERROR,
    EDIT_TASK,
    EDIT_TASK_ERROR
} from "../actions/types";

export const tasks = (state = [], action) => {
    switch (action.type) {
        case FETCH_TASKS:
            return { ...state, userTasks: action.payload }
        case FETCH_TASKS_ERROR:
            return { ...state, userTasks: action.payload }

        default:
            return state;
    }
}