/**
 * Created by SLEEK on 1/31/2018.
 */
import {FETCH_CONTACTLIST_SUCCESS} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CONTACTLIST_SUCCESS:
            return action.contact_list;
        default:
            return state;
    }
};