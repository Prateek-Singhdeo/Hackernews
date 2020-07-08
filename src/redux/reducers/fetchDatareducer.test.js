import reducer from './fetchDatareducer';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            data:{},
            page:0,
            loading:true,
            error:false
        });
    });

    it('should update error state', () => {
        expect(reducer({
            data:{},
            page:0,
            loading:true,
            error:false
        }, { 
            type: actionTypes.FETCH_NEWS_FAILED
         })).toEqual({
            data:{},
            page:0,
            loading:false,
            error:true
        });
    })
});
