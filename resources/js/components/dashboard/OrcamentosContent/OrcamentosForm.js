import React from "react";
import { Form, Upload, Col, Row, Input, Button, Space } from "antd";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

class OrcamentosForm extends React.Component {
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
        const { uploading, fileList } = this.state;

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
                console.log(file)
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
                        label="Nome"
                    >
                        <Input placeholder="Basic usage" />
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

export default OrcamentosForm;
