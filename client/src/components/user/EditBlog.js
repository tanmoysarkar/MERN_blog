import React from 'react';
import { Button, Modal,  ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row} from 'reactstrap';
import { connect } from 'react-redux';
import { updateBlog} from '../../actions/resumeActions';


const EditBlog = ({ blogs, toggle, onTodoChange, onSubmit, ...state}) => {
    const itemsPerPage = 6; 
    let activeBlogs = blogs.slice (itemsPerPage * state.activePage - itemsPerPage, itemsPerPage * state.activePage);
    return( 
        <span>
            {activeBlogs.map(({ _id, blog_short_desc, blog_name, blog_desc, blog_image_link, blog_by_author }) => (
            <Modal 
                isOpen = {state.modal && state.requiredItem === _id}
                toggle = {()=>this.toggle(_id)}    
            >
                <ModalHeader toggle={toggle}  style={{fontWeight: "bold"}}>
                    Edit your blog {state.blog_name}
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={e => onSubmit(e, state._id )}>
                        <FormGroup>
                            <Label for="blogHeading">Blog Heading</Label>
                            <Input type="text" name="blog_short_desc" id="blogHeading" placeholder="Update one liner"
                            onChange={onTodoChange} value={blog_short_desc}/>
                            <Label for="blogName">Blog Name</Label>
                            <Input type="text" name="blog_name" id="blogName" placeholder="Update blog name"
                            onChange={onTodoChange} value={blog_name}/>
                            <Label for="desc1">Description </Label>
                            <Input type="textarea" name="blog_desc" id="desc1" placeholder="Update your blog"
                            onChange={onTodoChange} value={blog_desc}/>
                            <Label for="imageUrl">Image Url</Label>
                            <Input type="text" name="blog_image_link" id="imageUrl" placeholder="Update image url (Optional)"
                            onChange={onTodoChange} value={blog_image_link}/>
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                            >Edit blog</Button>
                        </FormGroup>
                </Form>
                </ModalBody>
            </Modal>
            ))}
        </span>
        
    )
}

const mapStateToProps = state => ({
    resume: state.resume,
    auth: state.auth
})

export default connect(mapStateToProps, { updateBlog })(EditBlog);