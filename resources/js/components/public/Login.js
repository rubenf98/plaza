import React from "react";
import { connect } from "react-redux";
import { updateMe, recoverPassword } from "../../redux/auth/actions";
import LoginForm from "./LoginForm";
import { success, error } from "../../redux/notification/actions";

class Login extends React.Component {
    componentDidMount() {
        const token = new URLSearchParams(this.props.location.search).get('token');

        token && (
            this.props.recoverPassword(token).then(
                res => {
                    this.props.success("Palavra-passe recuperada!", res.value.data.message);
                },
                err => {
                    this.props.error("Recuperação falhou", err.response.data.message);
                }
            ));
    }
    render() {
        return (
            <div className="login-container">
                <LoginForm></LoginForm>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateMe: (data) => dispatch(updateMe(data)),
        recoverPassword: (data) => dispatch(recoverPassword(data)),
        success: (description, message) => dispatch(success(description, message)),
        error: (description, message) => dispatch(error(description, message)),
    };
};


export default connect(null, mapDispatchToProps)(Login);
