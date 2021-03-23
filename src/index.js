import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_config from './aws-exports';
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'

import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

const client = new AWSAppSyncClient({
    url: aws_config.aws_appsync_graphqlEndpoint,
    region: aws_config.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: aws_config.aws_appsync_apiKey,
    },
});


ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
