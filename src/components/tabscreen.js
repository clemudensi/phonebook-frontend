/**
 * Created by SLEEK on 11/28/2017.
 */
import React from 'react';
import {Tabs, Tab} from 'react-materialize';
import ListExampleContacts from '../containers/contact-list';
import CallHistory from "../containers/history";

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

class TabsExampleSimple extends React.Component{

    render(){
        return (
            <div className="title">
                <Tabs className='tab-demo z-depth-1'>
                    <Tab title="Dialer" tabWidth={4}><h2 style={styles.headline}>Dial Pad Original</h2></Tab>
                    <Tab title="Call History" tabWidth={4}><CallHistory /></Tab>
                    <Tab title="People" active={true} tabWidth={4}><ListExampleContacts /></Tab>
                </Tabs>
            </div>
        )
    }
}


export default TabsExampleSimple;

