import React from 'react'
import DashboardLayout from './DashboardLayout';
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { connect } from "react-redux";
import ContactForm from './ContactForm';
import { MailOutlined, PhoneOutlined, PushpinOutlined } from '@ant-design/icons';

const CardContent = ({ img, text, button }) => (
    <div>
        <img src={img} alt="iPhone icon" />
        <p className="card-text">{text}</p>
        <Button type="primary">{button}</Button>
    </div>
);

const ContactInfo = ({ icon, content }) => (
    <Row gutter={8} type="flex" align="middle">
        <Col span={4}>{icon}</Col>
        <Col span={20}>
            {content.map((info, index) => (
                <div key={index} className="info-section">
                    <h3>{info.title}</h3>
                    <p>{info.subtitle}</p>
                </div>
            ))}
        </Col>
    </Row>
);

class DashboardHome extends React.Component {
    render() {
        const { user } = this.props;

        return (
            <DashboardLayout>
                <div className="page-container dashboard-home-container">
                    <h1 className="welcome-message">Olá {user.nome ? user.nome : user.email}! Bem vindo de volta ao painel de controlo.</h1>
                    <Row className="section-container" type="flex" justify="space-around" align="middle">
                        <Col lg={5} md={11} sm={24} className="card">
                            <CardContent
                                img="/icon/dashboard/pagamentos.svg"
                                text="Verifique os pagamentos referentes às quotas"
                                button={<Link to="/painel/pagamentos">Pagamentos</Link>}
                            />
                        </Col>
                        <Col lg={5} md={11} sm={24} className="card">
                            <CardContent
                                img="/icon/dashboard/profile.svg"
                                text="Altere dados pessoais e públicos da sua conta"
                                button={<Link to="/painel/profile">Perfil</Link>}
                            />
                        </Col>
                        <Col lg={5} md={11} sm={24} className="card">
                            <CardContent
                                img="/icon/dashboard/document.svg"
                                text="Consulte os documentos referentes ao edifíico"
                                button={<Link to="/painel/arquivo">Arquivo</Link>}
                            />
                        </Col>
                        <Col lg={5} md={11} sm={24} className="card">
                            <CardContent
                                img="/icon/dashboard/circulares.svg"
                                text="Informações relativas ao condomínio"
                                button={<Link to="/painel/circulares">Círculares</Link>}
                            />
                        </Col>
                    </Row>
                    <div className="section-container" >
                        <h2>Entre em contacto connosco</h2>
                        <Row className="section-container" type="flex" justify="space-between" align="top">
                            <Col lg={14} xs={24}><ContactForm></ContactForm></Col>
                            <Col lg={8} xs={24} className="contact-container" >
                                <ContactInfo
                                    icon={<PushpinOutlined className="icon" />}
                                    content={[{ title: "Caminho de Santo António 66, Loja C", subtitle: "2ª a 6ª feira das 9h30 às 15h30" }]}
                                />

                                <ContactInfo
                                    icon={<MailOutlined className="icon" />}
                                    content={[{ title: "edificioplazaii@gmail.com", subtitle: "Envia as tuas dúvidas a qualquer hora" }]}
                                />

                                <ContactInfo
                                    icon={<PhoneOutlined className="icon" />}
                                    content={[
                                        { title: "Marco Abreu", subtitle: "962 860 429" },
                                        { title: "Maurílio Fernandes", subtitle: "966 169 159" },
                                        { title: "Igor Gomes", subtitle: "--- --- ---" },
                                    ]}
                                />
                            </Col>
                        </Row>
                    </div>

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
