import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsSankey from "highcharts/modules/sankey";
import Navbar from "../common/Navbar";
import { auth, database } from "../../firebase";
import { ref, get, set as setFirebaseData } from "firebase/database";

// Initialize the Sankey module
HighchartsSankey(Highcharts);

interface Expense {
  name: string;
  amount: number;
}

const Budget: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userRef = ref(database, `storeBudget/${user.uid}`);
          const userDataSnapshot = await get(userRef);
          const fetchedUserData = userDataSnapshot.val();

          // Initialize budget categories if not already present
          if (!fetchedUserData || !fetchedUserData.expenses) {
            const defaultCategories = [
              "Rent",
              "Groceries",
              "Utilities",
              "Internet",
              "Transportation",
              "Savings",
              "Entertainment",
              "Insurance",
              "Clothing",
              "Miscellaneous",
            ];

            const defaultExpenses = defaultCategories.map((category) => ({
              name: category,
              amount: 0,
            }));

            setUserData({
              expenses: defaultExpenses,
            });

            setExpenses(defaultExpenses);
          } else {
            setUserData(fetchedUserData);
            setExpenses(fetchedUserData.expenses);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const addExpense = () => {
    // Add a new expense with default values
    const newExpense: Expense = { name: "New Expense", amount: 0 };
    setExpenses([...expenses, newExpense]);

    // Update the user data in Firebase
    updateFirebaseData();
  };

  const removeExpense = (index: number) => {
    // Remove an expense by index
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);

    // Update the user data in Firebase
    updateFirebaseData();
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

    // Update the user data in Firebase
    updateFirebaseData();
  };

  const updateFirebaseData = () => {
    const user = auth.currentUser;
    if (user) {
      const userRef = ref(database, `storeBudget/${user.uid}`);
      setFirebaseData(userRef, { ...userData, expenses: expenses });
    }
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  const options: Highcharts.Options = {
    title: {
      text: `Monthly Budgeting - Total Expenses: $${totalExpenses.toFixed(2)}`,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        keys: ["from", "to", "weight"],
        data: expenses.map((expense) => ["Income", expense.name, expense.amount]),
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
                  onChange={(e) => updateExpense(index, "amount", e.target.value)}
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
