import React from 'react';
import { Link } from 'react-router-dom';

const Task = ({ title, to }) => {
    return <div className='task'>
        <div className="task-title"><p>{title}</p></div>
        <div className="task-link "><Link to={to}>View Details</Link></div>
    </div>;
};

export default Task;
