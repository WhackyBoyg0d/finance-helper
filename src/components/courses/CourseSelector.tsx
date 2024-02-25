import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./index";
import IndividualCourse from "./individual";

export function CourseSelector(): JSX.Element {
    return (
        <Routes>
            <Route path="/:id" element={<IndividualCourse />} />
            <Route path="/" element={<Index />} />
        </Routes>
    )
}

export default CourseSelector;