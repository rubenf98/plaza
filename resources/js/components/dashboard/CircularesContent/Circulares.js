import React from 'react'
import DashboardLayout from '../DashboardLayout';
import CreateButton from '../../common/CreateButton';
import CircularList from './CircularesList';
import CircularesForm from './CircularesForm';
import { connect } from "react-redux";
import {
    createCircular,
    fetchCircularTags
} from "../../../redux/circular/actions";
import EditModal from '../../common/EditModal';


class Circulares extends React.Component {
    constructor(props) {
        super(props);
        this.filters = {};
        this.state = {
            formVisibility: false
        };
    }
    componentDidMount() {
        this.props.fetchCircularTags();
    }

    handleModalVisible = (aVisible) => {
        this.setState({
            formVisibility: aVisible
        })
    }
    formRef = React.createRef();

    onCancel = () => {
        this.resetModalForm();
    };

    onOkEditClick = () => {
        const form = this.formRef.current;
        form.validateFields().then((data) => {
            let formData = new FormData();
            formData.append("pdf", data.pdf.file);
            formData.append("titulo", data.titulo);
            formData.append("tag_id", data.tag_id);

            this.props.createCircular(formData)
                .then((response) => {
                    this.resetModalForm();
                })
                .catch((error) => {
                    console.log(error)
                });

        });

    };


    resetModalForm = () => {
        this.handleModalVisible(false);
        this.formRef.current.resetFields();
    };

    render() {
        return (
            <DashboardLayout>
                <div className="circular-page-container page-container">
                    <CreateButton
                        handleModalVisible={(aVisible) => this.handleModalVisible(aVisible)}
                        isAdministrator={this.props.isAdministrator}
                    />

                    <EditModal
                        onOkEditClick={() => this.onOkEditClick()}
                        onCancel={() => this.onCancel()}
                        title={"title"}
                        visible={this.state.formVisibility}
                    >
                        <CircularesForm tags={this.props.circularTags} formRef={this.formRef}></CircularesForm>
                    </EditModal>



                    <CircularList />
                </div>
            </DashboardLayout>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createCircular: (data) => dispatch(createCircular(data)),
        fetchCircularTags: () => dispatch(fetchCircularTags()),
    };
};

const mapStateToProps = (state) => {
    return {
        isAdministrator: state.auth.isAdministrator,
        circularTags: state.circular.tags,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Circulares);