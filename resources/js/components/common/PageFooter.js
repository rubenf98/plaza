import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import RegisterForm from '../public/RegisterForm';

let PageFooter = () => {
    return (
        <div className="footer-background">
            <div className="footer-container">
                <div className="footer-title">
                    <h1>Lorem ipsum dolor sit, amet consectetur.</h1>
                </div>
                <div className="footer-register">
                    <RegisterForm footer={true}></RegisterForm>

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
                            administradores
                    </div>
                        <div className="info-content">
                            <p>Marco Abreu</p>
                            <p>Maurilio Fernandes</p>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default PageFooter;