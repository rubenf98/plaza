
import DashboardLayout from '../DashboardLayout';
import React, { Fragment } from 'react';
import { Col, Row, Upload, Button } from 'antd';
import ProfileOverview from './ProfileOverview';
import ProfileForm from './ProfileForm';
import { connect } from "react-redux";
import { EditOutlined, UploadOutlined } from '@ant-design/icons';
import { updateMe, updatePhoto } from "../../../redux/auth/actions";
import moment from 'moment';

class Profile extends React.Component {
    state = {
        editing: false,
        refactorUser: null,
        profileEdit: true,
    }

    formRef = React.createRef();

    componentDidMount() {
        let refactorUser = this.props.user;

        this.props.user.fracaos.length > 0 && (refactorUser.fracao = ["bloco-" + this.props.user.fracaos[0].bloco_id, this.props.user.fracaos[0].id]);

        this.props.user.b_day && (refactorUser.b_day = moment(this.props.user.b_day));

        this.setState({
            refactorUser: refactorUser
        })
    }

    handleStartEditing = (profileEdit = true) => {
        this.setState({ editing: true, profileEdit: profileEdit })
    }

    handleCancelEditing = () => {
        this.setState({ editing: false });
    }

    handleFinishEditing = () => {

        const form = this.formRef.current;
        form.validateFields().then((data) => {
            let formatedDate = null;
            data.b_day && (formatedDate = moment(data.b_day).format("YYYY-MM-DD"));
            this.props.updateMe({
                ...data,
                b_day: formatedDate,
            })
                .then((response) => {
                    this.setState({ editing: false })
                })
                .catch((error) => {
                    console.log(error)
                });

        });
    }

    onCancel = () => {
        this.resetModalForm();
    };

    resetModalForm = () => {
        this.props.handleModalVisible(false);
        this.formRef.current.resetFields();
    };

    handleUpload = (data) => {
        let { file } = data;
        let form = new FormData();
        form.append('photo', file);

        this.props.updatePhoto(form);
    };

    render() {
        let { user, userHasFracao } = this.props;
        let { editing, profileEdit } = this.state;

        return (
            <DashboardLayout >
                <div className="profile-page-container page-container">

                    <Row
                        type="flex"
                        align="middle"
                        justify="space-around"
                        className="profile-container"
                        gutter={32}
                    >
                        <Col lg={24} xl={10} className="profile-picture-container">
                            <Row type="flex" justify="space-around">
                                <Upload name='file' customRequest={this.handleUpload} accept=".jpg,.png" showUploadList={false} method="PUT">
                                    <img className="profile-picture" src={`${window.location.origin}/api/photo${user.photo}`} />
                                    <UploadOutlined className="upload-picture" />
                                </Upload>
                            </Row>
                        </Col>
                        <Col lg={24} xl={14} className="profile-details">
                            {editing ?
                                <ProfileForm
                                    profileEdit={profileEdit}
                                    user={this.state.refactorUser}
                                    formRef={this.formRef}
                                    handleFinishEditing={this.handleFinishEditing}
                                    handleCancelEditing={this.handleCancelEditing}
                                />
                                :
                                <Fragment>
                                    <ProfileOverview user={user} userHasFracao={userHasFracao} />
                                    <Row style={{ marginTop: '20px' }} type="flex" justify="space-between">
                                        <Button onClick={() => this.handleStartEditing(false)}>Alterar Palavra-Passe</Button>
                                        <Button type="primary" onClick={this.handleStartEditing}><EditOutlined ></EditOutlined>Editar</Button>
                                    </Row>
                                </Fragment>

                            }



                        </Col>

                    </Row>
                </div>
            </DashboardLayout >
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateMe: (data) => dispatch(updateMe(data)),
        updatePhoto: (data) => dispatch(updatePhoto(data)),
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        userHasFracao: state.auth.userHasFracao
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
