import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { Parallax } from 'react-parallax';
import { Document, Page } from 'react-pdf'
import RegisterForm from "./RegisterForm";

const img = "https://worldviews.co/wp-content/uploads/2019/12/featureelevator.jpg";

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
                    <Row className="contact" type="flex" justify="space-around" align="middle">
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

                    <h1 className="section-title">- Círculares</h1>

                    <Row className="section-content" type="flex" justify="space-between" align="middle">
                        {
                            Object.values(placeholder).map(function (el, index) {
                                return (
                                    <div className="circular-container">
                                        <div className="circular-image" key={index}>
                                            <div>
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

                    <h1 className="section-title">Notícias -</h1>



                </div>
            </div>

        );
    }
}

export default Home