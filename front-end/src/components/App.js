import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
import "./css/app.css";
import Footer from './Footer';
import Header from './Header';
import Homepage from './Homepage';
import Signup from './Signup';
import Login from "./Login";


const App = () => {

    return <div className='container'>
        <Router >
            <Header />
            <div className='homepage-container'>
                <Routes >
                    <Route path="/" exact element={<Homepage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    </div>;
};

export default App;
