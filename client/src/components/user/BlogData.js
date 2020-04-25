import React from 'react';
import { Grid, Cell, Dialog, CardMenu, CardTitle, CardText, CardActions, FABButton, Icon} from'react-mdl';
import { connect } from 'react-redux';
import { getBlog} from '../../actions/resumeActions';


const BlogData = ({ blogs, toggle, handleCloseDialog, ...state}) => {
    const itemsPerPage = 6; 
    let activeBlogs = blogs.slice (itemsPerPage * state.activePage - itemsPerPage, itemsPerPage * state.activePage);
    return( 
        <Grid style={{padding: 0, display: 'contents'}}>

            {activeBlogs.map(({ _id, blog_name, blog_desc, blog_image_link, blog_by_author }) => (
            <Cell col={12}>
                <Dialog open={state.openDialog && state.justClicked === _id} className="open-dialog">

                    {blog_image_link ?
                        (<CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${blog_image_link})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}}>{blog_name}</CardTitle>) :

                        (<CardTitle className="card-blog-title-image">{blog_name}</CardTitle>
                        )
                    }
                    <CardText>
                        {blog_desc}
                    </CardText>
                    <CardActions border>
                    <p style={{float:'right', fontWeight:'bold'}}>Author: {blog_by_author}</p>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <FABButton onClick={handleCloseDialog} className="close-button" >
                            <Icon name="close" />
                        </FABButton>
                    </CardMenu>
                </Dialog>
            </Cell>
            ))}
        </Grid>
        
    )
}

const mapStateToProps = state => ({
    resume: state.resume,
    auth: state.auth
})

export default connect(mapStateToProps, { getBlog })(BlogData);