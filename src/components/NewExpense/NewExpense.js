import "./NewExpense.css";
import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const openExpenseForm = (e) => {
    setIsEditing(true);
  };

  const closeExpenseForm = (e) => {
    setIsEditing(false);
  };

  

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={openExpenseForm}>Add New Expense</button>}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeExpenseForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
