import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

interface Props {
	userData: UserData;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	prevStep: () => void;
	handleSubmit: (e: React.FormEvent) => void;
}

interface UserData {
	name: string;
	email: string;
}

function Step2({ userData, handleInputChange, prevStep, handleSubmit }: Props) {
	const navigate = useNavigate();

	return (
		<div className=" rounded-md px-8 pt-6 pb-8 mb-4">
			<form onSubmit={handleSubmit}>
				<Tooltip id="my-tooltip" place="top" />

				<div className="mb-4">
					<h2 className="mb-4 ">
						Whats your monthly income?{" "}
						<span
							data-tooltip-id="my-tooltip"
							data-tooltip-content="This allows us to personalise your investing and saving goals!"
							data-tooltip-place="top"
							className="text-xs text-slate-50 bg-slate-500 rounded-full px-1.5 py-1 "
						>
							?
						</span>
					</h2>
					<input
						className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 line-none "
						id="name"
						type="number"
						name="name"
						value={userData.name}
						onChange={handleInputChange}
						placeholder="$$"
					/>
				</div>

				<div className="flex items-center justify-between">
					<button
						className=" hover:bg-slate-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button"
						onClick={prevStep}
					>
						← Back
					</button>
					<button
						className="bg-emerald-300 hover:bg-emerald-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
						onClick={() => navigate("/profile")}
					>
						Lets go!
					</button>
				</div>
			</form>
		</div>
	);
}

export default Step2;
