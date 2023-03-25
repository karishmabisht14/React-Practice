import "./Expenses.css";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expenses Found.</p>;

  if (filteredExpenses.length > 0) {
    if (filteredExpenses.length === 1) {
      const expense = filteredExpenses[0];
      expensesContent = (
        <>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
            key={expense.id}
          />
          <p>Only single Expense here. Please Add More...</p>
        </>
      );
    } else
      expensesContent = filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
            key={expense.id}
          />
        );
      });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
