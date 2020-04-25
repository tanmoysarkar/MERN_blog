import * as types from './types';

//REturn errors
export const returnErrors = (msg, status, id = null) => {
    return {
        type: types.GET_ERRORS,
        payload: {
            msg, status,id
        }
    };
};

//Clear errors
export const clearErrors = () => {
    return {
        type : types.CLEAR_ERRORS
    };
};

export function beginApiCall() {
    return { type: types.BEGIN_API_CALL };
  }
  
export function apiCallError() {
return { type: types.API_CALL_ERROR };
}