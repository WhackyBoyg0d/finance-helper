import React from "react";
import Question from "./question";

export function Slide(props: { course: Course; index: number }): JSX.Element {
	const slide = props.course.slides[props.index];

	return (
		<>
			{/* <h1>{slide.title}</h1> */}
			<div className="grid grid-cols-2 mx-20">
				<div>
					<div className="m-6">
						{slide.body.map((paragraph: string, index: number) => {
							return <p key={"paragraph" + index}>{paragraph}</p>;
						})}
					</div>
					<Question course={props.course}></Question>
				</div>
				<OptionalImage src={slide.image_source}></OptionalImage>
			</div>
		</>
	);
}

function OptionalImage(props: { src: string | null }) {
	if (props.src != null)
		return (
			<img src={require(("data/images/courses/" + props.src) as string)}></img>
		);
}

export default Slide;
