
import DashboardLayout from '../DashboardLayout';
import React from 'react';
import OrcamentosList from './OrcamentosList';
import { connect } from "react-redux";
import CreateButton from '../../common/CreateButton';
import OrcamentosModalManager from './OrcamentosModalManager';

class Orcamentos extends React.Component {
    state = {
        visible: false
    };

    handleModalVisible = (aVisible) => {
        this.setState({
            visible: aVisible
        })
    }

    render() {
        let { visible } = this.state;

        return (
            <DashboardLayout >
                <div className="orcamento-page-container page-container">
                    <OrcamentosModalManager
                        visible={visible}
                        handleModalVisible={(aVisible) => this.handleModalVisible(aVisible)}
                    />

                    <CreateButton
                        handleModalVisible={(aVisible) => this.handleModalVisible(aVisible)}
                        isAdministrator={this.props.isAdministrator}
                    />

                    <OrcamentosList></OrcamentosList>
                </div>

            </DashboardLayout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAdministrator: state.auth.isAdministrator,
    };
};

export default connect(mapStateToProps, null)(Orcamentos);
