import React from "react";

export function Slide(
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

export default Slide;