
import DashboardLayout from '../DashboardLayout';
import React from 'react';
import { Row, notification } from 'antd';
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

    componentDidMount() {
        notification.warning({
            message: 'Introduzindo quotas...',
            duration: 0,
            description:
                'As quotas ainda se encontram em atualização, pelo que os pagamentos de algumas frações ainda estão a ser introduzidos no sistema.',
        });
    }

    componentWillUnmount() {
        notification.destroy();
    }

    handleNotificationClose = () => {
        this.setState({
            notification: false
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
