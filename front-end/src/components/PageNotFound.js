import React from "react";
import history from "./utils/history";
const PageNotFound = () => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>Page Not Found</h1>
      <button
        style={{ borderRadius: "10px", height: "40px", width: "100px" }}
        onClick={() => history.push("/")}
      >
        Refresh
      </button>
    </div>
  );
};

export default PageNotFound;
