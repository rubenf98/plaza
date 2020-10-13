import React, { Component } from "react";
import {
    createOrcamento
} from "../../../redux/orcamento/actions";
import { connect } from "react-redux";
import EditModal from "../../common/EditModal.js";
import OrcamentosForm from "./OrcamentosForm";

class OrcamentosModalManager extends Component {
    state = {
        visible: true,
    };

    formRef = React.createRef();

    onCancel = () => {
        this.resetModalForm();
    };

    onOkEditClick = () => {
        const form = this.formRef.current;
        form.validateFields().then((data) => {
            let formData = new FormData();
            formData.append("pdf", data.pdf.file);
            formData.append("nome", data.nome);

            this.props.createOrcamento(formData)
                .then((response) => {
                    this.resetModalForm();
                })
                .catch((error) => {
                    console.log(error)
                });

        });

    };

    resetModalForm = () => {
        this.props.handleModalVisible(false);
        this.formRef.current.resetFields();
    };

    render() {

        return (
            <EditModal
                onOkEditClick={() => this.onOkEditClick()}
                onCancel={() => this.onCancel()}
                title={"title"}
                visible={this.props.visible}
            >
                <OrcamentosForm
                    formRef={this.formRef}
                />
            </EditModal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createOrcamento: (data) => dispatch(createOrcamento(data)),
    };
};

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrcamentosModalManager);
