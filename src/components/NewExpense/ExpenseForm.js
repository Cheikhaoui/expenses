import { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm(props) {

        const [newExpense,setExpense]=useState({
            title : '',
            amount : '',
            date : new Date()
        });

       const onsubmitForm =  (event) => {
        event.preventDefault()
        console.log(newExpense)
        props.addExpense(newExpense)
        setExpense({
            title : '',
            amount : '',
            date : new Date()
        })

       }

       const onchangeTitleHandler = (event) =>{
        setExpense((prevState)=>{return{...prevState,title:event.target.value}})
       }

       const onchangeAmountHandler = (event) =>{
        setExpense({
               ...newExpense,
               amount:event.target.value
           })
       }

       const onchangeDateHandler = (event) =>{
        const dateString = event.target.value ;
        console.log(dateString)
        const dateArray = dateString.split("-");
        const dateObj = new Date(`${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`);
        console.log(dateObj)
        setExpense({
               ...newExpense,
               date:dateObj
           })
       }


    return (
    <form onSubmit = {onsubmitForm}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value= {newExpense.title}
            onChange ={onchangeTitleHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={newExpense.amount}
            onChange={onchangeAmountHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={newExpense.date.toISOString().split('T')[0]}
            onChange={onchangeDateHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
    )
}

export default ExpenseForm;