import React from "react";
import { Form, Upload, Radio, Input } from "antd";
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

class CircularesForm extends React.Component {
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
                        name="titulo"
                        label="Título"
                    >
                        <Input placeholder="Ex.: Obras em fração" />
                    </Form.Item>
                    <Form.Item
                        name="tag_id"
                    >
                        <Radio.Group >
                            {Object.values(this.props.tags).map((element) => {
                                return (<Radio key={element.id} value={element.id}>{element.nome}</Radio>);
                            })}
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

export default CircularesForm;
