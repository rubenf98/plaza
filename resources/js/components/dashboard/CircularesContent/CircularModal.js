import React from 'react'
import { Modal, Row } from "antd";
import PdfDocument from '../../common/PdfDocument';
import LoadingContainer from '../../common/LoadingContainer';

let CircularModal = ({ visible, circular, loading, handleModalClose }) => {
    console.log(loading);
    return (
        <Modal className="modal-container"
            visible={visible}
            onCancel={handleModalClose}
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
                            <LoadingContainer loading={loading}>
                                {circular &&
                                    <PdfDocument pdf={`${window.location.origin}/api/pdf/${circular.link}`} />
                                }
                            </LoadingContainer>
                        </Row>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default CircularModal;