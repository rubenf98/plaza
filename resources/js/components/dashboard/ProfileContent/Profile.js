
import DashboardLayout from '../DashboardLayout';
import React, { Fragment } from 'react';
import { Col, Row } from 'antd';
import ProfileOverview from './ProfileOverview';
import ProfileForm from './ProfileForm';
import { connect } from "react-redux";
import { EditOutlined } from '@ant-design/icons';
import moment from 'moment';

class Profile extends React.Component {
    state = {
        editing: false,
        refactorUser: null
    }

    componentDidMount() {
        let refactorUser = this.props.user;

        this.props.user.fracaos.length > 0 && (refactorUser.fracao = ["bloco-" + this.props.user.fracaos[0].bloco_id, this.props.user.fracaos[0].id]);

        refactorUser.b_day = moment(this.props.user.b_day);

        this.setState({
            refactorUser: refactorUser
        })
    }

    handleStartEditing = () => {
        this.setState({ editing: true })
    }

    handleFinishEditing = () => {
        this.setState({ editing: false })
    }

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
        let { user, userHasFracao } = this.props;
        let { editing } = this.state;

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
                        <Col lg={24} xl={10}>
                            <img className="profile-picture" src={user.photo} />
                        </Col>
                        <Col lg={24} xl={14} className="profile-details">
                            {editing ?
                                <ProfileForm
                                    user={this.state.refactorUser}
                                    formRef={this.formRef}
                                    handleFinishEditing={this.handleFinishEditing}
                                />
                                :
                                <Fragment>
                                    <Row type="flex" justify="end">
                                        <EditOutlined className="edit-button" onClick={this.handleStartEditing} />
                                    </Row>
                                    <ProfileOverview user={user} userHasFracao={userHasFracao} />
                                </Fragment>

                            }



                        </Col>

                    </Row>
                </div>
            </DashboardLayout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        userHasFracao: state.auth.userHasFracao
    };
};

export default connect(
    mapStateToProps,
    null
)(Profile);
