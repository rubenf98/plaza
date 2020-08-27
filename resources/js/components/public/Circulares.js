import React from 'react'
import {
    fetchCirculares
} from "../../redux/circular/actions";
import { connect } from "react-redux";
import { Row, Col, Spin } from "antd";
import PaginationControls from "../common/PaginationControls";
import { Link } from "react-router-dom";
import PageFooter from "../common/PageFooter";
import LoadingContainer from "../common/LoadingContainer";

class Circulares extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchCirculares();
    }

    handlePageChange = (pageNumber) => {
        this.props.fetchCirculares(pageNumber);
        console.log('Page: ', pageNumber);
    }

    render() {
        const { circularData, circularMeta, circularLoading } = this.props;

        return (
            <div className="page-dimensions">
                <div className="circular-page-container page-container">
                    <Row>
                        <Col xl={18} md={24} xs={24}>
                            <LoadingContainer loading={circularLoading}>
                                <Row className="posts-container" type="flex" justify="center" align="bottom">
                                    {
                                        Object.values(circularData).map(function (el, index) {
                                            return (
                                                <Link
                                                    className="post-container"
                                                    key={index}
                                                    to={`/circulares/${el.id}`}

                                                >
                                                    <img className="image" src={`${window.location.origin}/api/image/${el.link}`}></img>
                                                    <div className="info">
                                                        <h1 className="title">
                                                            {el.titulo}
                                                        </h1>

                                                        <p className="date">
                                                            {el.created_at}
                                                        </p>
                                                    </div>

                                                </Link>

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
                            <h3 className="filter-title">Filtrar por:</h3>

                            <ul className="filter-container">
                                <li className="filter">Obras</li>
                                <li className="filter">Limpezas</li>
                                <li className="filter">Avisos</li>
                                <li className="filter">Manutenção</li>
                                <li className="filter">Reuniões</li>
                                <li className="filter">Outros</li>
                            </ul>

                            <h3 className="filter-title">Recebe novidades</h3>

                            <ul>
                                <li>Form</li>
                            </ul>
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
    };
};

const mapStateToProps = (state) => {
    return {
        circularData: state.circular.data,
        circularMeta: state.circular.meta,
        circularLoading: state.circular.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Circulares);