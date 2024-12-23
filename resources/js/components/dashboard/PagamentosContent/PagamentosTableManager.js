import DashboardLayout from '../DashboardLayout';
import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { Button, Row, DatePicker, Col, Dropdown, Menu, Radio } from 'antd';
import { colorConverter } from '../../../helper'
import { fetchFracaos, fetchFracao, setCurrentFracaos, fetchCurrentFracaos, finishFetchCurrentFracaos, fetchFirstAndLastQuota, downloadQuotas } from '../../../redux/fracao/actions';
import locale from 'antd/es/date-picker/locale/pt_PT';
import { FilterOutlined } from '@ant-design/icons';
import moment from 'moment';
import CommonTable from '../../common/CommonTable';
import LoadingContainer from '../../common/LoadingContainer';

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
            columns: [
                {
                    title: 'Fração',
                    dataIndex: 'nome',
                },
                {
                    title: 'Quota em divida',
                    dataIndex: 'divida',
                    render: (e) => this.props.isAdministrator ? <span>{e + "€"}</span> : <div className={'has_divida_indicator ' + (parseFloat(e) > 0 ? "has_divida" : "not_divida")} />,
                },
                {
                    title: 'Quota extra em divida',
                    dataIndex: 'extra_divida',
                    render: (e) => this.props.isAdministrator ? <span>{e + "€"}</span> : <div className={'has_divida_indicator ' + (parseFloat(e) > 0 ? "has_divida" : "not_divida")} />,
                },
            ]
        }
        this.filters = {};
    }

    async componentDidMount() {
        this.props.fetchFirstAndLastQuota();
        let bloco = 'A';
        this.props.currentUser.fracaos[0] && (bloco = this.props.currentUser.fracaos[0].bloco);

        this.filters = {
            bloco: bloco
        }

        let columns = this.state.columns;

        this.props.fetchFracaos(this.filters).then((response) => {
            Object.entries(response.action.payload.data.data[0].pagamentos).map((
                element
            ) => {
                columns.push({
                    title: moment(element[0]).format('MMM'),
                    dataIndex: "pagamentos",
                    render: (code) =>
                        <div
                            className="table-cell-background"
                            style={{ background: code[element[0]] ? colorConverter[code[element[0]]] : "wheat" }}
                        />
                })
            });

            this.setState({
                loadingMonths: false,
                columns: columns
            });

        });
    }

    handleEditClick = async () => {
        this.setState({ loading: true });
        this.props.setCurrentFracaos();
        this.props.fetchCurrentFracaos();

        this.state.selectedRowKeys.forEach(async (element, index) => {
            await this.props.fetchFracao(element, this.filters)

            if (index == this.state.selectedRowKeys.length - 1) {
                this.setState({ selectedRowKeys: [], loading: false });
                this.props.handleModalVisible(true);
                this.props.finishFetchCurrentFracaos();
            }
        });


    };

    handleDownload = () => {
        this.props.downloadQuotas(this.filters);
    };

    handleFilterChange = e => {
        this.filters = {
            ...this.filters,
            bloco: e.target.value
        }
        this.props.fetchFracaos(this.filters);
    };

    handleCalendarChange = e => {
        this.setState({
            dates: e
        });
        if (e) {
            if (e[0] && e[1]) {
                this.filters = {
                    ...this.filters,
                    startDate: moment(e[0]).format('YYYY-MM').toString(),
                    endDate: moment(e[1]).format('YYYY-MM').toString()
                }

                let columns = [
                    {
                        title: 'Fração',
                        dataIndex: 'nome',
                    },
                    {
                        title: 'Valor em divida',
                        dataIndex: 'divida',
                        render: (e) => this.props.isAdministrator ? <span>{e + "€"}</span> : <div className={'has_divida_indicator ' + (parseFloat(e) > 0 ? "has_divida" : "not divida")} />,
                    },
                    {
                        title: 'Quota extra em divida',
                        dataIndex: 'extra_divida',
                        render: (e) => this.props.isAdministrator ? <span>{e + "€"}</span> : <div className={'has_divida_indicator ' + (parseFloat(e) > 0 ? "has_divida" : "not divida")} />,
                    },
                ];


                this.props.fetchFracaos(this.filters).then((response) => {
                    Object.entries(response.action.payload.data.data[0].pagamentos).map((
                        element
                    ) => {
                        columns.push({
                            title: moment(element[0]).format('MMM'),
                            dataIndex: "pagamentos",
                            render: (code) => <div className="table-cell-background" style={{ background: code[element[0]] ? colorConverter[code[element[0]]] : "wheat" }}></div>,
                        })
                    });

                    this.setState({
                        loadingMonths: false,
                        columns: columns
                    });

                });
            }
        }
    };

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };

    render() {
        const { loading, selectedRowKeys, loadingMonths, dates } = this.state;
        const { data, isAdministrator, firstQuota, lastQuota } = this.props;

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
            return current && current < moment(firstQuota) || current > moment(lastQuota).add(1, 'M');
        };

        return (
            <div className="table-container">
                <Row className="table-filter-container" type="flex" align="middle">
                    <Col xs={24} lg={20}>
                        <Row className="header-filter-container" type="flex" justify="start" align="middle">
                            <div className="filter-container">
                                <Dropdown
                                    overlay={
                                        <Menu>
                                            <Menu.ItemGroup title="Bloco">
                                                <Radio.Group
                                                    onChange={this.handleFilterChange}
                                                    defaultValue={this.filters.bloco}
                                                >
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
                                                <Radio.Group onChange={this.onChange} defaultValue="normal">
                                                    <Radio style={radioStyle} value="normal">
                                                        Normal
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
                                        <FilterOutlined /> Selecionar bloco
                                    </Button>
                                </Dropdown>
                            </div>
                            <div className="range-container">
                                <RangePicker
                                    picker="month"
                                    bordered={false}
                                    locale={locale}
                                    disabledDate={disabledDate}
                                    onCalendarChange={value => {
                                        this.handleCalendarChange(value);
                                    }}
                                />
                            </div>
                        </Row>
                    </Col>

                    {isAdministrator &&
                        <Fragment>
                            <Col xs={24} lg={4}>
                                <Row type="flex" justify="space-around">
                                    <Button type="primary"
                                        onClick={this.handleDownload}
                                    >
                                        Download
                                    </Button>
                                    <Button type="primary"
                                        onClick={this.handleEditClick}
                                        disabled={!hasSelected}
                                        loading={loading}>
                                        Editar
                                    </Button>
                                </Row>
                            </Col>

                        </Fragment>
                    }


                </Row>

                <LoadingContainer loading={loadingMonths}>
                    <CommonTable
                        style={{ width: "100%" }}
                        rowSelection={isAdministrator && rowSelection}
                        columns={this.state.columns}
                        rowKey={(record) => record.id}
                        loading={this.props.loading}
                        dataSource={data}
                        pagination={{
                            total: data.length,
                            pageSize: data.length,
                            hideOnSinglePage: true
                        }}
                    >
                    </CommonTable>
                </LoadingContainer>

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
                    <Row className="table-legend" type="flex" align="middle">
                        <div className="table-cell-legend plano"></div>
                        Plano Pagamento
                    </Row>
                </Row>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFracaos: (filters) => dispatch(fetchFracaos(filters)),
        fetchFracao: (id, filters) => dispatch(fetchFracao(id, filters)),
        setCurrentFracaos: () => dispatch(setCurrentFracaos()),
        fetchCurrentFracaos: () => dispatch(fetchCurrentFracaos()),
        finishFetchCurrentFracaos: () => dispatch(finishFetchCurrentFracaos()),
        fetchFirstAndLastQuota: () => dispatch(fetchFirstAndLastQuota()),
        downloadQuotas: (filters) => dispatch(downloadQuotas(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.fracao.data,
        currentFracaos: state.fracao.currentFracaos,
        firstQuota: state.fracao.first,
        lastQuota: state.fracao.last,
        loading: state.fracao.loading,
        currentUser: state.auth.currentUser,
        isAdministrator: state.auth.isAdministrator,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PagamentosTableManager);
