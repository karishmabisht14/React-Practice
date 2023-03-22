import "./ExpenseItem.css";
import Card from "../UI/Card";

import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

  const changeTitle = () => {
    setTitle('Updated!!!');
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        location={props.location}
        amount={props.amount}
      />
      <button onClick = {changeTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
