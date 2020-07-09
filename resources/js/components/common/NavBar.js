import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/actions";
import { Row, Col, Affix } from "antd";

let NavBar = ({ isAuthenticated, logout }) => {

    return (
        <Affix className="navbar-container" offsetTop={0}>
            <div className="navbar-background">
                <Row className="navbar" type="flex" align="middle">
                    <Col xs={12} lg={4}>
                        <Row className="navbar-left" type="flex" justify="start">
                            <Link className="logo-container" to="/">
                                <img className="logo" src="/logo.png" />
                            </Link>
                        </Row>
                    </Col>
                    <Col xs={12} lg={20}>
                        <Row className="navbar-right" type="flex" justify="end">

                            <Link className="navbar-link" to="/">círculares <span className="slider"></span>  </Link>
                            <Link className="navbar-link" to="/">notícias <span className="slider"></span>  </Link>
                            <Link className="navbar-link" to="/">contactos <span className="slider"></span>  </Link>
                            {isAuthenticated ? (
                                <Link
                                    className="navbar-link"
                                    to=""
                                    onClick={() => { logout() }}
                                >
                                    Logout
                                </Link>
                            ) :
                                <React.Fragment>
                                    <Link className="navbar-link" to="/login">login <span className="slider"></span></Link>
                                </React.Fragment>
                            }

                        </Row>
                    </Col>
                </Row>
            </div>
        </Affix>

    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);