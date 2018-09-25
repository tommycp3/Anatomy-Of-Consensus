import React, {Component} from 'react';
import Head from 'next/head'
import { Container} from 'semantic-ui-react';
import Favicon from 'react-favicon';

class StoreLayout extends Component {

    render() {
        return (
            <Container className='parent' >
                <Favicon url="/static/images/favicon.png" />
                <Head>
                    <link 
                        rel="stylesheet" 
                        href="/static/dist/semantic.min.css" />
                    <script 
                        type="text/javascript" 
                        src="https://cdn.scheduleonce.com/mergedjs/so.js" />

                </Head>
                {this.props.children}
            </Container>
        );
    }
}

export default StoreLayout;

