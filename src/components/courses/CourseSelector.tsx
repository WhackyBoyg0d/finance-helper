import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./index";
import IndividualCourse from "./individual";
import FinishScreen from "./individual/finish/Finish";

export function CourseSelector(): JSX.Element {
    return (
        <Routes>
            <Route path="/:id" element={<IndividualCourse />} />
            <Route path="/:id/*" element={<FinishScreen />} />
        </Routes>
    )
}

export default CourseSelector;