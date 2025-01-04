function Expense ({index, handleDelete, expenseName, expenseAmount}) {
    return (
        <div>
            <h1>{expenseName}</h1>
            <p>{expenseAmount}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
    )
}

export default Expense;