import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const deleteItems = () => {
    console.log('Expense is deleted')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
      <button onClick = {deleteItems}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
