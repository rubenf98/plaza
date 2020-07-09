import React, { Component } from "react";
import NavBar from "../common/NavBar";
import Notification from "../common/Notification";
import PageFooter from "../common/PageFooter";
import { withRouter } from "react-router";
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


class PageLayout extends Component {
    render() {
        return (
            <div className="layout">
                <header className="layout-header">
                    <NavBar />
                </header>

                <section className="layout-content">
                    <Notification></Notification>

                    {this.props.children}

                </section>

                <footer className="layout-footer" >
                    <PageFooter />
                </footer>
            </div>
        );
    }
}

export default withRouter(PageLayout);
