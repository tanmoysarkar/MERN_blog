import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import resumeReducer from "./resumeReducer";
import successReducer from "./successReducer";

export default combineReducers({
    resume: resumeReducer,
    error: errorReducer,
    auth: authReducer,
    success: successReducer

});