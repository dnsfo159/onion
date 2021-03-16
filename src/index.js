import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//AWS 클라이언트 붙히기..
// webpack 설정후 데이터 입히기

import config from './aws-exports';


ReactDOM.render(
    <App />, document.getElementById('root')
);