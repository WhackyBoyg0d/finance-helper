import React, { useState } from "react";
import { useParams } from "react-router-dom";

import coursesJson from 'data/courses.json';

export function IndividualCourse(): JSX.Element {
    const courseName = useParams<string>().id;
    const course: Course = (() => {
        const courses: Array<Course> = coursesJson;

        for(const course of courses) {
            if(course.name == courseName) return course;
        }

        return {} as Course;
    })();

    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <div>
            <p>{course.name}</p>
            <button onClick={() => {
                if(slideIndex > 0) setSlideIndex(slideIndex - 1)
            }}>←</button>
            <button onClick={() => {
                if(slideIndex < course.slides.length - 1) setSlideIndex(slideIndex + 1)
            }}>→</button>
            <Slide course={course} index={slideIndex}></Slide>
        </div>
    )
}

function Slide(
    props: {
        course: Course;
        index: number; 
    }): JSX.Element {

    const slide = props.course.slides[props.index];

    return (
        <div>
            <h1>{slide.title}</h1>
            {slide.body.map((paragraph: string) => {
                return (
                    <p>{paragraph}</p>
                )
            })}
            <img src={require("data/images/courses/" + slide.image_source)}></img>
        </div>
    );
}

export default IndividualCourse;