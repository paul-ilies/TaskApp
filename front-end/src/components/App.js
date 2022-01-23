import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import "./css/app.css";
import reducers from "../reducers/index"
import Footer from './Footer';
import Header from './Header';
import Homepage from './Homepage';
import Signup from './Signup';
import Login from "./Login";
import Tasks from './Tasks';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, { auth: { userInfo: localStorage.getItem("token") } },
    composeEnhancers(applyMiddleware(reduxThunk))
)

const App = () => {

    return <div className='container'>
        <Provider store={store} >
            <Router >
                <Header />
                <div className='homepage-container'>
                    <Routes >
                        <Route path="/" exact element={<Homepage />} />
                        <Route path="/signup" exact element={<Signup />} />
                        <Route path="/login" exact element={<Login />} />
                        {/* <Route path="/tasks" exact element={<Tasks />} /> */}

                    </Routes>
                </div>
                <Footer />
            </Router>
        </Provider>
    </div>;
};

export default App;
