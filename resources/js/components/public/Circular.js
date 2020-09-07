import React from 'react'
import {
    fetchCircular
} from "../../redux/circular/actions";
import { connect } from "react-redux";
import { Row } from "antd";
import PageFooter from "../common/PageFooter";
import PdfDocument from '../common/PdfDocument';
import LoadingContainer from '../common/LoadingContainer';

class Circular extends React.Component {

    componentDidMount() {
        this.props.fetchCircular(this.props.match.params.id);
    }

    render() {
        let { circular, loading } = this.props;

        return (
            <div className="page-dimensions">
                <div className="single-circular-page-container ">
                    <div className="single-circular-container page-container">
                        <Row type="flex" justify="center" className="pdf-document-container">
                            <LoadingContainer loading={loading}>
                                <PdfDocument pdf={`${window.location.origin}/api/pdf/${circular.link}`}></PdfDocument>
                            </LoadingContainer>
                        </Row>
                    </div>
                </div>
                <footer style={{ display: "block" }} className="layout-footer" >
                    <PageFooter />
                </footer>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCircular: (id) => dispatch(fetchCircular(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        circular: state.circular.current,
        loading: state.circular.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Circular);