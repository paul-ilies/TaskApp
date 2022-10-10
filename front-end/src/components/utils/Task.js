import React from "react";
import { Link } from "react-router-dom";

const Task = ({ title, to, text }) => {
  return (
    <div className="task">
      <div className="task-title">
        <p style={{ textTransform: "uppercase" }}>{title}</p>
      </div>
      <div className="task-link ">
        <Link to={to}>{text}</Link>
      </div>
    </div>
  );
};

export default Task;
