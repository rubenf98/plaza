import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateMe } from "../../redux/auth/actions";
import LoginForm from "./LoginForm";

class Login extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        //
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
    };
};


export default connect(null, mapDispatchToProps)(Login);
