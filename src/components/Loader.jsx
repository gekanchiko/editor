import { Icon } from 'antd';
// import store from '../store';

// const React = require('react');

// const React = store.get('react');
const React = window.React;

const Loader = () => {
  return (
    <div style={{ padding: 50 }}>
      <Icon type="loading" />
    </div>
  )
};

export default Loader;