import ExpenseName from "./ExpenseName"
import ExpenseAmount from "./ExpenseAmount"

function ExpenseForm ({expenseName, expenseAmount, setExpenseName, setExpenseAmount, handleAdd}) {
    return (
        <div>
            <ExpenseName expenseName={expenseName} setExpenseName={setExpenseName}>Expense Title</ExpenseName>
            <ExpenseAmount expenseAmount={expenseAmount} setExpenseAmount={setExpenseAmount}>Expense Amount</ExpenseAmount>
            <button onClick={() => handleAdd()}>Add</button>
        </div>
    )
}


export default ExpenseForm