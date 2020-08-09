import DashboardLayout from '../DashboardLayout';
import React from 'react';
import { connect } from "react-redux";
import { Table, Button, Row, Spin, DatePicker, Col, Dropdown, Menu, Radio } from 'antd';
import { colorConverter } from '../../../helper'
import { fetchFracaos, fetchFracao, setCurrentFracaos, finishCurrentFracaos } from '../../../redux/fracao/actions';
import locale from 'antd/es/date-picker/locale/pt_PT';
import { FilterOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

class PagamentosTableManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [],
            loading: false,
            loadingMonths: true,
            months: null,
            dates: null,
        }
        this.filters = {};
        this.columns = [
            {
                title: 'Fração',
                dataIndex: 'nome',
            },
            {
                title: 'Condómino',
                dataIndex: 'user',
            },
            {
                title: 'Fundo Comum Reserva',
                dataIndex: 'fundoComum',
                render: (element) => <span className="euro">{element}</span>,
            },
            {
                title: 'Valor da Quota',
                dataIndex: 'quota',
                render: (element) => <span className="euro">{element}</span>,
            },
            {
                title: 'Total',
                dataIndex: 'total',
                render: (element) => <span className="euro">{element}</span>,
            },
        ];
    }

    componentDidMount() {
        this.props.fetchFracaos().then((response) => {
            Object.entries(response.action.payload.data.data[0].pagamentos).map((
                element
            ) => {
                this.columns.push({
                    title: element[0],
                    dataIndex: "pagamentos",
                    render: (code) => <div className="table-cell-background" style={{ background: code[element[0]] ? colorConverter[code[element[0]]] : "wheat" }}></div>,
                })
            });

            this.setState({
                loadingMonths: false,
            });

        });
    }

    handleEditClick = async () => {
        this.setState({ loading: true });
        this.props.setCurrentFracaos();

        this.state.selectedRowKeys.forEach((element, index) => {
            this.props.fetchFracao(element)

            if (index == this.state.selectedRowKeys.length - 1) {
                this.setState({ selectedRowKeys: [], loading: false });
                this.props.handleModalVisible(true);
            }
        });
    };

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };

    render() {
        const { loading, selectedRowKeys, loadingMonths, dates } = this.state;
        const { data } = this.props;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };

        const disabledDate = current => {
            if (!dates || dates.length === 0) {
                return false;
            }

            const tooLate = dates[0] && current.year() != dates[0].year();
            const tooEarly = dates[1] && current.year() != dates[1].year();
            return tooEarly || tooLate;
        };

        return (
            <div className="table-container">
                <Row className="table-filter-container" type="flex" align="middle">
                    <Col xs={12} lg={20}>
                        <Row type="flex" justify="start">
                            <Dropdown
                                overlay={
                                    <Menu>
                                        <Menu.ItemGroup title="Bloco">
                                            <Radio.Group onChange={this.onChange}>
                                                <Radio style={radioStyle} value="A">
                                                    Bloco A
                                                </Radio>
                                                <Radio style={radioStyle} value="B">
                                                    Bloco B
                                                </Radio>
                                                <Radio style={radioStyle} value="C">
                                                    Bloco C
                                                </Radio>
                                            </Radio.Group>
                                        </Menu.ItemGroup>
                                        <Menu.ItemGroup title="Quota">
                                            <Radio.Group onChange={this.onChange}>
                                                <Radio style={radioStyle} value="normal">
                                                    Normal
                                                </Radio>
                                                <Radio style={radioStyle} value="garagem">
                                                    Elevador
                                                </Radio>
                                            </Radio.Group>
                                        </Menu.ItemGroup>

                                    </Menu>
                                }
                                placement="bottomLeft"
                                trigger={['click']}>
                                <Button
                                    style={{ margin: "15px" }}
                                >
                                    <FilterOutlined /> Filtros
                                </Button>
                            </Dropdown>
                            <RangePicker
                                picker="month"
                                bordered={false}
                                locale={locale}
                                disabledDate={disabledDate}
                                onCalendarChange={value => {
                                    this.setState({
                                        dates: value
                                    });
                                }}
                            />
                        </Row>
                    </Col>

                    <Col xs={12} lg={4}>
                        <Row type="flex" justify="end">
                            <Button type="primary"
                                onClick={this.handleEditClick}
                                disabled={!hasSelected}
                                loading={loading}>
                                Editar
                            </Button>
                        </Row>
                    </Col>


                </Row>
                {
                    loadingMonths
                        ?
                        <Row type="flex" justify="center" align="middle" style={{ height: "100%" }}>
                            <Spin size="large" />
                        </Row>
                        :
                        <Table
                            style={{ width: "100%" }}
                            rowSelection={true && rowSelection}
                            columns={this.columns}
                            rowKey={(record) => record.id}
                            dataSource={data}
                            pagination={{
                                total: data.length,
                                pageSize: data.length,
                                hideOnSinglePage: true
                            }}
                            summary={data => {
                                let totalFundoComumReserva = 0;
                                let totalQuota = 0;
                                let total = 0;

                                data.forEach(element => {
                                    totalFundoComumReserva += element.fundoComum;
                                    totalQuota += element.quota;
                                    total += element.total;
                                });

                                return (
                                    <>
                                        <Table.Summary.Row>
                                            <Table.Summary.Cell></Table.Summary.Cell>
                                            <Table.Summary.Cell></Table.Summary.Cell>
                                            <Table.Summary.Cell className="bold">Total Mensal</Table.Summary.Cell>
                                            <Table.Summary.Cell className="euro bold">{Math.round((totalFundoComumReserva + Number.EPSILON) * 100) / 100}</Table.Summary.Cell>
                                            <Table.Summary.Cell className="euro bold">{Math.round((totalQuota + Number.EPSILON) * 100) / 100}</Table.Summary.Cell>
                                            <Table.Summary.Cell className="euro bold">{Math.round((total + Number.EPSILON) * 100) / 100}</Table.Summary.Cell>
                                        </Table.Summary.Row>
                                    </>
                                );
                            }}
                        >
                        </Table>
                }

                <Row className="table-legend-container" type="flex" justify="end" align="middle">
                    <Row className="table-legend" type="flex" align="middle">
                        <div className="table-cell-legend pendente"></div>
                        Pendente
                    </Row>
                    <Row className="table-legend" type="flex" align="middle">
                        <div className="table-cell-legend pago"></div>
                        Pago
                    </Row>
                    <Row className="table-legend" type="flex" align="middle">
                        <div className="table-cell-legend divida"></div>
                        Dívida
                    </Row>
                </Row>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFracaos: (filters) => dispatch(fetchFracaos(filters)),
        fetchFracao: (id) => dispatch(fetchFracao(id)),
        setCurrentFracaos: () => dispatch(setCurrentFracaos()),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.fracao.data,
        currentFracaos: state.fracao.currentFracaos,
        loading: state.fracao.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PagamentosTableManager);
