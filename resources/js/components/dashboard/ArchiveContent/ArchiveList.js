
import React from 'react';
import { Row, Modal, Col } from "antd";
import PdfDocument from '../../common/PdfDocument';
import PaginationControls from "../../common/PaginationControls";
import LoadingContainer from '../../common/LoadingContainer';

class ArchiveList extends React.Component {
    constructor(props) {
        super(props);
        this.filters = {};
        this.state = {
            visible: false,
            active: null,
        };
    }

    handleModalOpen = (orcamento) => {
        this.setState({
            active: `${window.location.origin}${orcamento}`,
            visible: true
        })
    }

    handleModalClose = () => {
        this.setState({ visible: false })
    }

    render() {
        let { data, meta, loading } = this.props;
        let { visible, active } = this.state;

        return (
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

                <Row className="list-container" gutter={8}>
                    <LoadingContainer loading={loading}>
                        {Object.values(data).map((element, index) => {
                            return (
                                <Col
                                    sm={24}
                                    md={12}
                                    lg={8}
                                    className="list-item"
                                    key={element.id}
                                    onClick={() => this.handleModalOpen(element.url)}
                                >
                                    <Row className="archive">
                                        <Col span={8}>
                                            <img className="image" src={element.tipo.url} alt="file-category-image" />
                                        </Col>
                                        <Col span={16} >
                                            <p className="title">{element.nome}</p>
                                            <p className="date">{element.created_at}</p>
                                        </Col>
                                    </Row>
                                </Col>
                            );
                        })}
                        <Row type="flex" justify="end" className="pagination-container">
                            <PaginationControls meta={meta} handlePageChange={this.props.handlePageChange} />
                        </Row>
                    </LoadingContainer>
                </Row>
            </Row>
        );
    }
}


export default ArchiveList;