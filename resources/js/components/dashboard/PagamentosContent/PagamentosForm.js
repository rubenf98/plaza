import React from "react";
import { Form, Select, Col, Row, Spin } from "antd";

const { Option } = Select;

class PagamentosForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false
        }
    }

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

    render() {
        let { currentFracaos, loading, initialValues } = this.props;

        return (
            <div className="pagamentos-form-container">
                {
                    loading ?
                        <Row type="flex" align="middle" justify="center" style={{ height: "500px" }}>
                            <Spin size="large" />
                        </Row>

                        :

                        <Form
                            ref={this.props.formRef}
                            hideRequiredMark={true}
                            initialValues={initialValues}
                        >
                            {
                                Object.values(currentFracaos).map((element, index) => {
                                    return (
                                        <div key={index}>
                                            <h1>{element.nome}</h1>
                                            <Row>
                                                {
                                                    Object.entries(element.pagamentos).map((el, i) => {
                                                        return (
                                                            <Col key={'inner-' + i} lg={4} xs={8}>
                                                                <Form.Item
                                                                    name={element.id + '_' + el[0]}
                                                                    label={el[0]}

                                                                >
                                                                    <Select style={{ width: "80%", minWidth: "80px" }} >
                                                                        <Option value="pendente">Pendente</Option>
                                                                        <Option value="pago">Pago</Option>
                                                                        <Option value="Divida">Dívida</Option>
                                                                    </Select>

                                                                </Form.Item>
                                                            </Col>
                                                        );

                                                    })
                                                }
                                            </Row>

                                        </div>

                                    );
                                })
                            }

                        </Form >
                }

            </div>
        );
    }
}

export default PagamentosForm;