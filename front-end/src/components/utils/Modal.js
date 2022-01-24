
import React from 'react';
import ReactDOM from "react-dom";
import { Field } from "redux-form";
import { reduxForm } from 'redux-form';
import "../css/modal.css";
import history from "./history";
import requireAuth from "./requireAuth"
let Modal = ({ link, title, handleSubmit, onSubmitTask }) => {



    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-form">
                <div className="modal-form-close"><button onClick={() => history.push(link)}>🗙</button></div>
                <div className="modal-form-title">
                    <h3>{title}</h3>
                </div>
                <div className="modal-form-description">
                    <form className="modal-form-container" onSubmit={handleSubmit(onSubmitTask)} >

                        <Field
                            className="form-container-title"
                            name="title"
                            type="text"
                            component="input"
                            placeholder="Your title here..."
                        />
                        <Field
                            className="form-container-description"
                            name="description"
                            type="text"
                            component="textarea"
                            placeholder="Please add your thoughts..."
                        />
                        <div className="form-container-button">
                            <button >Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    )
};

Modal = reduxForm({
    form: "task",
    enableReinitialize: true
})(Modal)
export default requireAuth(Modal);
