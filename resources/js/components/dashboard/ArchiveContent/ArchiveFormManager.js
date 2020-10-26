import React, { Component } from "react";
import {
    createArquivo,
} from "../../../redux/arquivo/actions";
import { connect } from "react-redux";
import EditModal from "../../common/EditModal.js";
import ArchiveForm from "./ArchiveForm";

class ArchiveFormManager extends Component {
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
            formData.append("file", data.pdf.file);
            formData.append("nome", data.nome);
            formData.append("arquivo_tipo_id", data.arquivo_tipo_id);

            this.props.createArquivo(formData)
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
                <ArchiveForm
                    arquivoTipos={this.props.arquivoTipos}
                    formRef={this.formRef}
                />
            </EditModal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createArquivo: (data) => dispatch(createArquivo(data)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ArchiveFormManager);
