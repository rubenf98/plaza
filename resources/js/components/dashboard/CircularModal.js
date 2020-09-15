import React from 'react'
import { Row } from "antd";
import PdfDocument from '../common/PdfDocument';
import LoadingContainer from '../common/LoadingContainer';

let CircularModal = ({ circular, loading }) => {
    return (
        <div>
            <div className="single-circular-page-container ">
                <div className="single-circular-container">
                    <Row type="flex" justify="center" className="pdf-document-container">
                        <LoadingContainer loading={loading}>
                            <PdfDocument pdf={`${window.location.origin}/api/pdf/${circular.link}`}></PdfDocument>
                        </LoadingContainer>
                    </Row>
                </div>
            </div>
        </div>

    );
};

export default CircularModal;