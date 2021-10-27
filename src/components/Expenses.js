import ExpenseItem from "./ExpenseItem";
import  './Expenses.css'
import Card from './UI/Card'
function Expenses(props){
    console.log('isOne Exist'+props.items[1])
        if(props.items[1]!=null){
            return (
            <Card className = 'expenses'>
                    <ExpenseItem date = {props.items[0].date} amount = {props.items[0].amount} 
                                title = {props.items[0].title}></ExpenseItem>
                                <ExpenseItem date = {props.items[1].date} amount = {props.items[1].amount} 
            title = {props.items[1].title}></ExpenseItem>
                    </Card>)
        }else {
            return(
                <Card className = 'expenses'>
                    <ExpenseItem date = {props.items[0].date} amount = {props.items[0].amount} 
                                title = {props.items[0].title}></ExpenseItem>
                    </Card>
        );
        }

}

export default Expenses;