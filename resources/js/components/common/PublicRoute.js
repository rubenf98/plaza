import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

export const PublicRoute = ({ component: Component, isAuthenticated, loading, ...rest }) => {
    return (
        !loading && (
            <Route
                {...rest}
                render={(props) =>
                    !isAuthenticated ? (
                        <Component {...props} />
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/",
                                    state: { from: props.location },
                                }}
                            />
                        )
                }
            />
        )
    );
};

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.auth.loading
    };
}

export default connect(mapStateToProps)(PublicRoute);