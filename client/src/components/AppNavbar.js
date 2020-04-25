import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavLink,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LogOut from './auth/LogOut';
import LoginModal from './auth/LoginModal';

class AppNavbar extends Component {
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
            
                (<Fragment>
                    <NavItem>
                        <span className="navbar-text mr-3">
                            <strong>
                                { user ? (user.is_admin === true ? `Welcome Admin ${user.name}` : `Welcome ${user.name}` ) : '' }
                                
                            </strong>
                        </span>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/dashboard"> Admin</NavLink>
                    </NavItem>
                    <NavItem>
                        <LogOut/>
                    </NavItem>
                </Fragment>) :

                (<Fragment>
                    <NavItem>
                        <span className="navbar-text mr-3">
                            <strong>
                                { user ? (user.is_admin === true ? `Welcome Admin ${user.name}` : `Welcome ${user.name}` ) : '' }
                                
                            </strong>
                        </span>
                    </NavItem>
                    <NavItem>
                        <LogOut/>
                    </NavItem>
                </Fragment> ) 
                ): ''
            }
            
            </Fragment>

            
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                        <NavLink to="/"> Admin</NavLink>
                    </NavItem>
                <NavItem>
                    <LoginModal/>
                </NavItem>
                <NavItem>

                    <RegisterModal/>
                </NavItem>
            </Fragment>
        )
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                { isAuthenticated ? authLinks : guestLinks }

                            </Nav>
                        </Collapse>
                    </Container>

                </Navbar>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);