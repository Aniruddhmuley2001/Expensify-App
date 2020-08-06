import { createStore, combineReducers } from "redux";

// Expense Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type){
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
console.log(store.getState());

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