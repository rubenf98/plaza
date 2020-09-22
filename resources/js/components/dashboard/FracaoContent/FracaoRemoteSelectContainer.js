import React, { Component } from "react";
import { Form, Cascader, Skeleton } from "antd";
import { connect } from "react-redux";
import { fetchBlocoSelector } from "../../../redux/bloco/actions";
import LoadingContainer from "../../common/LoadingContainer";

class FracaoRemoteSelectContainer extends Component {
    state = {
        options: null,
        loading: true
    }

    componentDidMount() {
        let options = [];
        let children = [];

        this.props.fetchBlocoSelector().then((response) => {
            response.action.payload.data.data.forEach((bloco) => {
                bloco.fracaos.forEach((fracao) => {
                    children.push({
                        value: fracao.id,
                        label: fracao.nome,
                        disabled: fracao.user ? true : false
                    });
                });
                options.push({
                    value: "bloco-" + bloco.id,
                    label: bloco.nome,
                    children: children,
                });
                children = [];
            });

            this.setState({
                options: options,
                loading: false
            });
        });
    }

    render() {
        const { options, loading } = this.state;
        const { label, name } = this.props;
        return (
            <Form.Item name="fracao" label={label}>
                {loading ?
                    <Skeleton.Input style={{ width: "100%" }} size="small" /> :
                    <Cascader
                        placeholder="Indique a sua fração"
                        expandTrigger="hover"
                        options={options}
                    />
                }
            </Form.Item>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBlocoSelector: () => dispatch(fetchBlocoSelector()),
    };
};

const mapStateToProps = (state) => {
    return {
        selector: state.bloco.selector,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FracaoRemoteSelectContainer);
