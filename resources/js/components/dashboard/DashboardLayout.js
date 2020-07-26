import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Route } from "react-router-dom";
import NavBar from "../common/NavBar";
import Notification from "../common/Notification";
import { withRouter } from "react-router";
import DashboardHome from "./DashboardHome";
import Pagamentos from "./Pagamentos";
import Contas from "./Contas";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DashboardLayout extends Component {
    render() {
        return (
            <div className="dashboard-background">
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(DashboardLayout);
