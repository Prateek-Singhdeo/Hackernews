import * as actionTypes from '../actions/actionTypes';
import { modifyData } from '../actions/fetchdata';
const initialState = {
   modified:[]
}
const modifyDataReducer = (state=initialState, {type,payload}) =>{
    switch (type) {
        case actionTypes.FETCH_DATA:
            return {
                ...state,
                data: payload,
                page: payload.page
            }
        case actionTypes.LOADING_INDICATOR:
            return {
                ...state,
                loading:payload
            }    
            case actionTypes.UPDATE_PAGENUM:
                return {
                    ...state,
                    page:payload
                }      
            case  actionTypes.MODIFY_DATA:
                return{
                    ...state,
                    data:payload
                }   
            case actionTypes.FETCH_NEWS_FAILED:
                return{
                    ...state
                }    
        default:
            return state;
    }
};


export default modifyDataReducer;

