import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if(props.items.length === 0){
    return (<h2 className='expenses-list__fallback'>Found No Expense</h2>)
  }

  return (
    <ul className='expenses-list'>
        {props.items.map((expense) => {
            return (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                location={expense.location}
                key={expense.id}
            />
            );
        })
        }
    </ul>
  )
};

export default ExpensesList;
