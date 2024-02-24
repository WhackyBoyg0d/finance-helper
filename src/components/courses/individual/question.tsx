import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ANSWER_COUNT = 5;

export function Question(
    props: {
        course: Course;
    }): JSX.Element {

    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    let [answer, setAnswer] = useState("");
    let [question, setQuestion] = useState(props.course.questions[index].question);

    useEffect(() => {
        setQuestion(props.course.questions[index].question);

        const allPossibleAnswers = props.course.questions.map((questionWithAnswer) => questionWithAnswer.answer);

        const answers = [props.course.questions[index].answer];
        for(let i = 0; i < ANSWER_COUNT; i++) answers.push(selectRandomAnswer(allPossibleAnswers, answers));

        shuffleArr(answers)
        setShuffledAnswers(answers);
    }, [index]);

    let [shuffledAnswers, setShuffledAnswers] = useState([] as Array<string>);

    return (
        <div>
            <h1>{question}</h1>
            {shuffledAnswers.map((answer: string, answerIndex: number) => {
                if(answer !== undefined) {
                    return (
                        <label key={"answer" + answerIndex}><input type='radio' name="answer" onChange={(element) => setAnswer(answer)}></input>{answer}</label>
                    )
                }
            })}
            <button onClick={() => {
                if(answer === props.course.questions[index].answer) alert("TODO increase points for right answer");
                    
                if(index < props.course.questions.length - 1) setIndex(index + 1)
                else navigate("/courses")
            }}>Submit</button>
        </div>
    )
}

function selectRandomAnswer(allAnswers: Array<string>, alreadyUsedAnswers: Array<string>): string {
    const filteredAnswers = allAnswers.filter((answer) => !alreadyUsedAnswers.includes(answer));

    return filteredAnswers[(Math.floor(Math.random() * filteredAnswers.length))]
}

function shuffleArr(array: Array<any>){
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
}

export default Question;