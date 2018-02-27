/**
 * Created by SLEEK on 2/13/2018.
 */
import {FETCH_CONTACT_VIEW} from '../actions/types';

export default function reducer(state=[], action){
    switch (action.type) {
        case FETCH_CONTACT_VIEW:
            return action.contact_view;
    }
    return state;
}