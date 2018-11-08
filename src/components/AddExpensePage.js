import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense)=> { //get all data when submitted
                props.dispatch(addExpense(expense)); //store data
                props.history.push('/'); // kick n render to dashboard
            }}
        />
    </div>
);

export default connect()(AddExpensePage);