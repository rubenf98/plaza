import React, { Fragment } from 'react'
import PageFooter from "../common/PageFooter";
import { connect } from "react-redux";
import { Row, Form, Input, Collapse } from "antd";
import HeaderContainer from '../common/HeaderContainer';
import { fetchPerguntaTipos } from "../../redux/perguntaTipos/actions";
import { fetchPerguntas } from "../../redux/pergunta/actions";
import NoDataContainer from '../common/NoDataContainer';

const { Search } = Input;
const { Panel } = Collapse;

class FAQ extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
            activeCategory: null,
            search: null
        }
    }

    handleCategoryClick = (text) => {
        this.setState({
            activeCategory: text
        })

        this.props.fetchPerguntas({ tipo: text, search: this.state.search });
    }

    handleSearch = (e) => {
        this.setState({
            search: e
        })

        this.props.fetchPerguntas({ tipo: this.state.activeCategory, search: e });
        window.scrollTo(0, this.myRef.current.offsetTop - 100);
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
                <img className="icon" alt={text} src={icon} />

                <h1 className="title"> {text}</h1>
            </div >
        );

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
                                            onSearch={this.handleSearch}
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
                                        icon={element.image}
                                        text={element.name}
                                    />)
                            })}
                        </Row>

                        <h1 ref={this.myRef} className="page-title">Perguntas Frequentes</h1>

                        <NoDataContainer data={perguntas.length > 0 && true} message="Nenhuma pergunta se enquadra com os dados inseridos">
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

                        </NoDataContainer>

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