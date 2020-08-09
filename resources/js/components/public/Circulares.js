import React from 'react'
import {
    fetchCirculares
} from "../../redux/circular/actions";
import { connect } from "react-redux";
import { Row, Col, Spin } from "antd";
import PaginationControls from "../common/PaginationControls";
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf'
import PageFooter from "../common/PageFooter";

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
                            {circularLoading ?
                                <Row type="flex" justify="center" align="middle" style={{ height: "100%" }}>
                                    <Spin size="large" />
                                </Row>
                                :
                                <React.Fragment>
                                    <Row className="posts-container" type="flex" justify="center" align="middle">
                                        {
                                            Object.values(circularData).map(function (el, index) {
                                                return (
                                                    <div className="post-container" key={index}>
                                                        <div className="pdf-container">
                                                            <Document
                                                                file={`${window.location.origin}/api/pdf/${el.link}`}
                                                            >
                                                                <Page pageNumber={1} renderMode="svg" height={350} />
                                                            </Document>
                                                        </div>

                                                        <div className="pdf-info">
                                                            <h1 className="title">
                                                                {el.titulo}
                                                            </h1>

                                                            <p className="date">
                                                                {el.created_at}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )

                                            })
                                        }

                                    </Row>

                                    <Row type="flex" justify="center" align="middle">
                                        <PaginationControls meta={circularMeta} handlePageChange={this.handlePageChange} />
                                    </Row>
                                </React.Fragment>
                            }


                        </Col>

                        <Col xl={6} md={0} xs={0}>
                            <h3 className="filter-title">
                                Filtrar por:
                        </h3>

                            <ul className="filter-container">
                                <li className="filter">Obras</li>
                                <li className="filter">Limpezas</li>
                                <li className="filter">Avisos</li>
                                <li className="filter">Manutenção</li>
                                <li className="filter">Reuniões</li>
                                <li className="filter">Outros</li>
                            </ul>

                            <h3 className="filter-title">
                                Recebe novidades
                        </h3>

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