import React from 'react'
import { Modal, Row, Col, Input } from "antd";
import PdfDocument from '../../common/PdfDocument';
import LoadingContainer from '../../common/LoadingContainer';
import PaginationControls from "../../common/PaginationControls";
import NoDataContainer from '../../common/NoDataContainer';
import { connect } from "react-redux";
import {
    fetchCirculares,
    fetchCircularTags,
    fetchCircular
} from "../../../redux/circular/actions";


const { Search } = Input;

class CircularList extends React.Component {
    constructor(props) {
        super(props);
        this.filters = {};
        this.state = {
            circular: false,
            active: null,
            visible: false
        };
    }

    componentDidMount() {
        this.props.fetchCirculares();
        this.props.fetchCircularTags();
    }


    handleCircularClick = (id) => {
        this.props.fetchCircular(id).then((response) => {
            this.setState({
                circular: response.value.data.data,
                visible: true
            })
        });
    }

    handlePageChange = (pageNumber) => {
        this.props.fetchCirculares(pageNumber);
    }

    clearTagFilter = () => {
        this.filters = {
            ...this.filters,
            tag: null
        }
        this.props.fetchCirculares(1);
    }

    handleFilterClick = (e) => {
        this.filters = {
            ...this.filters,
            tag: e.target.id
        }
        this.props.fetchCirculares(1, this.filters);
    }

    handleSearch = (e) => {
        this.filters = {
            search: e
        }
        this.props.fetchCirculares(1, this.filters);
    }

    handleModalClose = () => {
        this.setState({ visible: false })
    }

    render() {
        let { circularData, circularMeta, circularLoading, circularTags, circularLoadingTags } = this.props;
        let { visible, circular } = this.state;
        return (
            <div>
                <Modal className="modal-container"
                    visible={visible}
                    onCancel={this.handleModalClose}
                    closable={false}
                    footer={null}
                    bodyStyle={{ height: "90%" }}
                    destroyOnClose={true}
                    style={{ top: 25 }}
                >
                    <div>
                        <div className="single-circular-page-container ">
                            <div className="single-circular-container">
                                <Row type="flex" justify="center" className="pdf-document-container">
                                    <LoadingContainer loading={false}>
                                        {circular &&
                                            <PdfDocument pdf={`${window.location.origin}/api/pdf${circular.link}`} />
                                        }
                                    </LoadingContainer>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Modal>

                <Row type="flex" justify="start">
                    <Col xl={18} md={24} xs={24}>
                        <LoadingContainer loading={circularLoading} flexStart={true}>
                            <NoDataContainer data={circularData.length > 0 && true}>
                                <Row className="posts-container" gutter={64} >
                                    {
                                        Object.values(circularData).map((el, index) => {
                                            return (
                                                <Col className="post-container" lg={12} md={24} key={index}>
                                                    <div
                                                        onClick={() => this.handleCircularClick(el.id)}
                                                    >
                                                        <img className="image" src={el.tags[0].image}></img>
                                                        <div className="info">
                                                            <h1 className="title">
                                                                {el.titulo}
                                                            </h1>

                                                            <p className="date">
                                                                {el.created_at} • <span className="tag">{el.tags[0].nome}</span>
                                                            </p>
                                                        </div>

                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>

                                <Row type="flex" justify="center" align="middle">
                                    <PaginationControls meta={circularMeta} handlePageChange={this.handlePageChange} />
                                </Row>
                            </NoDataContainer>
                        </LoadingContainer>
                    </Col>

                    <Col xl={6} md={0} xs={0}>
                        <Search
                            onSearch={this.handleSearch}
                            placeholder="Digite o que procura"
                            size="large"
                            className="filter-search"
                            onClick={this.info}
                        />

                        <h3 className="filter-title">Filtrar por:</h3>
                        <LoadingContainer loading={circularLoadingTags} >
                            <ul className="filter-container">
                                <li
                                    className="filter"
                                    onClick={this.clearTagFilter}
                                >
                                    Todos ({circularMeta['all']})
                                    </li>
                                {
                                    Object.values(circularTags).map((element) => {
                                        return (<li
                                            className="filter"
                                            id={element.nome}
                                            key={element.id}
                                            onClick={this.handleFilterClick}
                                        >
                                            {element.nome} ({circularMeta[element.nome]})
                                        </li>)
                                    })

                                }
                            </ul>
                        </LoadingContainer>
                    </Col>
                </Row>
            </div>
        );
    }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchCirculares: (page, filters) => dispatch(fetchCirculares(page, filters)),
        fetchCircularTags: () => dispatch(fetchCircularTags()),
        fetchCircular: (id) => dispatch(fetchCircular(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        circularData: state.circular.data,
        circularMeta: state.circular.meta,
        circularLoading: state.circular.loading,
        circular: state.circular.current,

        circularLoadingTags: state.circular.loadingTags,
        circularTags: state.circular.tags,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CircularList);