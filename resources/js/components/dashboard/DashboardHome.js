import React from 'react'
import DashboardLayout from './DashboardLayout';
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { connect } from "react-redux";

const CardContent = ({ img, text, button }) => (
    <div>
        <img src={img} alt="iPhone icon" />
        <p className="card-text">{text}</p>
        <Button type="primary">{button}</Button>
    </div>
);

class DashboardHome extends React.Component {
    render() {
        const { user } = this.props;

        return (
            <DashboardLayout>
                <div className="page-container dashboard-home-container">
                    <h1 className="welcome-message">Olá {user.nome}! Bem vindo de volta ao painel de controlo.</h1>
                    <Row className="card-container" type="flex" justify="space-around" align="middle">
                        <Col lg={7} sm={24} className="card">
                            <CardContent
                                img="/icon/dashboard/pagamentos.svg"
                                text="Verifica os pagamentos referentes a quotas do edíficio"
                                button={<Link to="/painel/pagamentos">Pagamentos</Link>}
                            />
                        </Col>
                        <Col lg={7} sm={24} className="card">
                            <CardContent
                                img="/icon/dashboard/orcamentos.svg"
                                text="Consulta os valores relativos a depesas comuns do edifício"
                                button={<Link to="/painel/orcamentos">Orçamentos</Link>}
                            />
                        </Col>
                        <Col lg={7} sm={24} className="card">
                            <CardContent
                                img="/icon/dashboard/fracao.svg"
                                text="Consulte informação pertinente relativa à sua fração"
                                button="Fração"
                            />
                        </Col>
                        <Col lg={7} sm={24} className="card">
                            <CardContent
                                img="/icon/dashboard/profile.svg"
                                text="Altere dados pessoais e públicos da sua conta privada"
                                button={<Link to="/painel/profile">Perfil</Link>}
                            />
                        </Col>
                        <Col lg={7} sm={24} className="card">
                            <CardContent
                                img="/icon/dashboard/document.svg"
                                text="Consulte todo o conteúdo referente às assembleias do edifíico"
                                button={<Link to="/painel/contas">Assembleias</Link>}
                            />
                        </Col>
                        <Col lg={7} sm={24} className="card">
                            <CardContent
                                img="/icon/dashboard/circulares.svg"
                                text="Informações relativas a acontecimentos no condomínio"
                                button={<Link to="/painel/circulares">Círculares</Link>}
                            />
                        </Col>
                    </Row>
                </div>
            </DashboardLayout>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
    };
};

export default connect(mapStateToProps, null)(DashboardHome);
