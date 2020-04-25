import React, { Component, Fragment} from 'react';
import { NavbarToggler, Collapse, Nav} from 'reactstrap';
import { Navigation, Content } from 'react-mdl';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from '../auth/RegisterModal';
import LogOut from '../auth/LogOut';
import LoginModal from '../auth/LoginModal';

class MenuLogin extends Component {

    state = {
      isOpen: false
    }

    static propTypes = {
      auth: PropTypes.object.isRequired
    }

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  
    render(){

      const { isAuthenticated, user } = this.props.auth;
      const authLinks = (
      <Fragment>
        { user ? (user.is_admin === true ? 
        
          (<Navigation>

            <Link to="/dashboard"> Dashboard</Link>
            <Link>
                <LogOut/>
            </Link>
          </Navigation>) :

          (<Navigation>
            
            <Link>
                <LogOut/>
            </Link>
          </Navigation> ) 
          ): ''
        }
      </Fragment>
    );

    const guestLinks = (
      <Navigation className="pt-0">
        <Link >
          <LoginModal/>
        </Link>
        <Link>
          <RegisterModal/>
        </Link>
      </Navigation>
    );

    return (
      <nav class="navbar-dark navbar-expand-sm">
        <div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav  className="embed-responsive ">
              { isAuthenticated ? authLinks : guestLinks }
            </Nav>
          </Collapse>
        </div>
      </nav>
    );
  }
}
  
  const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps, null)(MenuLogin);