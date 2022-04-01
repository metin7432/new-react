import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //deger atamada 1. yontem   
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /* deger atamada 2. yontem const [userInput, setUserInput] = useState({
        'enteredTitle' : '',
        'enteredAmount' : '',
        'enteredDate'  : ''
    });
    */
    const titleChangeHadler = (e) => {
        //deger atamada 1. yontem   
        setEnteredTitle(e.target.value);


        /*
        deger atamada 2. yontem
       setUserInput({
           ...userInput,
           enteredTitle: e.target.value,
       })
       deger atamada 2. yontem kullanilacaksa asagidaki gibi degerler atanir .
       onceki kayit ile karsilastirilir yani snapshot yapilir her zaman onceki kaydin takibi gereklidir.
       setUserInput((prevState) =>{
           return {...prevState, enteredTitle: e.target.value };
       })
       */
    }

    const amountChangeHadler = (e) => {
        //deger atamada 1. yontem   
        setEnteredAmount(e.target.value);

        /*
        //deger atamada 2. yontem   
        setUserInput({
            ...userInput,
            enteredAmount: e.target.value,
        })
        */
    }

    const dateChangeHadler = (e) => {
        //deger atamada 1. yontem   
        setEnteredDate(e.target.value);

        /*
       deger atamada 2. yontem   
        setUserInput({
            ...userInput,
            enteredDate: e.target.value,
        })
        */
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)

        //value atanan degerler burada temizlendi. 
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
    
    return (
      
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHadler} />

                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHadler} />

                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHadler} />

                </div>
            </div>

            <div className="new-expense__actions">

                <button type="reset" onClick={props.resetle}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>

        </form>
        
    )

}

export default ExpenseForm;