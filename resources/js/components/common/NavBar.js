import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/actions";
import { Row, Col, Affix, Button, Dropdown, Menu } from "antd";
import { MenuOutlined } from '@ant-design/icons';

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
                        <Row className="big-navbar-right" type="flex" justify="end">

                            <Link className="navbar-link" to="/circulares">círculares <span className="slider"></span>  </Link>
                            <Link className="navbar-link" to="/">informações <span className="slider"></span>  </Link>
                            {isAuthenticated ? (
                                <React.Fragment>
                                    <Link
                                        className="navbar-link"
                                        to="/painel"
                                    >
                                        <span className="slider"> </span>Painel Controlo
                                    </Link>
                                    <Link
                                        className="navbar-link"
                                        to=""
                                        onClick={() => { logout() }}
                                    >
                                        <span className="slider"> </span>Logout
                                    </Link>
                                </React.Fragment>
                            ) :
                                <React.Fragment>
                                    <Link className="navbar-link" to="/login">login <span className="slider"></span></Link>
                                </React.Fragment>
                            }


                        </Row>

                        <Row className="small-navbar-right" type="flex" justify="end">



                            <Dropdown
                                overlay={
                                    <Menu>
                                        <Menu.Item key="1">
                                            <Link className="navbar-link" to="/circulares">círculares </Link>
                                        </Menu.Item>
                                        <Menu.Item key="2">
                                            <Link className="navbar-link" to="/">informações</Link>
                                        </Menu.Item>
                                        {isAuthenticated && (
                                            <Menu.Item key="3">
                                                <Link className="navbar-link" to="/painel">Painel Controlo</Link>
                                            </Menu.Item>
                                        )}
                                        <Menu.Item key="4">
                                            {isAuthenticated ? (
                                                <Link className="navbar-link" to="" onClick={() => { logout() }}> Logout</Link>
                                            ) :
                                                <Link className="navbar-link" to="/login">login</Link>
                                            }
                                        </Menu.Item>
                                    </Menu>

                                }
                                placement="bottomRight"
                                trigger={['click']}>
                                <Button
                                    style={{ margin: "15px" }}
                                    type="primary"
                                    onClick={console.log("open")}
                                >
                                    <MenuOutlined />
                                </Button>
                            </Dropdown>
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