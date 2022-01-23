import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "../styles/global.css"
import Navbar from "./navbar";
import Home from "../pages/Home";
import Register from "../pages/Register";

const Root = () => {
    return (
        <Router>
            <Navbar>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/register" element={<Register />}></Route>
                </Routes>
            </Navbar>
        </Router>
    )
}

export default Root;