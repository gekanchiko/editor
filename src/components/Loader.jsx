import { Icon } from 'antd';
import store from '../store';

const React = store.get('react');

const getLoader = () => {
  return (
    <div style={{ padding: 50 }}>
      <Icon type="loading" />
    </div>
  )
};

export default getLoader;