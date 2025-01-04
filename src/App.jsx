import React from "react";
import { createRoot } from "react-dom/client";
import ExpenseForm from "./ExpenseForm";
import Expense from "./Expense";

function App () {
    const [expenses, setExpenses] = useState([])
    const [expenseName, setExpenseName] = useState("")
    const [expenseAmount, setExpenseAmount] = useState(0.00)

    const handleAdd = () => {
        if (expenseName && expenseAmount) {
            const expenseObject = { name: expenseName, amount: expenseAmount }
            setExpenses([...expenses, expenseObject])
            setExpenseName("")
            setExpenseAmount(0.00)
        }
    }

    const handleDelete = (index) => {
        setExpenses(expenses.filter((element, i) => (
            i !== index
        )))
    }

    return (
        <div>
            <ExpenseForm
                setExpenseName={setExpenseName}
                setExpenseAmount={setExpenseAmount}
                handleAdd={handleAdd}
            >
                Expense Form:</ExpenseForm>
            <p>
                Total Expense:
                {
                    expenses.reduce((totalExpenses, expense) => {
                        return totalExpenses + expense.amount
                    }, 0) //0 initializes totalExpenses
                }
            </p>
            <div>
            {(expenses.length > 0) ? (
                expenses.map((expense, index) => (
                    <Expense
                        key={index}
                        index={index}
                        expenseName={expense.name}
                        expenseAmount={expense.amount}
                        handleDelete={handleDelete}
                    />
                ))
            ) : (
                    <></>
                )
            }
            </div>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

