import React, { useEffect } from 'react';
import "./css/tasks.css";
import { useDispatch, useSelector } from 'react-redux';
import requireAuth from './utils/requireAuth';
import Task from "./utils/Task";
import { fetchTasks } from "../actions";
import history from './utils/history';
import Loader from "./utils/Loader";


const Tasks = () => {

    const dispatch = useDispatch();
    const { userTasks } = useSelector(state => state.tasks)


    useEffect(() => {
        dispatch(fetchTasks())

    }, [])

    const fetchData = () => {
        return userTasks.map(el => {
            return (
                <Task
                    key={el._id}
                    title={el.title}
                    to={`/task/${el._id}`}
                />
            )
        })
    }



    if (!userTasks) {
        return (
            <Loader />
        )
    }
    return (<div className='tasks'>
        <div className="tasks-header"><h1>Tasks Dashboard</h1></div>
        <div className="tasks-btn"><button onClick={() => history.push("/task")} >Add</button></div>
        {fetchData()}


    </div>)
};

export default requireAuth(Tasks);
