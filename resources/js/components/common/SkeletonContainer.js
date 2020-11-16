import React, { Fragment } from 'react';
import { Skeleton } from 'antd';

function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const SkeletonContainer = (props) => {
    return (
        <Fragment>
            {props.loading ?
                props.title ?
                    <Skeleton.Input style={{ width: 200 }} size="large" />
                    :
                    props.avatar ?
                        <Skeleton.Avatar style={{ width: 300, height: 300 }} size="large" shape="square" />
                        :
                        <Skeleton.Input style={{ width: randomInt(400, 200), margin: "10px 0px" }} active size="small" />
                : props.children}
        </Fragment>
    );
}

export default SkeletonContainer;


