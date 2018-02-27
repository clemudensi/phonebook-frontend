/**
 * Created by SLEEK on 2/13/2018.
 */
import axios from 'axios';
import {FETCH_CONTACT_VIEW} from './types';
import {fetchHistorySuccess} from './historyActions'

export const fetchViewSuccess = (contact_view) => {
    return{
        type: FETCH_CONTACT_VIEW,
        contact_view
    }
};

export default function fetchContactView() {
    let contact = 'https://fast-harbor-86248.herokuapp.com/v1' + location.pathname;
    let callHistory = 'https://fast-harbor-86248.herokuapp.com/v1/call-history';
    return (dispatch) => {
        axios.all([
            axios.get(contact),
            axios.get(callHistory)
        ])
            .then(axios.spread((contact, callHistory) =>{
                dispatch(fetchViewSuccess(contact.data));
                dispatch(fetchHistorySuccess(callHistory.data));
            }))
            .catch((err)=> {
                return (err);
            })
    }
}