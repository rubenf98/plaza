import React, { Fragment } from 'react';
import { Button, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const CreateButton = (props) => {
    return (
        <Fragment>
            {props.isAdministrator &&
                <Row className="create-button" type="flex" justify="end">
                    <Button
                        shape="circle"
                        icon={<PlusOutlined />}
                        onClick={() => props.handleModalVisible(true)}
                        type="primary"
                    >

                    </Button>
                </Row>
            }
        </Fragment>
    );
}

export default CreateButton;


