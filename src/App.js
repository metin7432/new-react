import logo from './logo.svg';
import './App.css';
import Expenses from './components/expenses/Expenses';


function App() {
  const expenses = [
  { id: 'e1', title :'Car Insurnce', amount : 265.56, date : new Date(2022, 3, 5) },
  { id: 'e2', title :'House Insurnce', amount : 234.78, date : new Date(2022, 4, 8)},
  { id: 'e3', title :' Electric bills', amount : 345.43, date : new Date(2022, 5, 23)},
  { id: 'e3', title :'Water bills', amount : 123.45, date : new Date(2022, 8, 23)}
   
  

]
  return (
    <div>
      
     <Expenses items={expenses} />
     
    </div>
  );
}

export default App;
