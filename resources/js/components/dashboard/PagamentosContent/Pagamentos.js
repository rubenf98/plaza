
import DashboardLayout from '../DashboardLayout';
import React from 'react';
import { Table, Button, Row, Spin } from 'antd';
import PagamentosTableManager from './PagamentosTableManager';
import PagamentosModalManager from './PagamentosModalManager';

class Pagamentos extends React.Component {
    state = {
        visible: false
    };

    handleModalVisible = (aVisible) => {
        this.setState({
            visible: aVisible
        })
    }

    render() {
        return (
            <DashboardLayout>
                <Row className="table-page-container">
                    <PagamentosModalManager
                        visible={this.state.visible}
                        handleModalVisible={(aVisible) => this.handleModalVisible(aVisible)}
                    />
                    <PagamentosTableManager
                        handleModalVisible={(aVisible) => this.handleModalVisible(aVisible)}
                    />
                </Row>
            </DashboardLayout>
        );
    }
}

export default Pagamentos;
