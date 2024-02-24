import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./Index";
import IndividualCourse from "./IndividualCourse";

export function CourseSelector(): JSX.Element {
    return (
        <Routes>
            <Route path="/:id" element={<IndividualCourse />} />
            <Route path="/" element={<Index />} />
        </Routes>
    )
}

export default CourseSelector;