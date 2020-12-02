
import React from 'react';
import { Row, Modal, Col } from "antd";
import PdfDocument from '../../common/PdfDocument';
import PaginationControls from "../../common/PaginationControls";
import LoadingContainer from '../../common/LoadingContainer';
import NoDataContainer from '../../common/NoDataContainer';
import moment from 'moment';


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
            active: `${window.location.origin}/api/pdf${orcamento}`,
            visible: true
        })
    }

    handleModalClose = () => {
        this.setState({ visible: false })
    }

    render() {
        let { data, meta, loading } = this.props;
        let { visible, active } = this.state;
        console.log(data.length)

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
                        <NoDataContainer data={data.length > 0 && true}>
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
                                        <Row className="archive" gutter={16}>
                                            <Col span={8}>
                                                <img className="image" src={element.tipo.url} alt="file-category-image" />
                                            </Col>
                                            <Col span={16} >
                                                <p className="title">{element.nome}</p>
                                                <p className="date">{moment(element.created_at).format('D MMM YYYY')}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                );
                            })}

                            <Row type="flex" justify="end" className="pagination-container">
                                <PaginationControls meta={meta} handlePageChange={this.props.handlePageChange} />
                            </Row>
                        </NoDataContainer>
                    </LoadingContainer>
                </Row>
            </Row>
        );
    }
}


export default ArchiveList;