import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import RegisterForm from '../public/RegisterForm';

let PageFooter = () => {
    return (
        <div className="footer-background">
            <div className="footer-container">
                <div className="footer-title">
                    <h1>Administração e gestão realizada por residentes com apoio administrativo e jurídico do Consultório do Condomínio </h1>
                </div>
                <div className="footer-register">
                    <RegisterForm footer={true}></RegisterForm>
                </div>

                <Row className="footer-info" type="flex" justify="space-around">
                    <div className="info-container">
                        <div className="info-title">contactos</div>
                        <div className="info-content">
                            <p>edificioplazaii@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-container">
                        <div className="info-title">gabinete apoio</div>
                        <div className="info-content">
                            <p>Caminho de Santo António 66 Loja C, 9020-001 Funchal</p>
                            <p>De 2ª a 6ª feira das 9h30 às 15h30</p>
                        </div>
                    </div>
                    <div className="info-container">
                        <div className="info-title">administradores</div>
                        <div className="info-content">
                            <p>João Alves</p>
                            <p>Marco Abreu</p>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default PageFooter;