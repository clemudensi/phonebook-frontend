import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabscreen from './components/tabscreen'
import {Route, Switch } from 'react-router-dom';
import ContactView from './components/people/contact-view-items';
import axios from "axios";
import './css/style.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            // contactList: this.state.contactList
        }
    }

    componentDidMount(){
        let contactList = 'https://fast-harbor-86248.herokuapp.com/v1/contacts';
        let callHistory = 'https://fast-harbor-86248.herokuapp.com/v1/call-history';
        const that = this;
        that.serverRequest = axios.all([
            axios.get(contactList),
            axios.get(callHistory)
        ])
            .then( axios.spread((list, history) => {
                this.setState({contactList: list.data, callHistory: history.data});
            }))
            .catch(function (error) {
                 console.error(error);
                 })
            }

    componentWillUnmount(){
        this.serverRequest.abort();
    }

      render() {
        console.log(this.state.contactList);
        return (
            <Switch>
                <Route exact path="/contact/:id"
                       component={(props)=> <ContactView contactList={this.state.contactList}
                                                         id={props.match.params.id} />} />
                <Route path="/"
                       render={(props)=> <MuiThemeProvider ><Tabscreen
                           contactList={this.state.contactList}
                           callHistory={this.state.callHistory}
                           id={props.match.params.id} /></MuiThemeProvider>} />
            </Switch>

        );
      }
}

export default App;
