import * as actionTypes from './actionTypes';

export const setData = (data) => {
    return {type: actionTypes.FETCH_DATA, payload:data}
}
export const updatePageNum = (page) => {
    return {type: actionTypes.UPDATE_PAGENUM, payload:page}
}
export const fetchNewsFailed = () => {
    return {
        type: actionTypes.FETCH_NEWS_FAILED
    };
};
export const getData = (page=0) => {
    return async(dispatch) => {
        try {
                const BASE_URL = "https://hn.algolia.com/api/v1/search?";
            let url;
            if(page) {
                url = BASE_URL+'page='+page;   
            }
            else{
                    url = BASE_URL+'tags=front_page';
            }  
            dispatch({type:actionTypes.LOADING_INDICATOR, payload:true}); 
            let res = await fetch(url);
            let data = await res.json();
            dispatch(setData(data));
            dispatch({type:actionTypes.LOADING_INDICATOR, payload: false});
        }
        catch (error) {
            dispatch(fetchNewsFailed());
        }
        
    }        

}

export const modifyData = (data) => {
    return {type: actionTypes.MODIFY_DATA, payload: data};
}
    
