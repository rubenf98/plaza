import { Row, Card, Tabs } from 'antd';
import React from 'react'
import { connect } from "react-redux";
import { fetchArquivos, fetchArquivosTipos } from '../../../redux/arquivo/actions';
import CreateButton from '../../common/CreateButton';
import DashboardLayout from '../DashboardLayout';
import ArchiveFormManager from './ArchiveFormManager';
import ArchiveList from './ArchiveList';

const { TabPane } = Tabs;


class Archive extends React.Component {
    state = {
        activeTab: '',
        visible: false
    }

    handleModalVisible = (aVisible) => {
        this.setState({
            visible: aVisible
        })
    }

    componentDidMount() {
        this.props.fetchArquivos();
        this.props.fetchArquivosTipos();
    }

    handleTabClick = (e) => {
        this.setState({
            activeTab: e.target.id,
        })

        this.props.fetchArquivos(1, { tipo: e.target.id });
    }

    handlePageChange = (pageNumber) => {
        this.props.fetchArquivos(pageNumber);
    }

    render() {
        let { activeTab, visible } = this.state;

        return (
            <DashboardLayout >
                <ArchiveFormManager
                    visible={visible}
                    handleModalVisible={(aVisible) => this.handleModalVisible(aVisible)}
                    arquivoTipos={this.props.dataTipos}
                />
                <Row type="flex" justify="center" align="middle" className="page-container archive-page-container">
                    <Card
                        title={
                            <Row type="flex" align="middle" className="tab-container" >
                                <div onClick={this.handleTabClick} id='' className={activeTab == '' ? "tab-item active" : "tab-item"}>Todos</div>
                                <div onClick={this.handleTabClick} id='orcamentos' className={activeTab == 'orcamentos' ? "tab-item active" : "tab-item"}>Orçamentos</div>
                                <div onClick={this.handleTabClick} id='assembleias' className={activeTab == 'assembleias' ? "tab-item active" : "tab-item"}>Assembleias</div>

                                <CreateButton
                                    handleModalVisible={(aVisible) => this.handleModalVisible(aVisible)}
                                    isAdministrator={this.props.isAdministrator}
                                />
                            </Row>
                        }
                        bordered={false}
                        style={{ width: "100%" }}
                    >
                        <ArchiveList handlePageChange={this.handlePageChange} meta={this.props.meta} data={this.props.data} loading={this.props.loading} />
                    </Card>
                </Row>
            </DashboardLayout>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchArquivos: (page, filters) => dispatch(fetchArquivos(page, filters)),
        fetchArquivosTipos: () => dispatch(fetchArquivosTipos()),
    };
};

const mapStateToProps = (state) => {
    return {
        dataTipos: state.arquivo.dataTipos,
        data: state.arquivo.data,
        meta: state.arquivo.meta,
        loading: state.arquivo.loading,
        isAdministrator: state.auth.isAdministrator,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Archive);
