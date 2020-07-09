import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

let PageFooter = () => {
    return (
        <div className="footer-background">
            <div className="footer-container">
                <div className="footer-title">
                    <h1>Lorem ipsum dolor sit, amet consectetur.</h1>
                </div>
                <div class="footer-register">
                    <Row type="flex" justify="space-around">
                        <Col span={16}>
                            <input className="register-input" type="text" name="email" value="" />
                        </Col>
                        <Col span={4}>
                            <button className="register-button" type="submit">Subscribe</button>
                        </Col>
                    </Row>
                </div>

                <Row className="footer-info" type="flex" justify="space-around">
                    <div className="info-container">
                        <div className="info-title">
                            contactos
                    </div>
                        <div className="info-content">
                            <p>example@example.com</p>
                            <p>+969 872 128</p>
                        </div>
                    </div>
                    <div className="info-container">
                        <div className="info-title">
                            links
                    </div>
                        <div className="info-content">
                            <p>noticias</p>
                            <p>circulares</p>
                        </div>
                    </div>
                    <div className="info-container">
                        <div className="info-title">
                            contactos
                    </div>
                        <div className="info-content">
                            <p>example@example.com</p>
                            <p>+969 872 128</p>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default PageFooter;