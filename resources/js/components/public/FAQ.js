import React, { Fragment } from 'react'
import PageFooter from "../common/PageFooter";
import { connect } from "react-redux";
import { Row, Form, Input, Collapse } from "antd";
import { EuroOutlined, BankOutlined, DashboardOutlined, HomeOutlined } from '@ant-design/icons';
import HeaderContainer from '../common/HeaderContainer';
import { fetchPerguntaTipos } from "../../redux/perguntaTipos/actions";
import { fetchPerguntas } from "../../redux/pergunta/actions";

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

        this.props.fetchPerguntas({ tipo: text });
    }

    componentDidMount() {
        this.props.fetchPerguntaTipos();
        this.props.fetchPerguntas();
    }

    render() {
        var { data, perguntas } = this.props;

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
            'Pagamentos': <EuroOutlined className="icon" />,
            "Administradores": <DashboardOutlined className="icon" />,
            "Arrendamento": <HomeOutlined className="icon" />,
            "Assembleia": <BankOutlined className="icon" />,
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
                            {data.map((element) => {
                                return (
                                    <Category
                                        key={element.id}
                                        icon={categoryIcon[element.name]}
                                        text={element.name}
                                    />)
                            })}
                        </Row>

                        <h1 className="page-title">Perguntas Frequentes</h1>

                        <Collapse
                            expandIconPosition="right"
                            bordered={false}
                            accordion
                            className="faq-container"
                        >
                            {
                                perguntas.map((element) => {
                                    return (
                                        <Panel header={element.question} key={element.id}>{element.answer}</Panel>
                                    );
                                })
                            }

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


const mapDispatchToProps = dispatch => {
    return {
        fetchPerguntaTipos: (filters) => dispatch(fetchPerguntaTipos(filters)),
        fetchPerguntas: (filters) => dispatch(fetchPerguntas(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        perguntas: state.pergunta.data,
        data: state.perguntaTipos.data,
        loading: state.perguntaTipos.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);