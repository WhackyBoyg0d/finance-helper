import React from "react";
import { useParams } from "react-router-dom";

export function Course(): JSX.Element {
    const courseID = useParams<string>().id;

    return (
        <p>Course ID: {courseID}</p>
    )
}

export default Course;