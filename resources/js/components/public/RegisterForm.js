import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, notification, Row } from "antd";
import { SendOutlined } from '@ant-design/icons';
import { history } from "../../routes";
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
            {
                type: "email",
                message: "Email não é válido."
            }
        ],
    };

    componentDidMount() {
        //
    }

    onFinish = values => {
        let form = this.formRef.current;

        form.validateFields().then(values => {
            this.props.register(values).then(() => {
                form.resetFields();
            });
        });
    }

    onFinishFailed = ({ errorFields }) => {
        form.scrollToField(errorFields[0].name);
    };

    render() {

        return (
            <div className="register-container">
                <Form ref={this.formRef} layout="inline" hideRequiredMark={true} onFinishFailed={this.onFinishFailed}>
                    <Form.Item name="email" rules={this.rules.email}>
                        <Search
                            onSearch={this.onFinish}
                            placeholder="Introduza o seu email..."
                            enterButton={<SendOutlined />}
                            size="large"
                        />

                    </Form.Item>
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
