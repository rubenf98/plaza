import React from 'react'
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/post/actions";

class Example extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <h1>Example</h1>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.post.data,
        history: state.post.history,
        loading: state.post.loading,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Example);