/**
 * Created by SLEEK on 1/13/2018.
 */
import React, {Component} from 'react';

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component {
        render(){
            return !this.props.contactList ? <div>No contact list found</div> : <WrappedComponent {...this.props}/>
        }
    }
};

export default LoaderHOC;