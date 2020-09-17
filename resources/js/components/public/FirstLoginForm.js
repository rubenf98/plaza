import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Button, Cascader, Row } from "antd";
import { UserOutlined, LockOutlined, KeyOutlined } from '@ant-design/icons';
import { updateMe } from "../../redux/auth/actions";
import { fetchBlocoSelector } from "../../redux/bloco/actions";
import { history } from "../../routes";
import LoadingContainer from "../common/LoadingContainer";

class FirstLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
            options: null,
            loadingOptions: true
        }
    }

    formRef = React.createRef();

    rules = {
        nome: [
            {
                required: true,
                message: "O nome é um campo obrigatório!"
            },
        ],
        password: [
            {
                required: true,
                message: "A password é um campo obrigatório!"
            }
        ],
        fracao: [
            {
                required: true,
                message: "É necessário indicar a sua fração!"
            }
        ]
    };

    componentDidMount() {
        let options = [];
        let children = [];

        this.props.fetchBlocoSelector().then((response) => {
            response.action.payload.data.data.forEach((bloco) => {
                bloco.fracaos.forEach((fracao) => {
                    children.push({
                        value: fracao.id,
                        label: fracao.nome,
                        disabled: fracao.user ? true : false
                    });
                });
                options.push({
                    value: "bloco-" + bloco.id,
                    label: bloco.nome,
                    children: children,
                });
                children = [];

                this.setState({
                    options: options,
                    loadingOptions: false
                });
            });
        });
    }

    onFinish = values => {
        this.formRef.current.validateFields().then(values => {
            this.props.updateMe(values).then((response) => {
                history.push("/painel");
            });
        });
    }

    onFinishFailed = ({ errorFields }) => {
        form.scrollToField(errorFields[0].name);
    };

    render() {
        const { loadingOptions, options } = this.state;

        return (
            <div className="first-login-form-container">
                <Form ref={this.formRef} onFinish={this.onFinish} hideRequiredMark={true} onFinishFailed={this.onFinishFailed}>
                    <LoadingContainer loading={loadingOptions}>
                        <Form.Item hasFeedback
                            name="nome" rules={this.rules.nome}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Nome"
                            />

                        </Form.Item>

                        <Form.Item hasFeedback
                            name="password" rules={this.rules.password}
                        >
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password"
                            />

                        </Form.Item>

                        <Form.Item hasFeedback name="fracao" rules={this.rules.fracao}>

                            <Cascader
                                placeholder="Indique a sua fração"
                                expandTrigger="hover"
                                options={options}
                            />

                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="first-login-form-button">
                                Continuar
                        </Button>
                        </Form.Item>
                        <div className="first-login-skip">
                            <Link to="/painel">saltar passo...</Link>
                        </div>
                    </LoadingContainer>
                </Form >
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateMe: (data) => dispatch(updateMe(data)),
        fetchBlocoSelector: () => dispatch(fetchBlocoSelector()),
    };
};

const mapStateToProps = (state) => {
    return {
        selector: state.bloco.selector,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FirstLogin);
