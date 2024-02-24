import React, { useEffect, useState } from "react";

import coursesJson from 'data/courses.json';

interface Course {
    name: string;
}

export function Index(): JSX.Element {
    const courses: Array<Course> = JSON.parse(coursesJson.toString());

    return (
        <div>
            <h1>Course Selector</h1>
            <ul>
                {courses.map((course) => {
                    return (
                        <li>{course.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Index;
