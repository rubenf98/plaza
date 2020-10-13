import React, { Component } from "react";
import {
    updateFracaos,
    resetCurrentFracaos,
    finishCurrentFracaos
} from "../../../redux/fracao/actions";
import { connect } from "react-redux";
import EditModal from "../../common/EditModal.js";
import PagamentosForm from "./PagamentosForm.js";

class PagamentosModalManager extends Component {
    state = {
        visible: true,
        initialValues: []
    };

    formRef = React.createRef();


    onCancel = () => {
        this.resetModalForm();
    };

    onOkEditClick = () => {
        const form = this.formRef.current;
        form.validateFields().then((fracaos) => {
            let fracoes = [], pagamentosT = [], pagamentos = [], dates = [], estado = [];
            let fracaosLength = Object.keys(fracaos).length - 1;

            Object.entries(fracaos).map((element, index) => {
                let parsed = element[0].split('_');

                if (!fracoes.includes(parsed[0]))
                    fracoes.push(parsed[0]);

                if (!dates.includes(parsed[1]))
                    dates.push(parsed[1]);

                pagamentos.map((e) => {
                    if (e[parsed[1]]) {
                        pagamentosT.push(estado);
                        pagamentos = [];
                        estado = [];
                    }
                })

                let obj = {};
                obj[parsed[1]] = element[1];
                pagamentos.push(obj);
                estado.push(element[1] ? element[1] : "pendente");

                if (index == fracaosLength) {
                    pagamentosT.push(estado);
                }

            })

            let obj = {
                'fracaos': fracoes,
                'dates': dates,
                'pagamentos': pagamentosT
            };

            this.props
                .updateFracaos(obj)
                .then((response) => {
                    this.resetModalForm();
                    location.reload();
                })
                .catch((error) => {
                    console.log(error)
                });

        });

    };

    resetModalForm = () => {
        this.props.handleModalVisible(false);
        this.props.resetCurrentFracaos();
        this.formRef.current.resetFields();
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        if (!nextProps.loadingFetchingFracaos) {
            let { currentFracaos } = this.props;
            let obj = [];
            let fracaos = [];

            Object.values(currentFracaos).map((element, index) => {
                fracaos.push(element.id);

                Object.entries(element.pagamentos).map((el, i) => {

                    obj[element.id + '_' + el[0]] = el[1];
                })

                if (index == currentFracaos.length - 1 || currentFracaos.length == 1) {
                    this.setState({
                        initialValues: obj
                    })

                    setTimeout(() => {
                        this.props.finishCurrentFracaos();
                    }, 1000);
                }
            })
        }

    };

    render() {

        return (
            <EditModal
                width="80%"
                onOkEditClick={() => this.onOkEditClick()}
                onCancel={() => this.onCancel()}
                title={"title"}
                visible={this.props.visible}
            >
                <PagamentosForm
                    formRef={this.formRef}
                    pagamentos={this.props.currentPagamentos}
                    currentFracaos={this.props.currentFracaos}
                    initialValues={this.state.initialValues}
                    loading={this.props.loadingCurrentFracaos}
                />
            </EditModal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetCurrentFracaos: () => dispatch(resetCurrentFracaos()),
        finishCurrentFracaos: () => dispatch(finishCurrentFracaos()),
        updateFracaos: (data) => dispatch(updateFracaos(data)),
    };
};

const mapStateToProps = (state) => {
    return {
        currentFracaos: state.fracao.currentFracaos,
        loadingCurrentFracaos: state.fracao.loadingCurrentFracaos,
        loading: state.fracao.loading,
        loadingFetchingFracaos: state.fracao.loadingFetchingFracaos
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PagamentosModalManager);
