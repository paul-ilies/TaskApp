import React from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
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
import history from "./utils/history";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, { auth: { userInfo: localStorage.getItem("token") } },
    composeEnhancers(applyMiddleware(reduxThunk))
)

const App = () => {

    return <div className='container'>
        <Provider store={store} >
            <Router history={history} >
                <Header />
                <div className='homepage-container'>
                    <Switch >
                        <Route path="/" exact component={Homepage} />
                        <Route path="/signup" exact component={Signup} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/tasks" exact component={Tasks} />

                    </Switch>
                </div>
                <Footer />
            </Router>
        </Provider>
    </div>;
};

export default App;
