import React from 'react'
import PageFooter from "../common/PageFooter";
import { Row, Form, Input, Collapse } from "antd";
import { EuroOutlined, BankOutlined, DashboardOutlined, HomeOutlined, CaretRightOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Category = ({ icon, text }) => (
    <div className="category">
        {icon}
        <h1>{text}</h1>
    </div>
);

class FAQ extends React.Component {
    render() {
        return (
            <div className="page-dimensions">
                <div className="faq-page-container">

                    <Row className="faq-header" type="flex" align="middle">
                        <div className="header page-container">
                            <h1 className="title">Olá, como o podemos ajudar?</h1>
                            <Form>
                                <Form.Item name="search" className="faq-form-item">
                                    <Search
                                        className="search"
                                        placeholder="Pergunte-nos algo..."
                                        size="large"
                                    />
                                </Form.Item>
                            </Form>

                            <h1 className="subtitle">ou escolha uma categoria e encontre o que procura rapidamente</h1>
                        </div>
                    </Row>
                    <div className="page-container">
                        <Row className="category-container" type="flex" justify="space-around" align="middle">
                            <Category icon={<EuroOutlined className="icon" />} text="Pagamentos" />
                            <Category icon={<DashboardOutlined className="icon" />} text="Administradores" />
                            <Category icon={<HomeOutlined className="icon" />} text="Arrendamento" />
                            <Category icon={<BankOutlined className="icon" />} text="Assembleia" />
                        </Row>


                        <h1 className="page-title">Perguntas Frequentes</h1>

                        <Collapse

                            expandIconPosition="right"
                            bordered={false}
                            defaultActiveKey={['1']}
                            accordion
                            className="faq-container"
                            ghost
                        >
                            <Panel
                                header="This is panel header 1"
                                key="1"
                            >
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 2" key="2">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel header 3" key="3">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                <footer style={{ display: "block" }} className="layout-footer" >
                    <PageFooter />
                </footer>

            </div >
        );
    }
}

export default FAQ;