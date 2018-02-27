/**
 * Created by SLEEK on 2/2/2018.
 */
import axios from 'axios';
import {FETCH_CONTACTLIST_SUCCESS} from './types'
const contactList = 'https://fast-harbor-86248.herokuapp.com/v1/contacts';
const fetchContactListSuccess = (contact_list) =>{
    return{
        type: FETCH_CONTACTLIST_SUCCESS,
        contact_list
    }
};

export default function fetchContactList(){
    return (dispatch) => {
        return axios.get(contactList)
            .then(res => {
                dispatch(fetchContactListSuccess(res.data));
            })
            .catch(err =>{
                throw(err);
            })
    }
}