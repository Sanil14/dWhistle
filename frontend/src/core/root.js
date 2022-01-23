import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "../styles/global.css"
import Navbar from "./navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Root = () => {
    return (
        <Router>
            <Navbar>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/login" element={<Login />}></Route>
                </Routes>
            </Navbar>
        </Router>
    )
}

export default Root;