import { Row } from 'antd';
import React from 'react'
import PageFooter from '../common/PageFooter';

class Servicos extends React.Component {
    render() {
        return (
            <div className="page-dimensions servicos-page-container">
                <div className="header-container page-container">

                    <Row className="" type="flex" justify="space-between" align="middle">
                        <div className="text-container">
                            <h1 className="title"> <div className="ball small-ball" />Serviços</h1>
                            <p className="description"> Disponibilizamos serviços que permitem o bom funcionamento do edifício, de acordo com os critérios estabelecidos.</p>
                        </div>
                        <div className="img-container">
                            <div className="ball big-ball" />
                            <div className="ball md-ball" />
                            <img className="img" src="/icon/servicos-header.jpg" />
                        </div>
                    </Row>

                </div>
                <footer style={{ display: "block" }} className="layout-footer" >

                    <PageFooter />
                </footer>

            </div >
        );
    }
}



export default Servicos;