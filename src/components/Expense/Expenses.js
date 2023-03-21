import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (  
    <Card className="expenses">
      {  
       props.items.map((expense) => {
          return(
            <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
            key={expense.id}
          />
          )          
        })
      }
    </Card>
  )
}

export default Expenses;