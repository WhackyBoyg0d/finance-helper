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