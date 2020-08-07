import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

// Add Expense (Action Generator) --- Will be considered for both Expense and Filter Reducer
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 }) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// Expense Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return state.concat(action.expense)     //concat is used since acc. to principle of Redux, the state must be read-only
        default:
            return state;
    }
}

// Filter Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addExpense({ description: 'Rent', amount: 1000 }));

const demoState = {
    expenses: [{
        id: 'wfofijeor34lfnv',
        description: '',
        note: '',
        amount: 100,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}