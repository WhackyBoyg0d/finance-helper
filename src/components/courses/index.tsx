import React, { useEffect, useState } from "react";

import coursesJson from 'data/courses.json';
import { Link } from "react-router-dom";

export function Index(): JSX.Element {
    const courses: Array<Course> = coursesJson;

    return (
        <div>
            <h1>Course Selector</h1>
            <ul>
                {courses.map((course) => {
                    return (
                        <li><Link to={course.name}>Course on: {course.name}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Index;
