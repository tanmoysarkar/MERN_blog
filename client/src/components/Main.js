import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Blogs from './user/Blogs';

class Main extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        loading: PropTypes.object.isRequired
    }


    render(){
        const { isAuthenticated, user, loading} = this.props.auth;

        return(
            <Switch>
            
            <Route exact path="/" component={Blogs}/>
           

            </Switch>

        )
    }

}

const mapStateToProps = state => ({
auth: state.auth,
loading: state.apiCallsInProgress > 0
});

export default connect(mapStateToProps, null)(Main);
