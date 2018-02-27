/**
 * Created by SLEEK on 2/11/2018.
 */
import axios from 'axios';
import {FETCH_HISTORY_SUCCESS} from './types';
const history = 'https://fast-harbor-86248.herokuapp.com/v1/call-history';

export const fetchHistorySuccess = (call_history) =>{
    return{
        type: FETCH_HISTORY_SUCCESS,
        call_history
    }
};

export default function fetchHistory(){
    return (dispatch) => {
        return axios.get(history)
            .then(res => {
                dispatch(fetchHistorySuccess(res.data));
            })
            .catch(err =>{
                throw(err);
            })
    }
}