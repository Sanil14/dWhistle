import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./navbar";
import "../styles/global.css"

const Root = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    )
}

export default Root;