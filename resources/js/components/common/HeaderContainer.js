import React from 'react';
import { Row } from 'antd';

const HeaderContainer = (props) => {
    return (
        <div className="common-header-container">
            <div className="header-container page-container">
                <Row className="" type="flex" justify="space-between" align="middle">
                    <div className="text-container">
                        <h1 className="title"> <div className="ball small-ball" />{props.title}</h1>
                        {props.content}
                    </div>
                    <div className="img-container">
                        <div className="ball big-ball" />
                        <div className="ball md-ball" />
                        <img className="img" src={props.img} alt="header" />
                    </div>
                </Row>

            </div>
        </div>
    );
}

export default HeaderContainer;


