import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { history } from "../../routes";
import { login } from "../../redux/auth/actions";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false
        }
    }

    formRef = React.createRef();

    rules = {
        email: [
            {
                required: true,
                message: "Please input your email!"
            },
            {
                type: "email",
                message: "Please input a valid email!"
            }
        ],
        password: [
            {
                required: true,
                message: "Please input your password!"
            }
        ]
    };

    componentDidMount() {
        //
    }

    onFinish = values => {
        !this.props.isAuthenticated ?
            this.formRef.current.validateFields().then(values => {
                this.props.login(values);
            }) :
            console.log("already");
    }

    onFinishFailed = ({ errorFields }) => {
        form.scrollToField(errorFields[0].name);
    };

    render() {

        return (
            <div className="login-container">
                <Form ref={this.formRef} onFinish={this.onFinish} hideRequiredMark={true} onFinishFailed={this.onFinishFailed}>
                    <Form.Item hasFeedback
                        name="email" rules={this.rules.email}
                    >
                        <Input
                            prefix={
                                <MailOutlined />
                            }
                            placeholder="Email"
                        />

                    </Form.Item>
                    <Form.Item hasFeedback
                        name="password" rules={this.rules.password}
                    >
                        <Input
                            prefix={
                                <LockOutlined />
                            }
                            type="password"
                            placeholder="Password"
                        />

                    </Form.Item>

                    <Row type="flex" justify="space-between">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Row>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                    </Button>
                    Or <Link to="register">Create an account</Link>
                    </Form.Item>
                </Form >
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(login(data)),
    };
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
