import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router/router';
import './assets/less/reset.less';
import 'amfe-flexible/index.js';


ReactDOM.render(
    <Routes/>, 
    document.getElementById('app')
);