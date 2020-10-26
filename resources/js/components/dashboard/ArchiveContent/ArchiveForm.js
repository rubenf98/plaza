import React from "react";
import { Form, Upload, Input, Radio, Row } from "antd";
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

class ArchiveForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: [],
            submitting: false,
            uploading: false,
        }
    }

    rules = {
        email: [
            {
                required: true,
                message: "Please input your email!"
            },
            {
                type: "email",
                message: "Please input a valid email!"
            }
        ],
        password: [
            {
                required: true,
                message: "Please input your password!"
            }
        ]
    };

    render() {
        const { fileList } = this.state;

        const props = {
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {
                this.setState(state => ({
                    fileList: [...state.fileList, file],
                }));
                return false;
            },
            fileList,
        };

        return (
            <div className="orcamentos-form-container">
                <Form
                    ref={this.props.formRef}
                    hideRequiredMark={true}
                >
                    <Form.Item
                        name="nome"
                        label="Título"
                    >
                        <Input placeholder="Ex.: Orçamento Setembro 2020 a Agosto 2021" />
                    </Form.Item>
                    <Form.Item
                        name="arquivo_tipo_id"
                    >
                        <Radio.Group >
                            <Row type="flex" justify="space-around">
                                {Object.values(this.props.arquivoTipos).map((element) => {
                                    return (<Radio key={element.id} value={element.id}>{element.nome}</Radio>);
                                })}
                            </Row>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="pdf"
                    >
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Clica ou arrasta ficheiros para dar upload</p>
                        </Dragger>
                    </Form.Item>
                </Form >
            </div >
        );
    }
}

export default ArchiveForm;
