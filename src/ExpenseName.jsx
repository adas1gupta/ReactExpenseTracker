function ExpenseName ({expenseName, setExpenseName}) {
    return (
        <div>
            <label htmlFor="expense-name">Expense Name:</label>
            <input
                type="text"
                id="expense-name"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
                placeholder="Enter the name of the expense"
            />
        </div>
    )
}

export default ExpenseName;