/**
 * Created by SLEEK on 2/1/2018.
 */
import {FETCH_HISTORY_SUCCESS} from '../actions/types';

export default function reducer(state=[], action){
    switch (action.type) {
        case FETCH_HISTORY_SUCCESS:
            return action.call_history
    }
    return state;
}