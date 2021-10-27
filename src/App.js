import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses,setExpenses] = useState([{
    title : 'title 1',
    date : new Date(12,16,1993),
    amount : 1725
  }]);

  const onAddExpense = (expense)=>{
    expenses.push(expense);
    setExpenses([...expenses]);
   
  }

  return (
    <div className="App">
      <NewExpense onAddExpense = {onAddExpense}/>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
