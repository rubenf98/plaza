import DashboardLayout from '../DashboardLayout';
import React from 'react';
import { connect } from "react-redux";
import { Table, Button, Row, Spin, DatePicker, Col, Dropdown, Menu, Radio } from 'antd';
import { colorConverter } from '../../../helper'
import { fetchFracaos } from '../../../redux/fracao/actions';
import locale from 'antd/es/date-picker/locale/pt_PT';
import { FilterOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

class PagamentosTableManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
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
            },
            {
                title: 'Valor da Quota',
                dataIndex: 'quota',
            },
            {
                title: 'Total',
                dataIndex: 'total',
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

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
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
            const tooLate = dates[0] && current.diff(dates[0], 'months') > 11;
            const tooEarly = dates[1] && dates[1].diff(current, 'months') > 11;
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
                            <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
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
                            rowSelection={rowSelection}
                            columns={this.columns}
                            dataSource={data}
                            pagination={{
                                total: data.length,
                                pageSize: data.length,
                                hideOnSinglePage: true
                            }}
                            summary={() => (
                                <Table.Summary.Row>
                                    <Table.Summary.Cell></Table.Summary.Cell>
                                    <Table.Summary.Cell></Table.Summary.Cell>
                                    <Table.Summary.Cell>Total Mensal</Table.Summary.Cell>
                                    <Table.Summary.Cell>64,17</Table.Summary.Cell>
                                    <Table.Summary.Cell>641,48</Table.Summary.Cell>
                                    <Table.Summary.Cell>705,65</Table.Summary.Cell>
                                </Table.Summary.Row>
                            )}>
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
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.fracao.data,
        loading: state.fracao.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PagamentosTableManager);
