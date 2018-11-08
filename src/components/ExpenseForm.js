import React from 'react';
import moment from 'moment'; // date lib (moment.js)
import { SingleDatePicker } from 'react-dates';

// const date = new Date();
const now= moment();
console.log(now.format('MMM Do, YYYY')); // output sample: Nov 7th, 2018

export default class ExpenseForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description: '',
            note:props.expense ? props.expense.note: '',
            amount: props.expense ? (props.expense.amount /100).toString():'',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange= (e) => {
        const description= e.target.value;
        this.setState(() => ({description}));
    };
    onNoteChange= (e) => {
        const note= e.target.value;
        this.setState(() => ({note}));
    };
    onAmountChange= (e) => {
        const amount= e.target.value;
        
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){ //only can use numbers and decimal one time only
            this.setState(() => ({amount}));
        }
    };
    onDateChange= (createdAt) => {
        if(createdAt){ // prevent user from delete date in textbox
            this.setState(() => ({ createdAt }));
        };

    };
    onFocusChange= ({ focused }) => {
        this.setState(() => ({calendarFocused: focused}));
    };
    onSubmit = (e) =>{
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            //set error state
            this.setState(()=> ({error: 'Please provide description and amount'}));
        }else {
            //clear the error
            this.setState(()=> ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10)*100, // convert from string to float and x100 to make it cents with no dot.
                createdAt: this.state.createdAt.valueOf(), // convert date to milliseconds for storage purposes
                note: this.state.note
            });
        }
    };
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date= {this.state.createdAt}
                        onDateChange={this.onDateChange} // call func change state when change the date
                        focused= {this.state.calendarFocused}
                        onFocusChange= {this.onFocusChange}
                        numberOfMonths= {1} // setup display only one month (check SingleDatePicker Docs)
                        isOutsideRange={() => false} //setup can choose past date from current also
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}