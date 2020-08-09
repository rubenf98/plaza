import React, { Component } from "react";
import {
    updateFracao,
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
        form.validateFields().then((err, fracaos) => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log(fracaos);
                /*this.props
                    .updateFracaos(this.props.fracaos.id, {
                        ...litter,
                        date: formatedDate,
                    })
                    .then((response) => {
                        this.resetModalForm();
                    })
                    .catch((error) => {
                        console.log(error)
                    });*/
            }
        });

    };

    resetModalForm = () => {
        this.props.handleModalVisible(false);
        this.props.resetCurrentFracaos();
        this.formRef.current.resetFields();
    };

    componentWillReceiveProps = () => {
        let { currentFracaos } = this.props;
        let obj = {};

        Object.values(currentFracaos).map((element, index) => {

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
    };

    render() {

        return (
            <EditModal
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
        updateFracao: (data, id) => dispatch(updateFracao(data, id)),
    };
};

const mapStateToProps = (state) => {
    return {
        currentFracaos: state.fracao.currentFracaos,
        loadingCurrentFracaos: state.fracao.loadingCurrentFracaos,
        loading: state.fracao.loading,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PagamentosModalManager);
