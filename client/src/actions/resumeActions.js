import axios  from 'axios';
import * as types from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

// blogs

export const getBlog = () => dispatch => {
    dispatch(setResumesLoading());
    axios
        .get('/api/blogs')
        .then(res => 
            dispatch({
                type: types.GET_BLOG,
                payload: res.data
            })
        ).catch (err => dispatch (returnErrors(err.response.data, err.response.status)));
};

export const addBlog = blog => (dispatch, getState) => {
   axios
   .post('/api/blogs', blog, tokenConfig(getState))
   .then(res => 
    dispatch({
        type: types.ADD_BLOG,
        payload: res.data
    })).catch (err => dispatch (returnErrors(err.response.data, err.response.status)));
};

export const editBlog = id => (dispatch, getState) => {
    axios
    .post(`/api/blogs/edit/${id}`, tokenConfig(getState)).then(res => 
        dispatch({
            type: types.EDIT_BLOG,
            payload: res.data

        })).catch (err => dispatch (returnErrors(err.response.data, err.response.status)));
};

export const updateBlog = (id, blog) => (dispatch, getState) => {
    axios
    .post(`/api/blogs/update/${id}`, blog, tokenConfig(getState))
    .then(res => 
     dispatch({
         type: types.UPDATE_BLOG,
         payload: res.data
     })).catch (err => dispatch (returnErrors(err.response.data, err.response.status)));
 };

export const deleteBlog = id => (dispatch, getState) => {
    axios
    .delete(`/api/blogs/${id}`, tokenConfig(getState)).then(res => 
        dispatch({
            type: types.DELETE_BLOG,
            payload: id

        })).catch (err => dispatch (returnErrors(err.response.data, err.response.status)));
};

export const setResumesLoading = () => {
    return {
        type: types.RESUMES_LOADING
    };
};
