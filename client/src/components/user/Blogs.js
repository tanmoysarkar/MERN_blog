import React, {Component, useState , useEffect} from 'react';
import ReactGA from 'react-ga';
import {Card, Grid, Cell, Dialog, CardMenu, Button, CardTitle, CardText, CardActions, FABButton, Icon} from'react-mdl';
import { Container, Modal,  ModalHeader, ModalBody, Form, FormGroup, Label, Input,} from 'reactstrap';
import { connect } from 'react-redux';
import { getBlog, deleteBlog, updateBlog } from '../../actions/resumeActions';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Moment from 'moment';
import BlogModal from "./BlogModal";
import Pagination from "react-js-pagination";
import EditBlog from "./EditBlog";
import BlogData from "./BlogData";

class Blogs extends Component{
    constructor(props) {
        super(props);
            this.state = {
                modal: false,
                justClicked: null,
                activePage: 1,
                requiredItem : null,
                _id: '',
                blog_short_desc: '',
                blog_name: '',
                blog_desc: '',
                blog_image_link: '',
                blog_by: '',
                blog_by_author: ''
            };
            this.handleOpenDialog = this.handleOpenDialog.bind(this);
            this.handleCloseDialog = this.handleCloseDialog.bind(this);
            this.replaceModalItem = this.replaceModalItem.bind(this);
            this.onTodoChange = this.onTodoChange.bind(this);
        }

    static propTypes = {
        getBlog: PropTypes.func.isRequired,
        deleteBlog: PropTypes.func.isRequired,
        updateBlog: PropTypes.func.isRequired,
        resume: PropTypes.object.isRequired,
        auth: PropTypes.object.isRequired,
        loading: PropTypes.object.isRequired
    }

    toggle = (id) => {
        this.setState({
            modal: !this.state.modal
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.name
        })
    }

    componentDidMount() {
        this.props.getBlog();
    }

    replaceModalItem(id) {
        this.setState({
          modal: true,
          requiredItem: id
        });
    }

    onTodoChange = (e) => {
        this.setState({ 
            [e.target.name] : e.target.value 
        });
    }

    onSubmit = (e, id) => {
        debugger
        e.preventDefault();
        const updatedBlog = {
            blog_short_desc: this.state.blog_short_desc,
            blog_name: this.state.blog_name,
            blog_desc: this.state.blog_desc,
            blog_image_link: this.state.blog_image_link,
            blog_by:  this.props.auth["user"]._id,
            blog_by_author: this.props.auth["user"].name
        }
        debugger
        //update blog via updateblog action
        this.props.updateBlog(id, updatedBlog, this.props.history);
        alert("Blog updated successfully!");
        //close modal
        e.target.reset();
        this.toggle();
    }

    handleOpenDialog(id) {
        this.setState({
          openDialog: true,
          OpenEditDialog: true,
          justClicked: id

        });
    }

    handleCloseDialog() {
    this.setState({
        openDialog: false
    });
    }

    onDeleteBlogClick = (id) => {
        this.props.deleteBlog(id);
    };

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
    }

    render(){
        const { blogs, loading} = this.props.resume;
        const {  user, isAuthenticated } = this.props.auth;
        const itemsPerPage = 6; 
        let activeBlogs = blogs.slice (itemsPerPage * this.state.activePage - itemsPerPage, itemsPerPage * this.state.activePage);
        return(
            <Container>
            {loading ? (
            <div><Loading/></div>
            ) : (
                <div>
                    {/* blog modal */}
                    <BlogModal />

                    {/* card dialog */}
                    <BlogData blogs={blogs} user={this.props.auth} handleCloseDialog={this.handleCloseDialog}  {...this.state} toggle={this.toggle}/>
                    {/* edit card dialog */}
                    <EditBlog blogs={blogs} user={this.props.auth} onTodoChange={this.onTodoChange}  {...this.state} toggle={this.toggle} onSubmit={this.onSubmit}/>
                    <Grid style={{padding: 0}} id="todo">
                        {activeBlogs.map((item, i) => (
                            <Cell key={item._id} data-id={item._id}>   
                                <Card shadow={5} className="cards-grid">
                                    {item.blog_image_link ?
                                        (<CardTitle style={{color: '#fff', height: '200px',
                                        width: 'auto', backgroundImage: `url(${item.blog_image_link})`, backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'}}></CardTitle>) :

                                        (<CardTitle className="card-title-image"></CardTitle>
                                        )
                                    }

                                    <CardText>
                                        <b>{item.blog_short_desc}</b>
                                    </CardText>

                                    <CardActions border>
                                        <p className="block-data-details">
                                            <Button className="blog-read-me-button col-4" onClick={this.handleOpenDialog.bind(this, item._id)}>Read </Button> 

                                            
                                            <span className="col=8">

                                            <Button className="remove-btn-blog-post"
                                            color="danger"
                                            size="sm"
                                            onClick= {this.onDeleteBlogClick.bind(this, item._id)} title="Delete Blog">
                                                &times;
                                            </Button> 
                                            <a className="btn edit-btn-blog-post" href="#" onClick={this.replaceModalItem.bind(this, item._id)}  title="Edit Blog">
                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                            </a>
                                            </span> 
                                        </p>
                                        <p style={{ fontStyle:'italic', fontWeight:'bold'}}>By-{item.blog_by_author} <span style={{float:'right',}}>{Moment(item.date).format('Do MMMM YYYY')}</span></p> 
                                    </CardActions>
                                </Card>  
                            </Cell>  
                        ))} 
                    </Grid>
                </div> 
                )}
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={6}
                    totalItemsCount={blogs.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                    itemClass='page-item'
                    linkClass='page-link'
                />
            </Container>
        ) 
   }
}

const mapStateToProps = (state) => ({
    resume: state.resume,
    auth: state.auth,
    loading: state.apiCallsInProgress > 0
});

export default connect(mapStateToProps, {getBlog, deleteBlog, updateBlog }) (Blogs);
