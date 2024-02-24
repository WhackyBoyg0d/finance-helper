import React from "react";
import { useParams } from "react-router-dom";

export function Course(): JSX.Element {
    const courseID = useParams();

    console.log(courseID);

    return (
        <p>Course ID: {courseID.id}</p>
    )
}

export default Course;