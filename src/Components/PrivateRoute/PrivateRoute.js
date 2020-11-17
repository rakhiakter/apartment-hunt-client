import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { addLoggedInUser } from '../Redux/actions/addInfo';

function PrivateRoute({ info, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                info.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

const mapStateToProps = state => {
    return {
        info: state.info
    }
}

const mapDispatchToProps = {
    addLoggedInUser: addLoggedInUser
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);