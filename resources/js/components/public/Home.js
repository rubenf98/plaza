import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { Parallax } from 'react-parallax';
import RegisterForm from "./RegisterForm";

class Home extends React.Component {
    render() {
        return (
            <div className="homepage-container">
                <Parallax
                    bgImage="https://colorlib.com/preview/theme/publishingcompany/images/bg_1.jpg"
                    strength={400}
                >
                    <Row className="homepage-header" type="flex" align="middle">
                        <div className="header-container">
                            <h1 className="header-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                            <RegisterForm></RegisterForm>
                        </div>
                    </Row>
                </Parallax>
                <div className="contact-container">
                    <Row className="contact" type="flex" justify="space-between" align="middle">
                        <Row className="contact-icon" type="flex">
                            <Col>
                                <div>1</div>
                            </Col>
                            <Col>
                                <div>2</div>
                            </Col>
                        </Row>

                        <Row className="contact-icon" type="flex">
                            <Col>
                                <div>1</div>
                            </Col>
                            <Col>
                                <div>2</div>
                            </Col>
                        </Row>

                        <Row className="contact-icon" type="flex">
                            <Col>
                                <div>1</div>
                            </Col>
                            <Col>
                                <div>2</div>
                            </Col>
                        </Row>

                    </Row>
                </div>

                <div className="homepage-content-container">

                    <h1 className="section-title">Círculares</h1>

                    <h1 className="section-title">Notícias</h1>

                </div>
            </div>

        );
    }
}

export default Home