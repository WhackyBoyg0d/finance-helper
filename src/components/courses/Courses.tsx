import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from ".";
import Course from "./course";

export function Courses(): JSX.Element {
    return (
        <Routes>
            <Route path="/:id" element={<Course />} />
            <Route path="/" element={<Index />} />
        </Routes>
    )
}

export default Courses;