import React from "react";

export function Question(
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

    shuffleArr(answers);

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

function shuffleArr(array: Array<any>){
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
}

export default Question;