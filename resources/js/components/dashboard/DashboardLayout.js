import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { withRouter } from "react-router";

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
