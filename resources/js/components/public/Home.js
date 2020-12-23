import React , {Suspense} from 'react'
import {
    fetchCirculares
} from "../../redux/circular/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { breakPoint } from "../../helper";
import { Row, Col, Button } from "antd";
import { Parallax } from 'react-parallax';
const PageFooter = React.lazy(() => import('../common/PageFooter'));
import LoadingContainer from "../common/LoadingContainer";
import { InfoCircleOutlined, QuestionCircleOutlined, FileOutlined, CommentOutlined, ContactsOutlined, PayCircleOutlined, EuroCircleOutlined, ArrowRightOutlined, RightCircleOutlined } from '@ant-design/icons';

const AboutInfoContent = ({ img, text }) => (
    <Col sm={24} md={12} >
        <Row type="flex" align="middle" className="info-container">
            {img}
            <div className="text">{text}</div>
        </Row>
    </Col>
);

const FAQContent = ({ question, answer }) => (
    <Col lg={12} md={24}>
        <h3 className="question">{question}</h3>
        <p className="answer">{answer}</p>
    </Col>
);

const Header = ({ title, subtitle }) => (
    <div className="section-title-container">
        <h1 className="section-title">{title}</h1>
        <h1 className="section-subtitle">{subtitle}</h1>
    </div>
);

const WatchMoreButton = ({ to }) => (
    <Row type="flex" justify="center">
        <Button className="watch-more" type="primary" htmlType="submit">
            <Link className="watch-more-link" to={to}>
                Ver mais
            </Link>
        </Button>
    </Row>
);



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenHeight: "750px",
            breakPoint: false,
            filters: {
                limit: 3
            }
        }
    }

    updateDimensions = () => {
        this.setState({
            screenHeight: document.body.clientHeight - 70 + "px",
            breakPoint: breakPoint(document.body.clientWidth)
        })
      };

      componentDidMount() {
        this.updateDimensions();
        this.props.fetchCirculares(1, this.state.filters);
        window.addEventListener('resize', this.updateDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }


    render() {
        const { circularData, circularLoading } = this.props;
        const { screenHeight, breakPoint } = this.state;
        
        return (
            <div className="page-dimensions">
                <div className="homepage-container">
                    <Parallax
                        bgImage="/background-image.webp"
                        strength={500}
                    >
                        <Row className="homepage-header" type="flex" align="middle" style={{height: screenHeight}}>
                            <div className="header">
                                <h1 className="title ">Condomínio Plaza II</h1>
                                <h2 className="subtitle ">Gestão administrativa e operacional do condomínio de forma responsável, segura e confiável.</h2>
                                
                                <Link className="register-link" to="/login?register=true">
                                    <span className="register-link-icon">
                                    <RightCircleOutlined />
                                    </span>
                                    <span className="register-link-text" > Registar</span>
                                </Link>
                            </div>
                        </Row>
                    </Parallax>
                    <div className="homepage-content-container">
                        <Row className="administrator-container " type="flex" justify="space-around" align="middle">

                            <div className="administrator">
                                <div className="name">Marco Abreu</div>
                                <div className="contact">962 860 429</div>
                            </div>

                            <div className="administrator">
                                <div className="name">Maurílio Fernandes</div>
                                <div className="contact">966 169 159</div>
                            </div>


                        </Row>
                    </div>
                    <div className="homepage-content-container">
                        <Row className="about-container" gutter={32} type="flex" align="middle">
                            <Col lg={12} md={24}>
                                <div className="about-content">
                                    <h1 className="subtitle"> Administração Plaza II</h1>
                                    <h2 className="title"> Condomínio gerido e administrado por locais!</h2>
                                    <p>O seu condomínio é administrado cumprindo todos os requisitos legais e administrativos. As tarefas atribuídas ao administrador são desempenhadas com disciplina e atempadamente. </p>
                                    <Row gutter={12}>
                                        <AboutInfoContent
                                            img={<InfoCircleOutlined className="icon" />}
                                            text="Informação financeira e contabilística do condomínio"
                                        />
                                        <AboutInfoContent
                                            img={<QuestionCircleOutlined className="icon" />}
                                            text="Secção de perguntas e respostas mais frequentes"
                                        />
                                        <AboutInfoContent
                                            img={<CommentOutlined className="icon" />}
                                            text="Comunicaçao por e-mail e contacto telefónico"
                                        />
                                        <AboutInfoContent
                                            img={<FileOutlined className="icon" />}
                                            text="Apresentação de orçamentos pré-estabelecidos"
                                        />
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={12} md={24}>
                                <img className="about-image" src="/icon/home-about.webp" alt="about-img" />
                            </Col>

                        </Row>
                    </div>

                    <div className="homepage-content-container">
                        <Header
                            title="Círculares"
                            subtitle="Informações relativas a acontecimentos no condomínio"
                        />

                        <Row className="section-content" type="flex" justify="space-between" align="middle">
                            <LoadingContainer loading={circularLoading} >
                                <Row gutter={32}>
                                    {
                                        Object.values(circularData).map(function (el, index) {
                                            return (
                                                <Col md={8} sm={24}
                                                    className="circular-container"
                                                    key={index}
                                                >
                                                    <div className="circular-image-container" key={index}>

                                                        <img className="image" src={el.tags[0].image} alt="circular-img" />

                                                        <div className="circular-info">
                                                            <div className="title">
                                                                {el.titulo}
                                                            </div>

                                                            <p className="date">
                                                                {el.created_at} • <span className="tag">{el.tags[0].nome}</span>
                                                            </p>

                                                        </div>

                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </LoadingContainer>
                        </Row>

                        <WatchMoreButton to="/painel/circulares" />

                    </div>

                    <div className="faq-homepage-container">
                        <Header
                            title="Perguntas frequentes"
                            subtitle="Esclareça todas as suas dúvidas com facilidade"
                        />

                        <Row className="homepage-content-container">
                            <FAQContent
                                question="Qual o número de reuniões da assembleia por ano ?"
                                answer="Deverá haver uma reunião na primeira quinzena do mês de Janeiro. A reunião é convocada pelo administrador com vista à discussão e aprovação das contas do último ano e aprovação do orçamento para o ano corrente."
                            />
                            <FAQContent
                                question="Como calcular o valor das quotas ?"
                                answer="As despesas correntes de condomínio devem ser pagas pelos condóminos na proporção do valor (permilagem) das suas fracções. Quota mensal = (Orçamento anual/12) * (Permilagem da fracção / 1000)."
                            />
                            <FAQContent
                                question="Quem pode ser administrador ?"
                                answer="Qualquer condómino poderá se tornar administrador, poderá ainda ser contratado um terceiro ou empresa especializada, após discussão e aprovação em assembleia de condóminos."
                            />
                            <FAQContent
                                question="Quais as funções do administrador ?"
                                answer="Convocar a assembleia de condóminos, elaborar os orçamentos anuais de receitas e despesas e prestar contas à assembleia, cobrar as receitas e efectuar as despesas comuns, exigir dos condóminos a sua quota-parte nas despesas aprovadas pela assembleia..."
                            />
                            <FAQContent
                                question="Quais as limitações de animais ?"
                                answer="Por cada fracção autónoma, não é permitido alojar mais de 3 cães adultos. A permanência de animais em habitações fica condicionada à existência de boas condições de alojamento dos referidos animais."
                            />
                            <FAQContent
                                question="O que fazer em caso de barulho ?"
                                answer="Reclamação junto da Câmara Municipal, caso falhe a reclamação, é alertar outras Entidades, nomeadamente o Ministério do Ambiente e o Governo Civil. Em último caso, recorra aos Tribunais, solicitando uma providência cautelar."
                            />
                        </Row>

                        <WatchMoreButton to="/perguntas" />
                    </div>




                    <div className="homepage-content-container">
                        <Row className="about-container" gutter={32} type="flex" align="middle">
                            <Col lg={12} md={24} order={breakPoint ? 2 : 1}>
                                <img className="about-image" src="/icon/home-services.webp" alt="servicos-img" />
                            </Col>
                            <Col lg={12} md={24} order={breakPoint ? 1 : 2}>
                                <div className="about-content">
                                    <h1 className="subtitle">Serviços</h1>
                                    <h2 className="title"> Conheça os serviços que a administração fornece</h2>
                                    <p>Trabalhamos com pessoal próprio em manutenção de edifícios na área da construção civil, limpeza e jardinagem. Recorremos à contratação de empresas especializadas nas respectivas áreas o que garante uma qualidade superior do serviço. </p>
                                    <WatchMoreButton to="/servicos" />
                                </div>
                            </Col>


                        </Row>
                    </div>

                    <div className="homepage-content-container last-content-container">
                        <Header
                            title="Informação"
                            subtitle="Dados relativos ao bom funcionamento do edifício"
                        />

                        <Row className="section-content info-container " type="flex" justify="space-around" align="middle">
                            <div className="info-content">
                                <EuroCircleOutlined className="icon" />
                                <h2 className="title">Pagamentos</h2>
                                <div className="info">
                                    O edíficio Plaza II permite que o pagamento das quotas seja realizado tanto no balcão de apoio do condomínio, como por transferência multibanco
                                
                                   
                                </div>
                            </div>
                            <div className="info-content">
                                <ContactsOutlined className="icon" />
                                <h2 className="title">Contactos</h2>
                                <div className="info">
                                    O edíficio Plaza II possui um endereço eletrónico comum a todos os membros da administração, pelo qual é possível esclarecer as suas dúvidas
                                
                                 
                                </div>
                            </div>
                        </Row>
                    </div>




                </div>
                
                    <footer style={{ display: "block" }} className="layout-footer" >
                    <Suspense fallback={<div>Loading...</div>}>
                        <PageFooter />
                    </Suspense>
                    </footer>
                
                
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchCirculares: (page, filters) => dispatch(fetchCirculares(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        circularData: state.circular.data,
        circularLoading: state.circular.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);