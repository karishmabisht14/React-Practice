import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseDetails = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const updateAmount = () => {
    setAmount('100');
  }

  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <button onClick = {updateAmount}>Change Amount</button>
      <h3>{props.location}</h3>
      <div className="expense-item__price">$ {amount}</div>
    </div>
  );
}

export default ExpenseDetails;
