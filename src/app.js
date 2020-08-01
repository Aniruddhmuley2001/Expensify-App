import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from Expense Dashboard Component
    </div>
);

const AddExpense = () => (
    <div>
        This is from Add Expense Component
    </div>
);

const EditExpense = () => (
    <div>
        This is from Edit Expense Component
    </div>
);

const Help = () => (
    <div>
        This is from Help Component
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpense} />
            <Route path="/edit" component={EditExpense} />
            <Route path="/help" component={Help} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));