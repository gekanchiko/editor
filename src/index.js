// import React from 'react';

import Editor from './components/Editor';

import './index.css';
import * as serviceWorker from './serviceWorker';

console.log('Module 1 loaded');

const attach = () => {
  window.module1 = () => {
    delete window.module1;
    return {
      routes: [
        {
          exact: true,
          path: '/editor',
          component: Editor
        }
      ],
      navBarItems: [
        { path: '/editor', name: 'Editor' }
      ]
    };
  };
};

attach();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
