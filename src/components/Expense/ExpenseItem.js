import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = ({date, title, location, amount}) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails
        title={title}
        location={location}
        amount={amount}
      />
    </Card>
  );
}

export default ExpenseItem;
