
import DashboardLayout from '../DashboardLayout';
import React from 'react';
import { Row, Modal, Button } from "antd";
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf'
import { connect } from "react-redux";
import { fetchOrcamentos } from '../../../redux/orcamento/actions';
import PdfDocument from '../../common/PdfDocument';


class Orcamentos extends React.Component {
    constructor(props) {
        super(props);
        this.filters = {};
        this.state = {
            visible: false,
            active: null,
        };
    }

    componentDidMount() {
        this.props.fetchOrcamentos();
    }

    handleModalOpen = (orcamento) => {
        console.log(orcamento)
        this.setState({
            active: `${window.location.origin}${orcamento}`,
            visible: true
        })
    }

    handleModalClose = () => {
        this.setState({ visible: false })
    }

    render() {
        const { data } = this.props;
        const { visible, active } = this.state;
        return (
            <DashboardLayout >
                <div className="orcamento-page-container page-container">

                    <Row type="flex" justify="space-around">

                        <Modal className="modal-container"
                            visible={visible}
                            onCancel={this.handleModalClose}
                            closable={false}
                            footer={null}
                            bodyStyle={{ height: "90%" }}
                            destroyOnClose={true}
                            style={{ top: 25 }}
                        >
                            <PdfDocument pdf={active} />
                        </Modal>

                        <div className="list-container">
                            {Object.values(data).map((element, index) => {
                                return (
                                    <p
                                        className="list-item"
                                        key={element.id}
                                        onClick={() => this.handleModalOpen(element.url)}
                                    >
                                        {element.nome}
                                    </p>
                                );
                            })}
                        </div>



                    </Row>


                </div>

            </DashboardLayout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrcamentos: (filters) => dispatch(fetchOrcamentos(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.orcamento.data,
        loading: state.orcamento.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orcamentos);
