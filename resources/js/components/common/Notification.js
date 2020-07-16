import React, { Component } from "react";
import { notification } from "antd";
import { connect } from "react-redux";
import { reset } from "../../redux/notification/actions";

class Notification extends Component {
    handleClose = () => {
        this.props.reset();
    };

    openNotification = (content) => {
        content.type == "success" ?
            notification.success({
                message: content.message,
                description: content.description,
                duration: 10,
                onClose: this.handleClose
            }) : notification.error({
                message: content.message,
                description: content.description,
                duration: 10,
                onClose: this.handleClose
            })
    };

    render() {
        const { hasContent, content } = this.props;

        return (
            <div>
                {hasContent && this.openNotification(content)}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch(reset()),
    };
};

const mapStateToProps = (state) => {
    return {
        hasContent: state.notification.hasContent,
        content: state.notification.content,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification);
