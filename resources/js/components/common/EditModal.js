import React from 'react';
import { Modal } from 'antd';

const EditModal = (props) => {
    return (
        <Modal
            visible={props.visible}
            width={props.width ? props.width : "40%"}
            onOk={() => props.onOkEditClick()}
            onCancel={() => props.onCancel()}
        >
            {props.children}
        </Modal>
    );
}

export default EditModal;


