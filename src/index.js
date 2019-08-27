// import Editor from './components/Editor';

import Loader from './components/Loader';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';
import './index.css';

const React = window.React;

const LazyEditor = React.lazy(() => import('./components/Editor'));

const Editor = () => (
  <React.Suspense fallback={<Loader />}>
    <LazyEditor />
  </React.Suspense>
);

const attach = () => {
  window.module1 = () => {
    delete window.module1;
    console.log('Module 1 loaded');
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
