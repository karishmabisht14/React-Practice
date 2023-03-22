import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

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
