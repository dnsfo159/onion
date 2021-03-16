import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from './Layout';

const DynamicPage = () => {
    return (
        <Layout>
            <Header as="h2">Dynamic Page</Header>
            <p>This page was loaded asynchronously!!! Hot loder 잘되네 뭐!</p>
        </Layout>
    );
};

export default DynamicPage;