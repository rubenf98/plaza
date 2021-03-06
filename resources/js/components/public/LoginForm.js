import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Row } from "antd";
import { MailOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { login, resetPassword, register } from "../../redux/auth/actions";
import { success, error } from "../../redux/notification/actions";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
            reset: false,
            register: false,
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
        this.setState({ register: this.props.registerMode })
    }

    handleResetClick = () => {
        this.setState({
            reset: !this.state.reset,
        })
    }

    handleRegisterClick = () => {
        this.setState({
            register: !this.state.register
        })
    }

    onFinish = values => {
        !this.props.isAuthenticated &&
            this.formRef.current.validateFields().then(values => {
                if (this.state.reset) {
                    this.props.resetPassword(values).then(
                        res => {
                            this.props.success("Nova palavra-passe", res.value.data.message);
                        },
                        err => {
                            let messages = [];

                            Object.values(err.response.data.message).map(function (message) {
                                messages.push(message[0])
                            })

                            this.props.error("Reset de palavra-passe", messages);
                        }
                    )
                }
                else if (this.state.register) {
                    this.props.register(values).then(
                        () => {
                            this.formRef.resetFields();
                        });

                } else {
                    this.props.login(values);
                }

            });
    }

    onFinishFailed = ({ errorFields }) => {
        form.scrollToField(errorFields[0].name);
    };

    render() {
        var { reset, register } = this.state;
        return (
            <div className="login-form-container">
                <Row className="logo-container" type="flex" justify="center">
                    <img className="logo" src="/logo.webp" alt="logo" />
                </Row>

                <Form className="login-form" ref={this.formRef} onFinish={this.onFinish} hideRequiredMark={true} onFinishFailed={this.onFinishFailed}>
                    <Form.Item hasFeedback name="email" rules={this.rules.email}>
                        <Input
                            prefix={<MailOutlined />}
                            size="large"
                            placeholder="Email"
                        />

                    </Form.Item>
                    {!reset && !register &&
                        <Form.Item hasFeedback name="password" rules={this.rules.password}>
                            <Input.Password
                                size="large"
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />

                        </Form.Item>
                    }

                    <Row type="flex" justify="end">
                        <a className="login-form-forgot" onClick={this.handleResetClick}>
                            {reset ? 'Voltar ao login' : !register && 'Recuperar Palavra-passe'}
                        </a>
                    </Row>

                    <Row type="flex" justify="end">
                        <a className="login-form-forgot" onClick={this.handleRegisterClick}>
                            {register ? 'Voltar ao login' : !reset && 'Registar'}
                        </a>
                    </Row>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            {reset ? 'Recuperar' : register ? 'Registar' : 'Entrar'}
                        </Button>
                    </Form.Item>
                </Form >
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(login(data)),
        resetPassword: (data) => dispatch(resetPassword(data)),
        success: (description, message) => dispatch(success(description, message)),
        error: (description, message) => dispatch(error(description, message)),
        register: (data) => dispatch(register(data)),
    };
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
