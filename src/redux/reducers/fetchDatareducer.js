import * as actionTypes from '../actions/actionTypes';
const initialState = {
    data:{},
    page:0,
    loading:true,
    error:false
}
const setDatareducer = (state=initialState, {type,payload}) =>{
    switch (type) {
        case actionTypes.FETCH_DATA:
            return {
                ...state,
                data: payload,
                page: payload.page,
                error:false
            }
        case actionTypes.LOADING_INDICATOR:
            return {
                ...state,
                loading:payload,
                error:false
            }    
            case actionTypes.UPDATE_PAGENUM:
                return {
                    ...state,
                    page:payload,
                    error:false
                }      
            case  actionTypes.MODIFY_DATA:
                return{
                    ...state,
                    data:payload,
                    error:false,
                }   
            case actionTypes.FETCH_NEWS_FAILED:
                return{
                    ...state,
                    error:true,
                    loading:false
                }    
        default:
            return state;
    }
};


export default setDatareducer;

