import React from 'react';
import "./css/createTask.css";
import Modal from './utils/Modal';
import requireAuth from './utils/requireAuth';

const CreateTask = () => {
    return (
        <div>
            <Modal />
        </div>
    )
};

export default requireAuth(CreateTask);
