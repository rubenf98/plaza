import React from 'react';
import { Modal } from 'antd';

const EditModal = (props) => {
    return (
        <Modal
            visible={props.visible}
            width={"80%"}
            onOk={() => props.onOkEditClick()}
            onCancel={() => props.onCancel()}
        >
            {props.children}
        </Modal>
    );
}

export default EditModal;


