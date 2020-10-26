import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Row } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { login } from "../../redux/auth/actions";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
            reset: false
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

    handleResetClick = () => {
        this.setState({
            reset: !this.state.reset
        })
    }

    onFinish = values => {
        !this.props.isAuthenticated &&
            this.formRef.current.validateFields().then(values => {
                this.props.login(values);
            });
    }

    onFinishFailed = ({ errorFields }) => {
        form.scrollToField(errorFields[0].name);
    };

    render() {
        var { reset } = this.state;
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
                    {!reset &&
                        <Form.Item hasFeedback name="password" rules={this.rules.password}>
                            <Input
                                size="large"
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password"
                            />

                        </Form.Item>
                    }

                    <Row type="flex" justify="end">
                        <a className="login-form-forgot" onClick={this.handleResetClick}>
                            {reset ? 'Voltar ao login' : 'Recuperar Palavra-passe'}
                        </a>
                    </Row>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            {reset ? 'Recuperar' : 'Entrar'}
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
    };
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
