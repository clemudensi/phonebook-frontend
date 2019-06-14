/**
 * Created by SLEEK on 11/28/2017.
 */
import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Dialer from '../components/people/dialer';
import {Button, Col, Preloader, Row} from 'react-materialize';
import ContactForm from "../components/people/contact-edit";
import fetchContactView from '../actions/viewActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
// import ReactLoading from 'react-loading';
import {connect} from "react-redux";

class ContactView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
        };

        this.handleContactDelete = this.handleContactDelete.bind(this);
        this.renderContactAction = this.renderContactAction.bind(this);
    };

    componentDidMount(){
       this.props.fetchContactView();
    }


    handleContactDelete () {
        const dbUrl = 'https://fast-harbor-86248.herokuapp.com/v1/contact/' + this.props.id;
        if (confirm("Delete contact " + this.props.contactView.name + "?")) {
            return (axios.delete(dbUrl)
                .then((response) => {
                    console.log(response);
                    this.setState({status: response.status});
                })
                .catch((error) =>{
                    console.log(error);
                }));
        }
        return false;
    };

    renderContactAction(){
        const contact = this.props.contactView;
        if(this.state.isEditing){
            return(
                <ContactForm contact={this.props.contactView} {...this.props} onCancelClick={this.onCancelClick.bind(this)} />
            );
        }
        return contact ? (
            <div className="body-contact-view">
                <label>
                    <div className="floater">
                        <Dialer contact={this.props.contactView} callHistory={this.state.history} {...this.props} />
                    </div>
                    <h1>{contact.name}</h1>
                </label>
                <p>{contact.address}</p>
                <div>
                    {contact.phone_number}
                </div>
                <div className="contact-list contact-list-action">
                    <Button onClick={this.onEditClick.bind(this)}>Edit</Button>
                    <Button type="submit" onClick={this.handleContactDelete.bind(this)}>Delete</Button>
                </div>
            </div>
        ) : (
            /*<ReactLoading type={spin} color="#ffbb22" height='667' width='375' />*/
            //noinspection BadExpressionStatementJS
            <Row>
                <Col s={4}>
                    <Preloader size='small'/>
                </Col>
            </Row>)
    };

    onEditClick(){
        this.setState({isEditing: true});
    };

    onCancelClick(){
        this.setState({isEditing: false});
    };

    render(){
        return(
            this.state.status ? <Redirect to="/" />
                : <div className="title">
                {this.renderContactAction()}
            </div>
        )
    }
}


function mapStateToProps(state, ownProps){
    console.log(ownProps, "Own Props");
    return {
        history: state.history,
        contactView: state.contactView,
    }
}

function mapDispatchToProps(dispatch, ownProps){
    console.log(ownProps, "Dispatch");
    return bindActionCreators({fetchContactView}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactView);

ContactView.propTypes = {
    id: PropTypes.string,
    contacts: PropTypes.array,
    contact: PropTypes.object,
    name: PropTypes.string,
    address: PropTypes.string,
    phone_number: PropTypes.string
};