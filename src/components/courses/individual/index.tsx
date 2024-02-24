import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Question from "./question"
import Slide from "./slide";


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

    return (
        <div>
            <p>{course.name}</p>
            <SlideWithControls course={course}></SlideWithControls>
            <QuestionWithControls course={course}></QuestionWithControls>
        </div>
    )
}

function SlideWithControls(props: {course: Course}): JSX.Element {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <button onClick={() => {
                    if(index > 0) setIndex(index - 1)
                }}>←</button>
                <button onClick={() => {
                    if(index < props.course.slides.length - 1) setIndex(index + 1)
                }}>→</button>
                <Slide course={props.course} index={index}></Slide>
        </div>
    )
}

function QuestionWithControls(props: {course: Course}): JSX.Element {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <button onClick={() => {
                    if(index > 0) setIndex(index - 1)
                }}>←</button>
                <button onClick={() => {
                    if(index < props.course.questions.length - 1) setIndex(index + 1)
                }}>→</button>
                <Question course={props.course} index={index}></Question>
        </div>
    )
}

export default IndividualCourse;