function ExpenseAmount ({expenseAmount, setExpenseAmount}) {
    return (
        <div>
            <label htmlFor="expense-amount">Expense Amount:</label>
            <input
                type="text"
                id="expense-amount"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                placeholder="Enter the amount of the expense"
            />
        </div>
    )
}

export default ExpenseAmount;


