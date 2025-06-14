import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
   
    if (props.items.length === 0) {
       return <h2 className="expenses-list__fallback">Found no expenses!</h2>
    }
  return (
      
      <ul className="expenses-list">
          {props.items.map((items) => (
            <ExpenseItem
            key={items.id}
            title={items.title}
            amount={items.amount}
            date={items.date} />
            ))}
      </ul>
  
  )
}

export default ExpenseList;