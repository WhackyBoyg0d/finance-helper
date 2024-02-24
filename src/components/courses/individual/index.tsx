import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Question from "./question";
import Slide from "./slide";

import coursesJson from "data/courses.json";
import Navbar from "../../../Navbar";

export function IndividualCourse(): JSX.Element {
	const courseName = useParams<string>().id;
	const course: Course = (() => {
		const courses: Array<Course> = coursesJson;

		for (const course of courses) {
			if (course.name == courseName) return course;
		}

		return {} as Course;
	})();

	return (
		<div>
			<Navbar />

			<SlideWithControls course={course}></SlideWithControls>
			{/* <Question course={course}></Question> */}
		</div>
	);
}

function SlideWithControls(props: { course: Course }): JSX.Element {
	const [index, setIndex] = useState(0);

	return (
		<div>
			<div className="flex flex-row gap-4 m-16 mb-4 align-middle items-center">
				<div className="flex gap-2">
					<button
						onClick={() => {
							if (index > 0) setIndex(index - 1);
						}}
						className="bg-slate-500 hover:bg-slate-300 text-white font-bold py-1 px-2 flex rounded items-center"
					>
						←
					</button>
					<button
						onClick={() => {
							if (index < props.course.slides.length - 1) setIndex(index + 1);
						}}
						className="bg-slate-500 hover:bg-slate-300 text-white font-bold py-1 px-2 flex rounded items-center"
					>
						→
					</button>
				</div>

				<p className="font-bold">
					{props.course.name} →{" "}
					<span className="font-semibold">
						{props.course.slides[index].title}
					</span>
				</p>
			</div>

			<Slide course={props.course} index={index}></Slide>
		</div>
	);
}

export default IndividualCourse;
