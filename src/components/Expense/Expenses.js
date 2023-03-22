import "./Expenses.css";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";

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
