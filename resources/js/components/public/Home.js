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