import * as types from '../actions/types';

const initialState = {
    blogs: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type) {

        //blogs
        case types.GET_BLOG:
            return {
                ...state,
                blogs: action.payload,
                loading: false
            };
        case types.EDIT_BLOG:
            return {
                ...state,
                blogs: action.payload,
                loading: false
            };
        case types.DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload)
            };
        case types.ADD_BLOG:
            return {
                ...state,
                blogs: [action.payload, ...state.blogs]
            };
        case types.UPDATE_BLOG:
            return {
                ...state,
                updatedBlog: action.payload, 
                loading: false
            };
            
    
        case types.RESUMES_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;

    }
}