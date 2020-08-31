import React from 'react'
import {
    fetchCirculares
} from "../../redux/circular/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { Parallax } from 'react-parallax';
import RegisterForm from "./RegisterForm";
import PageFooter from "../common/PageFooter";
import LoadingContainer from "../common/LoadingContainer";
import { InfoCircleOutlined, QuestionCircleOutlined, FileOutlined, CommentOutlined } from '@ant-design/icons';

const AboutInfoContent = ({ img, text }) => (
    <Col sm={24} md={12} >
        <Row type="flex" align="middle" className="info-container">
            {img}
            <div className="text">{text}</div>
        </Row>
    </Col>
);

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                limit: 3
            }
        }
    }

    componentDidMount() {
        this.props.fetchCirculares(1, this.state.filters);
    }

    render() {
        const { circularData, circularLoading } = this.props;

        return (
            <div className="page-dimensions">
                <div className="homepage-container">
                    <Parallax
                        bgImage="/bg4.jpg"
                        strength={500}
                    >
                        <Row className="homepage-header" type="flex" align="middle">
                            <div className="header-container">
                                <h1 className="header-title">A melhor gestão é realizada por quem conhece</h1>
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
                                        <div className="administrator-contact">962 860 429</div>
                                    </div>
                                </Col>
                            </Row>

                            <Row gutter={8} type="flex" align="middle">
                                <Col className="contact-icon">
                                    <img src="/icon/user.svg"></img>
                                </Col>
                                <Col>
                                    <div className="administrator-container">
                                        <div className="administrator-name">Maurílio Fernandes</div>
                                        <div className="administrator-contact">966 169 159</div>
                                    </div>
                                </Col>
                            </Row>
                        </Row>
                    </div>
                    <div className="homepage-content-container">
                        <Row className="about-container" gutter={32} type="flex" align="middle">
                            <Col lg={12} md={24}>
                                <div className="about-content">
                                    <h1 className="subtitle"> Administração Plaza II</h1>
                                    <h2 className="title"> Condomínio privado gerido por residentes!</h2>
                                    <p>O seu condomínio é administrado cumprindo todos os requisitos legais e administrativos. As tarefas atribuídas ao administrador são desempenhadas com disciplina e atempadamente. </p>
                                    <Row gutter={12}>
                                        <AboutInfoContent
                                            img={<InfoCircleOutlined className="icon" />}
                                            text="Informação financeira e contabilística do condomínio"
                                        />
                                        <AboutInfoContent
                                            img={<QuestionCircleOutlined className="icon" />}
                                            text="Secção de perguntas e respostas mais frequentes"
                                        />
                                        <AboutInfoContent
                                            img={<CommentOutlined className="icon" />}
                                            text="Comunicaçao por e-mail e contacto telefónico"
                                        />
                                        <AboutInfoContent
                                            img={<FileOutlined className="icon" />}
                                            text="Apresentação de orçamentos pré-estabelecidos"
                                        />
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={12} md={24}>
                                <img className="about-image" src="/icon/home-about.jpg">
                                </img>
                            </Col>

                        </Row>
                    </div>

                    <div className="homepage-content-container">

                        <h1 className="section-title">Círculares</h1>

                        <Row className="section-content" type="flex" justify="space-between" align="middle">
                            <LoadingContainer loading={circularLoading} >
                                {
                                    Object.values(circularData).map(function (el, index) {
                                        return (

                                            <Link
                                                className="circular-container"
                                                key={index}
                                                to={`/circulares/${el.id}`}

                                            >
                                                <div className="circular-image-container" key={index}>

                                                    <img className="image" src={`${window.location.origin}/api/image/${el.link}`}></img>

                                                    <div className="circular-info">
                                                        <p className="date">
                                                            {el.created_at}
                                                        </p>

                                                        <h1 className="title">
                                                            {el.titulo}
                                                        </h1>
                                                    </div>

                                                </div>
                                            </Link>


                                        )

                                    })
                                }
                            </LoadingContainer>
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
const mapDispatchToProps = dispatch => {
    return {
        fetchCirculares: (page, filters) => dispatch(fetchCirculares(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        circularData: state.circular.data,
        circularLoading: state.circular.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);