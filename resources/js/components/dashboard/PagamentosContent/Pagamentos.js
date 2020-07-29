
import DashboardLayout from '../DashboardLayout';
import React from 'react';
import { Table, Button, Row, Spin } from 'antd';
import PagamentosTableManager from './PagamentosTableManager';

class Pagamentos extends React.Component {
    render() {
        return (
            <DashboardLayout>
                <Row className="table-page-container">
                    <PagamentosTableManager></PagamentosTableManager>
                </Row>
            </DashboardLayout>
        );
    }
}

export default Pagamentos;
