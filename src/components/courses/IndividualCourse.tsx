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
            <Question course={course} index={0}></Question>
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

function Question(
    props: {
        course: Course;
        index: number; 
    }): JSX.Element {
    
    const ANSWER_COUNT = 5;

    const questions = props.course.questions;
    const question = questions[props.index].question;

    const allPossibleAnswers = questions.map((questionWithAnswer) => questionWithAnswer.answer);
    const answers = [questions[props.index].answer];

    for(let i = 0; i < ANSWER_COUNT; i++) answers.push(selectRandomAnswer(allPossibleAnswers, answers));

    return (
        <form>
            <h1>{question}</h1>
            {answers.map((answer: string) => {
                if(answer != undefined) {
                    return (
                        <label><input type='radio' name="answer" value={answer}></input>{answer}</label>
                    )
                }
            })}
        </form>
    )
}

function selectRandomAnswer(allAnswers: Array<string>, alreadyUsedAnswers: Array<string>): string {
    const filteredAnswers = allAnswers.filter((answer) => !alreadyUsedAnswers.includes(answer));

    return filteredAnswers[(Math.floor(Math.random() * filteredAnswers.length))]
}

export default IndividualCourse;