import { Button, DatePicker, Form, Input, Row } from 'antd';
import { LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import React, { Fragment } from 'react';
import FracaoRemoteSelectContainer from '../FracaoContent/FracaoRemoteSelectContainer';

const ProfileForm = (props) => {
    return (
        <Fragment>
            <Form
                ref={props.formRef}
                hideRequiredMark={true}
                initialValues={props.user}
            >
                <Form.Item
                    className="input"
                    name="nome"
                    label="Nome"
                >
                    <Input placeholder="Nome" />
                </Form.Item>

                <Form.Item
                    className="input"
                    name="b_day"
                    label="Data de Nascimento"
                >
                    <DatePicker placeholder="Data de Nascimento" />
                </Form.Item>

                <FracaoRemoteSelectContainer label="Fração" />

                <Form.Item
                    className="input"
                    name="email"
                    label="Email"
                >
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                    className="input"
                    name="contacto"
                    label="Contacto"
                >
                    <Input placeholder="Contacto" />
                </Form.Item>
            </Form >
            <Row type="flex" justify="space-between">
                <Button type="default" onClick={props.handleCancelEditing}> Cancelar</Button>
                <Button type="primary" onClick={props.handleFinishEditing}> Guardar Alterações</Button>
            </Row>


        </Fragment>
    );
}

export default ProfileForm;


