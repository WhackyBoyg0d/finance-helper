import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import { Bounce, toast, ToastContainer } from "react-toastify";

import { auth, database } from "../../../firebase";
import { ref, set, get } from 'firebase/database';
import { User as AuthUser } from 'firebase/auth';

import { User } from "components/common/user";

const ANSWER_COUNT = 5;

export function Question(props: { course: Course }): JSX.Element {
	const navigate = useNavigate();

	const authUser = auth.currentUser;

	const [index, setIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

	const [isOptionSelected, setisOptionSelected] = useState(false);

	let [answer, setAnswer] = useState("");
	let [question, setQuestion] = useState("Placeholder question");

	useEffect(() => {
		if(authUser) (async () => {
			const userRef = ref(database, `users/${authUser.uid}`);
			const userDataSnapshot = await get(userRef);
	
			const user: User = userDataSnapshot.val();

			for(const completedCourse of user.courseCompletions) {
				if(completedCourse.name == props.course.name) {
					if(completedCourse.questionsCorrect.length >= props.course.questions.length) navigate("../")
					setIndex(completedCourse.questionsCorrect.length);
				}
			}
		})();
		else {
			navigate("/")
		}
	}, [])

	useEffect(() => {
		console.log("question to be: " + props.course.questions[index].question)
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
									updateCourseWithPoint(authUser, props.course, index);
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
									navigate("/courses");
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

async function updateCourseWithPoint(authUser: AuthUser | null, course: Course, index: number) {
	if(!authUser) console.error("User not logged in");
	else {
		const userRef = ref(database, `users/${authUser.uid}`);
		const userDataSnapshot = await get(userRef);

		const user: User = userDataSnapshot.val();
		if(user.courseCompletions) {
			let courseExists = false;
			for(const completedCourse of user.courseCompletions) {
				if(completedCourse.name == course.name) {
					courseExists = true;
					let exists: boolean = false;
					for(const questionCorrect of completedCourse.questionsCorrect) {
						if(questionCorrect == course.questions[index].question) exists = true;
					}
					if(!exists) {
						user.dateLastCompletedCourse = Date.now();
						completedCourse.questionsCorrect.push(course.questions[index].question);
					}
				}
			}
			if(!courseExists) user.courseCompletions.push({
				name: course.name,
				questionsCorrect: [course.questions[index].question]
			});
		}
		else {
			user.courseCompletions = [{
				name: course.name,
				questionsCorrect: [course.questions[index].question]
			}]
		}

		set(userRef, user);
	}
}

export default Question;
