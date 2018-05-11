/**
 * Created by SLEEK on 12/9/2017.
 */
import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import Moment from 'react-moment';
import {Button, Icon} from 'react-materialize';
import { bindActionCreators } from 'redux';
import {connect} from "react-redux";
import historyAction from '../actions/historyActions';
import PropTypes from 'prop-types';

class CallHistory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history: []
        };
    }

    componentDidMount() {
        this.props.historyAction();
    }

    historyDelete(key){
        const callHistory = this.props.history[key];
        const id = callHistory._id;
        const dbUrl = 'https://fast-harbor-86248.herokuapp.com/v1/dialer/' + id;

        if (confirm("Delete contact " + callHistory.name + "?")) {
            return (axios.delete(dbUrl)
                .then((response) => {
                    console.log(response);
                    this.setState({history: this.state.history});
                    this.setState({status: response.status});
                })
                .catch((error) =>{
                    console.log(error);
                }));
        }
        return false;
    }

    static refreshDelete(){
        window.location.reload(true);
    }

    renderHistory(){
        return _.map(this.props.history.sort().reverse(), (history, key) =>

            <div key={key}>
                <div>
                    <h6>Name: {history.name} </h6>
                    <Button className="floater" onClick={()=> this.historyDelete(key) }><Icon >delete</Icon></Button>
                </div>
                <label>
                    <p>Phone number: {history.phone_number}</p>
                    <div >Time: <Moment format="DD/MM HH:mm">{history.time}</Moment></div>
                </label>
            </div>
        );
    }

    render(){
       return(
           this.state.status ? CallHistory.refreshDelete()
           : <div>
               {this.renderHistory()}
            </div>
       )
    }
}

function mapStateToProps(state){
    return {
        history: state.history
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({historyAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CallHistory);

CallHistory.propTypes = {
    id: PropTypes.string,
    history: PropTypes.array,
    contactList: PropTypes.object,
    name: PropTypes.string,
    address: PropTypes.string,
    phone_number: PropTypes.string
};