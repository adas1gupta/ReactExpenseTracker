function ExpenseAmount ({expenseAmount, setExpenseAmount}) {
    return (
        <div>
            <label htmlFor="expense-amount">Expense Amount:</label>
            <input
                type="text"
                id="expense-amount"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                placeholder="0.00"
            />
        </div>
    )
}

export default ExpenseAmount;


