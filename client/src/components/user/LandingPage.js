import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from '../Main';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuLogin from './MenuLogin';
import FooterBody from "./Footer";
import BlogModal from "./BlogModal";

class LandingPage extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }
    
    render(){
        const { isAuthenticated, user } = this.props.auth;

        return(
            
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Tanmoy Sarkar</Link>} scroll>
                        
                        <Navigation >
                            <Link to="/">Home</Link>
                            
                            
                            <MenuLogin/>
                        </Navigation>
                    </Header>
                    <Drawer  title="Tanmoy Sarkar">
                        <Navigation>
                            <strong>
                            { user ? (user.is_admin === true && isAuthenticated ? `Welcome Admin ${user.name}` : `Welcome ${user.name}` ) : '' }  
                            </strong>
                            <Link to="/">Home</Link>
                            <MenuLogin/>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                    
                    <Main/>
                    <FooterBody/>              
                    </Content>
                </Layout>
            </div>
            
        )
    }

}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(LandingPage);
