import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 2, 17);
  const expenseTitle = "Food";
  const expenseAmount = "100";
  return (
    <div>
      <h2 className="expense-item">Expense Items</h2>
      <div>{expenseDate.toISOString()}</div>
      <div>
        <h2>{expenseTitle}</h2>
        <div>Rs{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
