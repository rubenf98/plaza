import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Home from "./components/public/Home";
import Example from "./components/public/Example";
import PageLayout from "./components/public/PageLayout";

export const history = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <PageLayout>
                    <Route path="/example" component={Example} />
                    <Route exact path="/" component={Home} />
                </PageLayout>
            </Switch>
        </Router>
    );
};

export default Routes;
