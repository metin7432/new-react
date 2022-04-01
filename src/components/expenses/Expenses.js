import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card';
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

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

    
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter 
                  selected={filteredYear} 
                  onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}  />
               <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    )

}

export default Expenses;