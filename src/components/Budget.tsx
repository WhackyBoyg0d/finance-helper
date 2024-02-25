// SankeyChart.tsx
import React, { useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsSankey from "highcharts/modules/sankey";
import Navbar from "Navbar";

// Initialize the Sankey module
HighchartsSankey(Highcharts);
const Budget: React.FC = () => {
	const [expenses, setExpenses] = useState([
		{ name: "Rent", amount: 700 },
		{ name: "Groceries", amount: 300 },
		{ name: "Utilities", amount: 150 },
		{ name: "Internet", amount: 50 },
		{ name: "Transportation", amount: 100 },
		{ name: "Savings", amount: 200 },
		{ name: "Entertainment", amount: 150 },
		{ name: "Insurance", amount: 100 },
		{ name: "Clothing", amount: 50 },
		{ name: "Miscellaneous", amount: 200 },
	]);

	const addExpense = () => {
		// Add a new expense with default values
		setExpenses([...expenses, { name: "New Expense", amount: 0 }]);
	};

	const removeExpense = (index: number) => {
		// Remove an expense by index
		const newExpenses = [...expenses];
		newExpenses.splice(index, 1);
		setExpenses(newExpenses);
	};

	const updateExpense = (index: number, field: string, value: string) => {
		// Update an expense's name or amount
		const newExpenses = [...expenses];
		if (field === "name") {
			newExpenses[index].name = value;
		} else if (field === "amount") {
			newExpenses[index].amount = parseFloat(value) || 0;
		}
		setExpenses(newExpenses);
	};

	const options: Highcharts.Options = {
		title: {
			text: "Monthly Budgeting",
		},
		credits: {
			enabled: false,
		},
		series: [
			{
				keys: ["from", "to", "weight"],
				data: expenses.map((expense) => [
					"Income",
					expense.name,
					expense.amount,
				]),
				type: "sankey",
				name: "Budget",
			},
		],
	};

	return (
		<div>
			<Navbar />
			<div className="my-16">
				<div className="flex justify-center items-center flex-col">
					<HighchartsReact highcharts={Highcharts} options={options} />
					<div className="p-8 border-2 border-black rounded-md ">
						{expenses.map((expense, index) => (
							<div key={index}>
								<input
									className=""
									type="text"
									value={expense.name}
									onChange={(e) => updateExpense(index, "name", e.target.value)}
								/>
								<input
									type="number"
									className=""
									value={expense.amount}
									onChange={(e) =>
										updateExpense(index, "amount", e.target.value)
									}
								/>
								<button onClick={() => removeExpense(index)}>Remove</button>
							</div>
						))}
					</div>
					<button
						className="m-4 bg-emerald-400 text-white p-4 rounded-full"
						onClick={addExpense}
					>
						Add Expense
					</button>
				</div>
			</div>
		</div>
	);
};

export default Budget;
