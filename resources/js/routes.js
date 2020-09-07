import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import ScrollToTop from "./components/common/ScrollToTop";

//public pages
import Home from "./components/public/Home";
import Circulares from "./components/public/Circulares";
import Circular from "./components/public/Circular";
import Login from "./components/public/Login";
import FirstLogin from "./components/public/FirstLogin";
import PageLayout from "./components/public/PageLayout";
import FAQ from "./components/public/FAQ";

import DashboardHome from "./components/dashboard/DashboardHome";
import Pagamentos from "./components/dashboard/PagamentosContent/Pagamentos";
import Orcamentos from "./components/dashboard/OrcamentosContent/Orcamentos";

import PublicRoute from "./components/common/PublicRoute";
import PrivateRoute from "./components/common/PrivateRoute";

export const history = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={history}>
            <ScrollToTop>
                <Switch>
                    <PageLayout>
                        <Route exact path="/perguntas" component={FAQ} />
                        <Route path="/circulares/:id" component={Circular} />
                        <Route exact path="/circulares" component={Circulares} />
                        <Route exact path="/login/first" component={FirstLogin} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/" component={Home} />

                        <PrivateRoute exact component={DashboardHome} path="/painel" />
                        <PrivateRoute exact component={Pagamentos} path="/painel/pagamentos" />
                        <PrivateRoute exact component={Orcamentos} path="/painel/orcamentos" />

                    </PageLayout>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default Routes;
