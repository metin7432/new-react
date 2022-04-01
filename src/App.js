import React, {useState} from 'react';
import './App.css';

import Expenses from './components/expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// lifting denen yapi  2 componentin ortak eristigi componente veri tasinir
// ve her iki componente ayni veri gider, burada App ortak componenttir ve genelde oyledir.
const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurnce', amount: 265.56, date: new Date(2022, 3, 5) },
  { id: 'e2', title: 'House Insurnce', amount: 234.78, date: new Date(2021, 4, 8) },
  { id: 'e3', title: 'Electric bills', amount: 345.43, date: new Date(2022, 5, 23) },
  { id: 'e4', title: 'Naturel Gas bills', amount: 345.89, date: new Date(2021, 5, 23) },
  { id: 'e5', title: 'TurkTelekom bills', amount: 123.45, date: new Date(2020, 9, 21) },
  { id: 'e6', title: 'Water Bill', amount: 123.45, date: new Date(2021, 10, 11) },
  { id: 'e7', title: 'Kasko', amount: 123.45, date: new Date(2022, 2, 11) }

];

const App = () => {

  //dummy verisi ekleniyor. useState veri guncelenecekse kullanilir. 
  //sadece veri alincaksa props.deger sekilde return'e gonderilir.
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); // obje bu sekilde useState aktarilir
                                                            // DUMMY_EXPENSES expenses'e aktarilir
  
  // formdan gelen veri  ile dummy verisi burada set edilir yani formdan gelen deger setExpenses e 
 // ekleniyor boylelikle expense yeni deger ...prevExpenses ise onceki degeri hafizada tutar yenisi
 //ile karsilastirir ve veriyi gunceller.
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
     
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
