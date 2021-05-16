import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './src/router/router';
import './src/assets/less/reset.less';
import 'amfe-flexible/index.js';


ReactDOM.render(
    <Routes/>, 
    document.getElementById('app')
);