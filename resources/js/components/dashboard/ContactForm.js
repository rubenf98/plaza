import React from "react";
import { Form, Button, Input } from "antd";
import { connect } from "react-redux";
import { createContact } from "../../redux/contact/actions";
import { success, error } from "../../redux/notification/actions";

const { TextArea } = Input;

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    rules = {
        message: [
            {
                required: true,
                message: "Mensagem é necessária"
            }
        ]
    };

    onFinish = values => {
        this.props.createContact(values).then(
            res => {
                this.props.success("Mensagem enviada", res.value.data.message);
                this.handleReset();
            },
            err => {
                let messages = [];

                Object.values(err.response.data.errors).map(function (message) {
                    messages.push(message[0])
                })

                this.props.error("Mensagem falhou", messages);
            }
        );
    }

    handleReset = () => {
        this.formRef.current.resetFields();
    };

    render() {

        return (
            <div style={{ width: "100%" }}>
                <Form
                    ref={this.formRef}
                    hideRequiredMark={true}
                    onFinish={this.onFinish}
                >
                    <Form.Item name="message" rules={this.rules.mensagem}>
                        <TextArea maxLength={191} minLength={3} placeholder="Escreva a sua mensagem" rows={6} />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" size="large">
                        Enviar
                    </Button>
                </Form >
            </div >
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        createContact: (data) => dispatch(createContact(data)),
        success: (description, message) => dispatch(success(description, message)),
        error: (description, message) => dispatch(error(description, message)),
    };
};


export default connect(null, mapDispatchToProps)(ContactForm);
