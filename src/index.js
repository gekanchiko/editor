import React from 'react';

import './index.css';
import * as serviceWorker from './serviceWorker';

console.log('module2 loaded');

const Comp = () => <div><p>MODULE 1</p></div>;

const attach = () => {
  window.module2 = () => {
    delete window.module2;
    return {
      routes: [
        {
          exact: true,
          path: '/mod1',
          component: Comp
        }
      ],
      navBarItems: [
        { path: '/mod1', name: 'Module 1' }
      ]
    };
  };
};

attach();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
