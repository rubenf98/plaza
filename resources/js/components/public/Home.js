import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { Parallax } from 'react-parallax';
import { Document } from 'react-pdf/dist/entry.webpack';
import { Page } from 'react-pdf'
import RegisterForm from "./RegisterForm";
import PageFooter from "../common/PageFooter";

class Home extends React.Component {


    render() {
        const placeholder = [
            {
                "link": "http://localhost:8000/api/pdf/CC"
            },
            {
                "link": "http://localhost:8000/api/pdf/CC"
            },
            {
                "link": "http://localhost:8000/api/pdf/CC"
            },
        ]
        return (
            <div className="page-dimensions">
                <div className="homepage-container">
                    <Parallax
                        bgImage="/bg4.jpg"
                        strength={500}
                    >
                        <Row className="homepage-header" type="flex" align="middle">
                            <div className="header-container">
                                <h1 className="header-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                                <RegisterForm></RegisterForm>
                            </div>
                        </Row>
                    </Parallax>
                    <div className="contact-container">
                        <Row className="contact" type="flex" justify="space-around" align="middle">
                            <Row gutter={8} type="flex" align="middle">
                                <Col className="contact-icon">
                                    <img src="/icon/user.svg"></img>
                                </Col>
                                <Col>
                                    <div className="administrator-container">
                                        <div className="administrator-name">Marco Abreu</div>
                                        <div className="administrator-contact">+ 1235 2355 98</div>
                                    </div>
                                </Col>
                            </Row>

                            <Row gutter={8} type="flex" align="middle">
                                <Col className="contact-icon">
                                    <img src="/icon/user.svg"></img>
                                </Col>
                                <Col>
                                    <div className="administrator-container">
                                        <div className="administrator-name">Maurilio ...</div>
                                        <div className="administrator-contact">+ 1235 2355 98</div>
                                    </div>
                                </Col>
                            </Row>
                        </Row>
                    </div>

                    <div className="homepage-content-container">

                        <h1 className="section-title">Círculares</h1>

                        <Row className="section-content" type="flex" justify="space-between" align="middle">
                            {
                                Object.values(placeholder).map(function (el, index) {
                                    return (
                                        <div className="circular-container">
                                            <div className="circular-image" key={index}>
                                                <div className="pdf-container">
                                                    <Document
                                                        file={el.link}
                                                    >
                                                        <Page pageNumber={2} renderMode="svg" width={300} />
                                                    </Document>
                                                </div>

                                                <div className="circular-info">
                                                    <p className="date">
                                                        02 Maio 2020
                                             </p>

                                                    <h1 className="title">
                                                        Lorem ipsum dolor sit amet
                                            </h1>
                                                </div>

                                            </div>
                                        </div>
                                    )

                                })
                            }
                        </Row>

                        <Row type="flex" justify="center">
                            <Button className="watch-more" type="primary" htmlType="submit">
                                <Link className="watch-more-link" to="/circulares">
                                    Ver mais
                            </Link>
                            </Button>

                        </Row>


                        <h1 className="section-title">Informações</h1>



                    </div>
                </div>
                <footer style={{ display: "block" }} className="layout-footer" >
                    <PageFooter />
                </footer>
            </div>
        );
    }
}

export default Home