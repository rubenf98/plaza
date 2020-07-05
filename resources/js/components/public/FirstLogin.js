import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateMe } from "../../redux/auth/actions";
import FirstLoginForm from "./FirstLoginForm";

class FirstLogin extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        //
    }

    render() {
        return (
            <div className="first-login-container">
                <div className="first-login-header">
                    <h1 className="first-login-title">Bem vindo ao Plaza II</h1>
                    <h3 className="first-login-subtitle">Para começar, fala-nos sobre ti.</h3>
                </div>
                <FirstLoginForm></FirstLoginForm>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateMe: (data) => dispatch(updateMe(data)),
    };
};


export default connect(null, mapDispatchToProps)(FirstLogin);
