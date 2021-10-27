import Card from "../UI/Card";
import ExpenseForm  from "./ExpenseForm";
import './NewExpense.css'
function newExpense(props){
    const addExpense= (expense)=>{
        props.onAddExpense(expense);
    }
    return (
        <Card className='new-expense'>
      <ExpenseForm addExpense = {addExpense}/>
    </Card>
    )

}
export default newExpense;