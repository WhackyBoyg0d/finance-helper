import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import { Bounce, toast, ToastContainer } from "react-toastify";

import { auth, database } from "../../../firebase";
import { ref, set, get } from 'firebase/database';

import { User } from "components/common/user";

const ANSWER_COUNT = 5;

export function Question(props: { course: Course, finishHandler: () => void }): JSX.Element {
	const navigate = useNavigate();
	const [index, setIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

	const [isOptionSelected, setisOptionSelected] = useState(false);


	let [answer, setAnswer] = useState("");
	let [question, setQuestion] = useState(
		props.course.questions[index].question
	);

	useEffect(() => {
		setQuestion(props.course.questions[index].question);

		const allPossibleAnswers = props.course.questions.map(
			(questionWithAnswer) => questionWithAnswer.answer
		);

		const answers = [props.course.questions[index].answer];
		for (let i = 0; i < ANSWER_COUNT; i++)
			answers.push(selectRandomAnswer(allPossibleAnswers, answers));

		shuffleArr(answers);
		setShuffledAnswers(answers);
	}, [index]);

	let [shuffledAnswers, setShuffledAnswers] = useState([] as Array<string>);

	return (
		<>
			<div className="m-12 mx-16 py-8 justify-center items-center flex flex-col border-2 border-black  rounded-md">
				<div className="mb-4 text-xl font-semibold border-b-[2px] border-black">
					<h1 className="">{question}</h1>
				</div>
				<div className="grid grid-cols-2 ">
					<div className="flex flex-col gap-2">
						{shuffledAnswers.map((answer: string, answerIndex: number) => {
							if (answer !== undefined) {
								return (
									<div className="flex flex-row">
										<label
											key={"answer" + answerIndex}
											className="flex flex-row gap-2"
										>
											<input
												type="radio"
												name="answer"
												checked={selectedAnswer === answer}
												onChange={() => {
													setAnswer(answer);
													setisOptionSelected(true);
													setSelectedAnswer(answer);
												}}
												className=" cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
											></input>
											<p>{answer}</p>
										</label>
									</div>
								);
							}
						})}
					</div>
					<div className="flex items-center justify-center">
						<button
							onClick={() => {
								if (answer === props.course.questions[index].answer) {
									addUserPoint();
									setisOptionSelected(false);
									setSelectedAnswer(null);
								}

								if (answer !== props.course.questions[index].answer) {
									toast.error("Try again!");
									setSelectedAnswer(null);
									return;
								}

								if (index < props.course.questions.length - 1)
									setIndex(index + 1);
								else {
									addCompletedCourse(props.course);
									// navigate("/courses");
									props.finishHandler();
								}
							}}
							disabled={!isOptionSelected}
							className="bg-emerald-500 disabled:bg-emerald-300 text-white p-2 m-2 rounded-md hover:bg-emerald-300 hover:text-white"
						>
							Submit
						</button>
					</div>
				</div>
			</div>

			<ToastContainer
				position="bottom-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				transition={Bounce}
			/>
		</>
	);
}

function selectRandomAnswer(
	allAnswers: Array<string>,
	alreadyUsedAnswers: Array<string>
): string {
	const filteredAnswers = allAnswers.filter(
		(answer) => !alreadyUsedAnswers.includes(answer)
	);

	return filteredAnswers[Math.floor(Math.random() * filteredAnswers.length)];
}

function shuffleArr(array: Array<any>) {
	for (var i = array.length - 1; i > 0; i--) {
		var rand = Math.floor(Math.random() * (i + 1));
		[array[i], array[rand]] = [array[rand], array[i]];
	}
}

async function addUserPoint() {
	const authUser = auth.currentUser;
	if(!authUser) console.error("User not logged in");
	else {
		const userRef = ref(database, `users/${authUser.uid}`);
		const userDataSnapshot = await get(userRef);

		const user: User = userDataSnapshot.val();
		user.points += 1

		set(userRef, user);
	}
}

async function addCompletedCourse(course: Course) {
	const authUser = auth.currentUser;
	if(!authUser) console.error("User not logged in");
	else {
		const userRef = ref(database, `users/${authUser.uid}`);
		const userDataSnapshot = await get(userRef);

		const user: User = userDataSnapshot.val();
		user.dateLastCompletedCourse = Date.now();
		if(user.coursesCompleted) {
			user.coursesCompleted.push(course);
		}
		else {
			user.coursesCompleted = [course];
		}

		set(userRef, user);
	}
}

export default Question;
