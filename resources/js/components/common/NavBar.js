import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/actions";
import { Row } from "antd";

let NavBar = ({ isAuthenticated, logout }) => {

    return (
        <Row type="flex" justify="space-around">
            <Link to="/">Home</Link>

            {isAuthenticated ? (
                <Link
                    to=""
                    onClick={() => { logout() }}
                >
                    Logout
                </Link>
            ) :
                <React.Fragment>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </React.Fragment>
            }
        </Row>

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