import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import ScrollToTop from "./components/common/ScrollToTop";

//public pages
import Home from "./components/public/Home";

import Login from "./components/public/Login";
import FirstLogin from "./components/public/FirstLogin";
import PageLayout from "./components/public/PageLayout";
import FAQ from "./components/public/FAQ";
import Servicos from "./components/public/Servicos";

import DashboardHome from "./components/dashboard/DashboardHome";
import Pagamentos from "./components/dashboard/PagamentosContent/Pagamentos";
import Profile from "./components/dashboard/ProfileContent/Profile";
import Circulares from "./components/dashboard/CircularesContent/Circulares";

import PrivateRoute from "./components/common/PrivateRoute";
import Archive from "./components/dashboard/ArchiveContent/Archive";


export const history = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={history}>
            <ScrollToTop>
                <Switch>
                    <PageLayout>
                        <Route exact path="/perguntas" component={FAQ} />
                        <Route exact path="/servicos" component={Servicos} />

                        <Route exact path="/login/first" component={FirstLogin} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/" component={Home} />

                        <PrivateRoute exact component={DashboardHome} path="/painel" />
                        <PrivateRoute exact component={Pagamentos} path="/painel/pagamentos" />
                        <PrivateRoute exact component={Archive} path="/painel/arquivo" />
                        <PrivateRoute exact component={Circulares} path="/painel/circulares" />
                        <PrivateRoute exact component={Profile} path="/painel/profile" />

                    </PageLayout>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default Routes;
