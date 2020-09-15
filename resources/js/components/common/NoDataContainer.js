import React, { Fragment } from 'react';
import { Empty, Row } from 'antd';

const NoDataContainer = (props) => {
    return (
        <Fragment>
            {!props.data ?
                <Row
                    type="flex"
                    justify="center"
                    align="middle"
                    style={{ height: "100%", margin: "auto" }}
                >
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        imageStyle={{
                            height: "180",
                        }}
                        description={
                            <span>
                                Não existem dados
                            </span>
                        }
                    />
                </Row>
                : props.children}
        </Fragment>
    );
}

export default NoDataContainer;


