import React from 'react';
import history from './utils/history';
const PageNotFound = () => {
    return <div>
        <div><h1>Page Not Found</h1></div>
        <div><button onClick={() => history.push("/")}>Refresh</button></div>
    </div>;
};

export default PageNotFound;
