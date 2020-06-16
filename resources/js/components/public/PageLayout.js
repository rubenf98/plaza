import React, { Component } from "react";
import NavBar from "../common/NavBar";
import PageFooter from "../common/PageFooter";
import { withRouter } from "react-router";
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


class PageLayout extends Component {
    render() {
        return (
            <div>
                <Header>
                    <NavBar />
                </Header>

                <Content>
                    <div>
                        {this.props.children}
                    </div>
                </Content>

                <Footer>
                    <PageFooter />
                </Footer>
            </div>
        );
    }
}

export default withRouter(PageLayout);
