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
            <OptionalImage src={slide.image_source}></OptionalImage>
        </div>
    );
}

function OptionalImage(props: {src: string | null}) {
    if(props.src != null) return (
        <img src={require("data/images/courses/" + props.src as string)}></img>
    )
}

export default Slide;