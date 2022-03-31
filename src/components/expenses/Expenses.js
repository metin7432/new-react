import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    };
    //map metoduna filitre edilmis veri return edilir
    const filteredExpenses = props.items.filter(expense => {
        //burada yillar gore filitre edilir ve filtre edilmis butun obje mape gonderilir
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent =  <p>No Expense found</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((items) => (
            <ExpenseItem
            key={items.id}
            title={items.title}
            amount={items.amount}
            date={items.date} />
            ))
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter 
                  selected={filteredYear} 
                  onChangeFilter={filterChangeHandler}
                />
               {expensesContent}
            </Card>
        </div>
    )

}

export default Expenses;