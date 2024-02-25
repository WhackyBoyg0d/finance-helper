import React, { useEffect, useState } from "react";

import coursesJson from "data/courses.json";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";

export function Index(): JSX.Element {
	const courses: Array<Course> = coursesJson;

	return (
		<>
			<div className="flex justify-center m-4 flex-col items-center">
				<h1 className="border-b-2 border-black inline-flex mb-4 text-xl font-bold italic">
					Course Selector
				</h1>
				<ul className="flex flex-col gap-4">
					{courses.map((course) => {
						console.log(course);
						return (
							<li className="flex flex-row items-center ">
								<Link
									className="flex flex-row items-center text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400  me-4 py-2 px-4 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
									to={`/courses/${course.name}`}
								>
									{/* <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg> */}
									{/* COMPLETELED COURSE ⬆️ */}
									{/* INCOMPLETE COURSE ⬇️ */}
									<svg
										className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
									</svg>

									{course.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default Index;
