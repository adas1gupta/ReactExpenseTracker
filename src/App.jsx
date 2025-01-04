import React from "react";
import { createRoot } from "react-dom/client";
import ExpenseForm from "./ExpenseForm";
import Expense from "./Expense";
import ErrorBoundary from "./ErrorBoundary";

function ErrorBoundaryWrappedExpenseForm (props) {
    return (
        <ErrorBoundary>
            <ExpenseForm {...props}/>
        </ErrorBoundary>
    )
}

function ErrorBoundaryWrappedApp (props) {
    return (
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    )
}

function ErrorBoundaryWrappedExpense (props) {
    return (
        <ErrorBoundary>
            <Expense {...props}/>
        </ErrorBoundary>
    )
}

function App () {
    const [expenses, setExpenses] = useState([])
    const [expenseName, setExpenseName] = useState("")
    const [expenseAmount, setExpenseAmount] = useState(0.00)

    const handleAdd = () => {
        if (expenseName && !isNaN(expenseAmount) && parseFloat(expenseAmount) > 0) {
            const expenseObject = { name: expenseName, amount: parseFloat(expenseAmount) }
            setExpenses([...expenses, expenseObject])
            setExpenseName("")
            setExpenseAmount(0.00)
        } else {
            alert("Please enter a valid expense amount greater than 0.");
        }
    }

    const handleDelete = (index) => {
        setExpenses(expenses.filter((element, i) => (
            i !== index
        )))
    }

    return (
        <div>
            <ErrorBoundaryWrappedExpenseForm
                setExpenseName={setExpenseName}
                setExpenseAmount={setExpenseAmount}
                handleAdd={handleAdd}
            >
                Expense Form:</ErrorBoundaryWrappedExpenseForm>
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
                    <ErrorBoundaryWrappedExpense
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
        <ErrorBoundaryWrappedApp />
    </React.StrictMode>
)

