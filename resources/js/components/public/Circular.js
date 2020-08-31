import React from 'react'
import {
    fetchCircular
} from "../../redux/circular/actions";
import { connect } from "react-redux";
import { Row, Col, Button } from "antd";
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf'
import PageFooter from "../common/PageFooter";
import { LeftOutlined, RightOutlined, DownloadOutlined } from '@ant-design/icons';


const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
};


class Circular extends React.Component {

    state = {
        numPages: null,
        pageNumber: 1,
    }

    componentDidMount() {

        this.props.fetchCircular(this.props.match.params.id);
    }

    onDocumentLoadSuccess = (pdf) => {
        console.log(pdf._pdfInfo);
        this.setState({
            numPages: pdf._pdfInfo.numPages,
        })
    }

    changePage = (offset) => {
        this.setState({
            pageNumber: this.state.pageNumber + offset,
        })

    }

    previousPage = () => {
        this.changePage(-1);
    }

    nextPage = () => {
        this.changePage(1);
    }


    render() {
        let { circular } = this.props;
        let { pageNumber, numPages } = this.state;

        return (
            <div className="page-dimensions">
                <div className="single-circular-page-container ">
                    <div className="single-circular-container page-container">
                        <Row type="flex" justify="center" className="pdf-document-container">
                            <Document
                                className="pdf-document"
                                file={`${window.location.origin}/api/pdf/${circular.link}`}
                                onLoadSuccess={this.onDocumentLoadSuccess}
                            >
                                <React.Fragment>

                                    <Button type="primary" shape="circle" icon={<DownloadOutlined />} className="pdf-control download-button" />
                                    <Page pageNumber={pageNumber} className="pdf" />
                                    <Button
                                        className="pdf-control left-button"
                                        type="primary"
                                        disabled={pageNumber <= 1}
                                        onClick={this.previousPage}
                                        shape="circle"
                                        icon={<LeftOutlined />}
                                    />

                                    <div className="pdf-control page-info">
                                        {pageNumber || (numPages ? 1 : '--')} de {numPages || '--'}
                                    </div>

                                    <Button
                                        className="pdf-control right-button"
                                        type="primary"
                                        disabled={pageNumber >= numPages}
                                        onClick={this.nextPage}
                                        shape="circle"
                                        icon={<RightOutlined />}
                                    />
                                </React.Fragment>
                            </Document>
                        </Row>
                    </div>

                    <footer style={{ display: "block" }} className="layout-footer" >
                        <PageFooter />
                    </footer>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCircular: (id) => dispatch(fetchCircular(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        circular: state.circular.current,
        loading: state.circular.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Circular);