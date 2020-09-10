import React from 'react'
import {
    fetchCirculares,
    fetchCircularTags,
    fetchCircular
} from "../../redux/circular/actions";
import { connect } from "react-redux";
import { Row, Col, Input, Modal } from "antd";
import PaginationControls from "../common/PaginationControls";
import { tagToIcon } from "../../helper";
import PageFooter from "../common/PageFooter";
import LoadingContainer from "../common/LoadingContainer";
import RegisterForm from './RegisterForm';
import CircularModal from './CircularModal';

const { Search } = Input;

class Circulares extends React.Component {
    constructor(props) {
        super(props);
        this.filters = {};
        this.state = {
            visible: false,
            active: null,
        };
    }

    componentDidMount() {
        this.props.fetchCirculares();
        this.props.fetchCircularTags();
    }

    handlePageChange = (pageNumber) => {
        this.props.fetchCirculares(pageNumber);
        console.log('Page: ', pageNumber);
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

    handleCircularClick = (id) => {

        this.props.fetchCircular(id).then((response) => {
            this.setState({
                active: response.value.data.data,
                visible: true
            })
        });

    }

    handleModalClose = () => {
        this.setState({ visible: false })
    }

    render() {
        const { circularData, circularMeta, circularLoading, circularTags, circularLoadingTags } = this.props;
        const { active, visible } = this.state;

        return (
            <div className="page-dimensions">
                <div className="circular-page-container page-container">
                    <Modal className="circular-modal-container"
                        visible={visible}
                        onCancel={this.handleModalClose}
                        closable={false}
                        footer={null}
                        bodyStyle={{ height: "90%" }}
                        destroyOnClose={true}
                        style={{ top: 25 }}
                    >
                        <CircularModal circular={active}></CircularModal>
                    </Modal>
                    <Row type="flex" justify="start">
                        <Col xl={18} md={24} xs={24}>
                            <LoadingContainer loading={circularLoading} flexStart={true}>
                                <Row className="posts-container" gutter={64} >
                                    {
                                        Object.values(circularData).map((el, index) => {
                                            return (
                                                <Col className="post-container" lg={12} md={24} key={index}>
                                                    <div
                                                        onClick={() => this.handleCircularClick(el.id)}
                                                    >
                                                        <img className="image" src={tagToIcon[el.tags[0].nome]}></img>
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

                            <h3 className="filter-title">Recebe novidades:</h3>


                            <RegisterForm></RegisterForm>

                        </Col>
                    </Row>
                </div>
                <footer style={{ display: "block" }} className="layout-footer" >
                    <PageFooter />
                </footer>
            </div>
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Circulares);