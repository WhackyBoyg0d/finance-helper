import React from "react";

export function Login(): JSX.Element {
	return (
	<div className="flex justify-center align-middle ">
		<div className="flex flex-col">
			<div className="flex justify-center align-middle">
				<button className=" text-white p-2 m-2"></button>
				<button className=" text-white p-2 m-2">Twitter</button>
				<button className=" text-white p-2 m-2">Facebook</button>
			</div>
			<input type="text" placeholder="Username" className="border-2 border-gray-300 p-2 m-2" />
			<input type="password" placeholder="Password" className="border-2 border-gray-300 p-2 m-2" />
			<button className="bg-blue-500 text-white p-2 m-2">Login</button>
		</div>
	</div>
		);
}

export default Login;
