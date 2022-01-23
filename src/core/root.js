import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";

const Root = () => {
    return (
        <Router>
            {/* Navbar Here */}
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    )
}

export default Root;