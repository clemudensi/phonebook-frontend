import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabscreen from './components/tabscreen'
import {Route, Switch } from 'react-router-dom';
import ContactView from './containers/contact-view';
import './css/style.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

      render() {
        return (
            <Switch>
                <Route exact path="/contact/:id"
                       component={(props)=> <ContactView id={props.match.params.id} />} />
                <Route path="/"
                       render={(props)=> <MuiThemeProvider ><Tabscreen id={props.match.params.id} /></MuiThemeProvider>} />
            </Switch>

        );
      }
}

export default App;
