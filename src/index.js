import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import MyWeb from './MyWeb';

ReactDOM.render(
  <BrowserRouter>
    <MyWeb />
  </BrowserRouter>,
  document.getElementById('root')
);
