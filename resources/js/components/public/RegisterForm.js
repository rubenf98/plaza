import React from "react";
import { connect } from "react-redux";
import { Form, Input, notification, Row, Button, Col } from "antd";
import { SendOutlined } from '@ant-design/icons';
import { register } from "../../redux/auth/actions";

const { Search } = Input;

const openNotification = (message, description) => {
    notification.success({
        message: message,
        description: description,
        duration: 10,
    });
};

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false
        }
    }

    formRef = React.createRef();

    rules = {
        email: [
            { required: true, message: 'Email é necessário' },
            { type: "email", message: "Email não é válido." }
        ],
    };

    componentDidMount() {
        //
    }

    onFinish = async (values) => {
        let form = this.formRef.current;

        form.validateFields().then(async (values) => {
            await this.props.register(values);
            form.resetFields();
        });
    }

    onFinishFailed = ({ errorFields }) => {
        form.scrollToField(errorFields[0].name);
    };

    render() {
        const { footer } = this.props;

        return (
            <div className="register-container">
                <Form ref={this.formRef} layout="inline" hideRequiredMark={true} onFinishFailed={this.onFinishFailed}>
                    {
                        footer ?
                            <Row style={{ width: "100%" }} type="flex" justify="space-around">
                                <Col span={18}>
                                    <Form.Item name="email" rules={this.rules.email}>
                                        <Input
                                            className="register-input"
                                            type="email"
                                            placeholder="Introduza o seu email..."
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Button
                                        className="register-button"
                                        onClick={this.onFinish}
                                        size="large"
                                    >
                                        Register
                                    </Button>
                                </Col>
                            </Row>
                            :
                            <Form.Item name="email" rules={this.rules.email}>
                                <Search

                                    onSearch={this.onFinish}
                                    placeholder="Introduza o seu email..."
                                    enterButton={<SendOutlined />}
                                    size="large"

                                />
                            </Form.Item>
                    }

                </Form >
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (data) => dispatch(register(data)),
    };
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
