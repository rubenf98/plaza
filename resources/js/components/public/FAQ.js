import React, { Fragment } from 'react'
import PageFooter from "../common/PageFooter";
import { Row, Form, Input, Collapse } from "antd";
import { EuroOutlined, BankOutlined, DashboardOutlined, HomeOutlined } from '@ant-design/icons';
import { faqCategories } from '../../helper'
import HeaderContainer from '../common/HeaderContainer';

const { Search } = Input;
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const questions = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];




class FAQ extends React.Component {
    state = {
        activeCategory: null
    }

    handleCategoryClick = (text) => {
        this.setState({
            activeCategory: text
        })
    }

    render() {
        const Category = ({ icon, text }) => (
            <div
                className={`category ${this.state.activeCategory == text && "active-category"}`}
                onClick={() => this.handleCategoryClick(text)}
            >
                {icon}
                <h1 className="title"> {text}</h1>
            </div >
        );

        const categoryIcon = {
            'pagamentos': <EuroOutlined className="icon" />,
            "administradores": <DashboardOutlined className="icon" />,
            "arrendamento": <HomeOutlined className="icon" />,
            "assembleia": <BankOutlined className="icon" />,
        };

        return (
            <div className="page-dimensions">
                <div className="faq-page-container">

                    <HeaderContainer
                        title="Perguntas & Respostas"
                        content={
                            <Fragment>
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
                            </Fragment>
                        }
                        img="/icon/faq-header.webp"
                    />

                    <div className="page-container">
                        <Row className="category-container" type="flex" justify="space-around" align="middle">
                            {faqCategories.map((element) => {
                                return (<Category key={element} icon={categoryIcon[element]} text={element} />)
                            })}
                        </Row>

                        <h1 className="page-title">Perguntas Frequentes</h1>

                        <Collapse
                            expandIconPosition="right"
                            bordered={false}
                            accordion
                            className="faq-container"
                        >
                            {questions.map((element, index) => {
                                return (<Panel
                                    header="This is panel header 1"
                                    key={index}
                                >
                                    <p>{text}</p>
                                </Panel>)
                            })}

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