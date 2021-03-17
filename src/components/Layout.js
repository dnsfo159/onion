import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight, h1 } from './Lasyout.css';

const Layout = ({ children }) => {
    return (
        <Container>
            <Header as="h1" className={h1}>
                webpack-for-react header 면 header 지 왜 링크가있는겨?
            </Header>
            {children}
            <Divider />
            <p className={pullRight}>
                Made with <Icon name="heart" color="blue" /> by Esau Silva
            </p>
        </Container>
    );
};

export default Layout;