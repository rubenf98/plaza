import React, { Fragment } from 'react';
import { Spin, Row } from 'antd';

const LoadingContainer = (props) => {
    return (
        <Fragment>
            {props.loading ?
                <Row
                    type="flex"
                    justify="center"
                    align="middle"
                    style={{ height: "100%", margin: "auto", minHeight: "300px" }}
                >
                    <Spin size="large" />
                </Row>
                : props.children}
        </Fragment>
    );
}

export default LoadingContainer;


