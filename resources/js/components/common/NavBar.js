import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/actions";
import { Row, Col, Affix, Button, Dropdown, Menu, Avatar } from "antd";
import { MenuOutlined, UserOutlined } from '@ant-design/icons';

let NavBar = ({ isAuthenticated, logout, currentUser }) => {

    return (
        <Affix className="navbar-container" offsetTop={0}>
            <div className="navbar-background">
                <Row className="navbar" type="flex" align="middle">
                    <Col xs={12} lg={6}>

                        <Link className="logo-container" to="/">

                            <Row className="navbar-left" type="flex" justify="start" align="middle" gutter={32}>
                                <img className="logo" src="/logo.png" />
                                <div className="name">
                                    Edifício <span className="subname">Plaza II</span>
                                </div>
                            </Row>
                        </Link>

                    </Col>
                    <Col xs={12} lg={18}>
                        <Row className="big-navbar-right" type="flex" justify="end" align="middle">
                            <Link className="navbar-link" to="/servicos">Serviços <span className="slider"></span>  </Link>
                            <Link className="navbar-link" to="/perguntas">Perguntas Frequentes <span className="slider"></span>  </Link>


                            {isAuthenticated ? (
                                <Dropdown
                                    placement="bottomRight"
                                    overlay={
                                        <Menu>
                                            <Menu.Item key="0">
                                                <Link to="/painel">Painel Controlo</Link>
                                            </Menu.Item>

                                            <Menu.Item key="1">
                                                <Link to="" onClick={() => { logout() }}> Logout</Link>
                                            </Menu.Item>
                                        </Menu>
                                    }
                                >
                                    <Avatar
                                        className="avatar"
                                        onClick={e => e.preventDefault()}
                                        size={"large"}
                                        icon={<img src={currentUser.photo} />}
                                    />
                                </Dropdown>

                            ) :
                                <Link className="navbar-link" to="/login">login</Link>
                            }



                        </Row>

                        <Row className="small-navbar-right" type="flex" justify="end">
                            <Dropdown
                                overlay={
                                    <Menu>
                                        <Menu.Item key="0">
                                            <Link className="navbar-link" to="/servicos">serviços </Link>
                                        </Menu.Item>
                                        <Menu.Item key="1">
                                            <Link className="navbar-link" to="/perguntas">perguntas frequentes </Link>
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
        currentUser: state.auth.currentUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);