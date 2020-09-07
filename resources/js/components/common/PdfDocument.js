import React from 'react';
import { Button } from "antd";
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf'
import { LeftOutlined, RightOutlined, DownloadOutlined } from '@ant-design/icons';

class PdfDocument extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = (pdf) => {
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
        let { pdf } = this.props;
        let { pageNumber, numPages } = this.state;

        console.log(pdf);

        return (
            <Document
                className="pdf-document"
                file={pdf}
                
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
        );
    }
}

export default PdfDocument;


