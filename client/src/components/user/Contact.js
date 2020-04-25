import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent, Button} from 'react-mdl';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { getContact, deleteContact} from '../../actions/resumeActions';
import PropTypes from 'prop-types';
import { Container, Col } from "reactstrap";
import Loading from './Loading';

class Contact extends Component{
	initializeReactGA() {
	    ReactGA.initialize('UA-132348738-1');
	    ReactGA.pageview('/contact');
    }
    
    static propTypes = {
        getContact: PropTypes.func.isRequired,
		deleteContact: PropTypes.func.isRequired,
		resume: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        auth: PropTypes.object.isRequired,
        loading: PropTypes.object.isRequired
    }

    componentDidMount() {
		this.props.getContact();
    }

    onDeleteContactClick = (id) => {
        this.props.deleteContact(id);
    };
    
	render(){
        const { contacts, loading} = this.props.resume;
        const { user } = this.props.auth;
        // const {loading} = this.props.loading;

        
		return(
            <Container>
            {loading ? (
            <div><Loading/></div>
            ) : (
                <div>
                    {contacts.map(({ _id, contact_name, contact_phone, contact_email, contact_skype, contact_image }) => (
                    <Grid key={_id} timeout={100} classNames="fade">
                    
                    {this.props.isAuthenticated && (user.is_admin === true) ? 
                        <Button className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick= {this.onDeleteContactClick.bind(this, _id)}>
                            &times;
                        </Button> : null }
                        <Cell col={6}>
                            <div style={{textAlign: 'center'}}>
                                <h2> {contact_name} </h2>
                                <img src={contact_image}
                                alt="avatar"
                                style={{height: '40%', borderRadius: '50%', width: '50%'}}
                                img-rounded />
                            </div>
                            
                        </Cell>
                        <Cell col={6} className="contact-right-col text-center">
                            
                            <h2 >Contact Me</h2>
                            <hr  className="resume-left-contact-section-border" />
                            
                            <List>
                                <ListItem>
                                    <ListItemContent  className="contact-list-item">
                                        <i className="fa fa-phone-square" aria-hidden="true"/> 
                                        {contact_phone}
                                    </ListItemContent>
                                    
                                </ListItem>
                                <ListItem>
                                    <ListItemContent  className="contact-list-item">
                                        <i className="fa fa-envelope " aria-hidden="true"/> 
                                        {contact_email}
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent  className="contact-list-item">
                                        <i className="fa fa-skype " aria-hidden="true"/> 

                                        {contact_skype}
                                    </ListItemContent>
                                </ListItem>
                                
                            </List>
                            
                        </Cell>
                    </Grid>
                    ))}
                </div> 
                )}
            </Container>
		)
	}
}



const mapStateToProps = (state) => ({
    resume: state.resume,
    isAuthenticated : state.auth.isAuthenticated,
    auth: state.auth,
    loading: state.apiCallsInProgress > 0
});

export default connect(mapStateToProps, {getContact, deleteContact }) (Contact);