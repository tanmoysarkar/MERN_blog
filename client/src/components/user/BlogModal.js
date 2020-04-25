import React, { Component } from 'react';
import { Button, Modal,  ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row} from 'reactstrap';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { addBlog} from '../../actions/resumeActions';
import PropTypes from 'prop-types';
import { Container, Col } from "reactstrap";
import Loading from './Loading';
import ShareSocial from './ShareSocial';

class BlogModal extends Component {
    state = {
        modal: false,
        blog_short_desc: '',
        blog_name: '',
        blog_desc: '',
        blog_image_link: '',
        blog_by: '',
        blog_by_author: ''

    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newBlog = {
            blog_short_desc: this.state.blog_short_desc,
            blog_name: this.state.blog_name,
            blog_desc: this.state.blog_desc,
            blog_image_link: this.state.blog_image_link,
            blog_by:  this.props.auth["user"]._id,
            blog_by_author: this.props.auth["user"].name
        }
        debugger
        //Add item via addItem action
        this.props.addBlog(newBlog);
        alert("Blog added successfully!");
        //close modal
        this.toggle();
    }
    render(){
        const { isAuthenticated, user } = this.props.auth;
       
        return(
            <div>
                <Grid >
                    <Cell col={7}>
                    { isAuthenticated ? 
                        <Button 
                            color="dark"
                            style={{marginBottom: '2rem'}}
                            onClick={this.toggle}
                            className="m-3"
                        >
                            Add Blog
                        </Button> : <h4 className="m-3"> Please login to add blog!</h4> }
                    </Cell>

                    
                    <Cell col={5} >
                        <ShareSocial/>
                    </Cell>
                    </Grid>
                <Modal 
                    isOpen = {this.state.modal}
                    toggle = {this.toggle}    
                >
                    <ModalHeader toggle={this.toggle}>
                        Add to blog List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit ={this.onSubmit }>
                            <FormGroup>
                                <Label for="blogHeading">Blog Heading</Label>
                                <Input type="text" name="blog_short_desc" id="blogHeading" placeholder="Add one liner"
                                onChange={this.onChange} required/>
                                 <Label for="blogName">Blog Name</Label>
                                <Input type="text" name="blog_name" id="blogName" placeholder="Add blog name"
                                onChange={this.onChange} required/>
                                <Label for="desc1">Description </Label>
                                <Input type="textarea" name="blog_desc" id="desc1" placeholder="Add your blog"
                                onChange={this.onChange} required/>
                                 <Label for="imageUrl">Image Url</Label>
                                <Input type="text" name="blog_image_link" id="imageUrl" placeholder="Add image url (Optional)"
                                onChange={this.onChange}/>
                                

                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add blog</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    resume: state.resume,
    auth: state.auth
})

export default connect(mapStateToProps, { addBlog })(BlogModal);