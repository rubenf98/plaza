import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import ScrollToTop from "./components/common/ScrollToTop";

//public pages
import Home from "./components/public/Home";
import Circular from "./components/public/Circular";
import Login from "./components/public/Login";
import FirstLogin from "./components/public/FirstLogin";
import PageLayout from "./components/public/PageLayout";

import DashboardHome from "./components/dashboard/DashboardHome";
import Pagamentos from "./components/dashboard/PagamentosContent/Pagamentos";
import Contas from "./components/dashboard/Contas";

import PublicRoute from "./components/common/PublicRoute";
import PrivateRoute from "./components/common/PrivateRoute";

export const history = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={history}>
            <ScrollToTop>
                <Switch>
                    <PageLayout>
                        <Route exact path="/circulares" component={Circular} />
                        <Route exact path="/login/first" component={FirstLogin} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/" component={Home} />

                        <PrivateRoute exact component={DashboardHome} path="/painel" />
                        <PrivateRoute exact component={Pagamentos} path="/painel/pagamentos" />
                        <PrivateRoute exact component={Contas} path="/painel/contas" />

                    </PageLayout>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default Routes;
