import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpense from '../components/AddExpense';
import EditExpense from "../components/EditExpense";
import Help from "../components/Help";
import notFoundPage from '../components/notFoundPage';
import Header from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpense} />
            <Route path="/edit/:id" component={EditExpense} />
            <Route path="/help" component={Help} />
            <Route component={notFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;