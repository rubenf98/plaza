import { Row, Col } from 'antd';
import React from 'react'
import PageFooter from '../common/PageFooter';
import { servicos, servicoToIcon } from '../../helper'
import HeaderContainer from '../common/HeaderContainer';

class Servicos extends React.Component {
    render() {
        return (
            <div className="page-dimensions servicos-page-container">
                <HeaderContainer
                    title="Serviços"
                    content={<p className="description"> Disponibilizamos serviços que permitem o bom funcionamento do edifício, de acordo com os critérios estabelecidos.</p>}
                    img="/icon/servicos-header.webp"
                />

                <Row className="content-container page-container">
                    {
                        Object.entries(servicos).map((element, index) => {
                            {
                                return (
                                    <Row key={index} type="flex" justify="start" align="middle" className="servico-section">
                                        <Col span={8} order={index % 2 ? 2 : 1}>
                                            <img className="image" src={servicoToIcon[element[0]]} alt="serviço" />
                                        </Col>
                                        <Col span={16} order={index % 2 ? 1 : 2} className="list">
                                            <h1 className="title">{element[0]}</h1>
                                            <div className="title-border"></div>
                                            {
                                                element[1].map((el, i) => {
                                                    return (
                                                        <div className="item" key={i}>
                                                            <h3>{el}</h3>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Col>
                                    </Row>
                                );
                            }
                        })
                    }

                </Row>



                <footer style={{ display: "block" }} className="layout-footer" >
                    <PageFooter />
                </footer>

            </div >
        );
    }
}



export default Servicos;