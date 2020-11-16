import { Row, Col, Skeleton } from 'antd';
import { connect } from "react-redux";
import React from 'react'
import PageFooter from '../common/PageFooter';
import HeaderContainer from '../common/HeaderContainer';
import { fetchServicoTipos } from "../../redux/servicoTipos/actions";
import LoadingContainer from '../common/LoadingContainer';
import SkeletonContainer from '../common/SkeletonContainer';

class Servicos extends React.Component {

    componentDidMount() {
        this.props.fetchServicoTipos();
    }
    render() {
        var { data, loading } = this.props;

        return (
            <div className="page-dimensions servicos-page-container">
                <HeaderContainer
                    title="Serviços"
                    content={<p className="description"> Disponibilizamos serviços que permitem o bom funcionamento do edifício, de acordo com os critérios estabelecidos.</p>}
                    img="/icon/servicos-header.webp"
                />

                <Row className="content-container page-container">
                    {
                        Object.values(data).map((element, index) => {
                            {
                                return (
                                    <Row key={index} type="flex" justify="start" align="middle" className="servico-section">
                                        <Col md={{ span: 8, order: index % 2 ? 2 : 1 }} sm={{ span: 24, order: 1 }}>
                                            <SkeletonContainer loading={loading} avatar >
                                                <img className="image" src={element.image} alt="serviço" />
                                            </SkeletonContainer>
                                        </Col>
                                        <Col md={{ span: 16, order: index % 2 ? 1 : 2 }} sm={{ span: 24, order: 2 }} className="list">
                                            <SkeletonContainer loading={loading} title >
                                                <h1 className="title">{element.name}</h1>
                                            </SkeletonContainer>

                                            <div className="title-border"></div>
                                            {
                                                element.servicos.map((el, i) => {
                                                    return (
                                                        <SkeletonContainer loading={loading} key={i} >
                                                            <div className="item" >
                                                                <h3>{el.name}</h3>
                                                            </div>
                                                        </SkeletonContainer>
                                                    )
                                                })
                                            }
                                        </Col>
                                    </Row>
                                );
                            }
                        })
                    }

                </Row>





                <footer style={{ display: "block" }} className="layout-footer" >
                    <PageFooter />
                </footer>

            </div >
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchServicoTipos: (filters) => dispatch(fetchServicoTipos(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.servicoTipos.data,
        loading: state.servicoTipos.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Servicos);