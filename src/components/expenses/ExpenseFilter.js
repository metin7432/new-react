import React, {useState} from 'react';
import './ExpenseFilter.css';
import Card from '../UI/Card';

 const ExpenseFilter = (props) => {
    
    const dropdownChangeHandler = (e) => {
      const values = e.target.value
        props.onChangeFilter(values);
        

    }
  return (
    <div className='expenses-filter'>
        
     <div className='expenses-filter__control'>
       <label >Filter by Year</label>
       <select value={props.selected} onChange={dropdownChangeHandler}>
           <option value='2022'>2022</option>
           <option value='2021'>2021</option>
           <option value='2020'>2020</option>
           <option value='2019'>2019</option>
            </select>
     </div>
        
        </div>
  )
}

export default ExpenseFilter;